import {BaseCreator} from "../baseCreator";
import { CreationResult } from "../creationResult";
import type { Entity } from "../entity";
import {Campaign} from "./campaign";
import {GenreMixCreator} from "../genre/genreMixCreator";
import type {GenreMix} from "../genre/genreMix";
import {NarrativeMediumTypes} from "./narrativeMediumTypes";
import {Settings} from "./settings";
import {WorldCreator} from "../world/worldCreator";
import type {World} from "../world/world";
import {getStore} from "../persist/stores";
import {RollResult} from "../../tables/rollResult";
import {ComparisonResult, RelationalOperator} from "../../tables/comparisonResult";
import {GeneralThemesTable} from "../../tables/content/genre/generalThemesTable";
import {genreToSubGenreMap} from "../../tables/content/genre/genreToSubGenreMap";
import {RandomResult} from "../../tables/randomResult";
import {genreToThemeMap} from "../../tables/content/themes/genreToThemeTableMap";

export class CampaignCreator extends BaseCreator {
    narrativeMedium: NarrativeMediumTypes = NarrativeMediumTypes.RPG;

    withNarrativeMedium(narrativeMedium: NarrativeMediumTypes){
        this.narrativeMedium = narrativeMedium;
        return this;
    }

    async create() {
        const campaign = new Campaign();
        const creationResult = this.initializeCreation(campaign);
        let genreCreationResult = await new GenreMixCreator(this.tableManager)
            .withNarrativeMedium(this.narrativeMedium)
            .create();
        creationResult.addCreationResult(genreCreationResult);
        campaign.settings = new Settings();
        campaign.settings.narrativeMediumType = this.narrativeMedium;

        //Gives you also the TechLevel for setting and theme
        campaign.genreMix = genreCreationResult.getCreation() as GenreMix;

        campaign.themes = this.getThemesBy(campaign.genreMix, creationResult);
        campaign.themeStatements = this.getStatements(campaign.themes, creationResult);

        let numberOfThemes = this.dice.rollInterval(2,5);
        let rollResult = new RollResult()
            .withInterval(2,3,"number of themes", numberOfThemes);
        genreCreationResult.addRollResult(rollResult);
        for(let i = 0; i < numberOfThemes; i++){
            let comparisonResult = new ComparisonResult(
                this.dice.getRandom(),
                RelationalOperator.GREATER,
                0.7,
                "has general theme");
            let rollResul = new RollResult().withComparisonResult(comparisonResult);
            genreCreationResult.addRollResult(rollResul);

            let themeResult: RollResult;
            if(comparisonResult.compare()){
                themeResult = new GeneralThemesTable().withDice(this.dice).roll();
                genreCreationResult.addRollResult(themeResult);
            }else{
                let randomChosenGenreName = this.getRandomWeightedGenre(campaign.genreMix.genreWeights, creationResult);
                console.log(randomChosenGenreName);
                let randomChosenGenre = genreToSubGenreMap[randomChosenGenreName];
                if(randomChosenGenre){
                    console.log(randomChosenGenre);
                    let table = this.tableManager.getTable(randomChosenGenre);
                    console.log(table);
                    themeResult = table.withDice(this.dice).roll();
                    genreCreationResult.addRollResult(themeResult);
                    campaign.themes.push(themeResult.combinedString);
                }
            }

        }
        await this.setId(campaign);
        return creationResult;
    }

    getRandomWeightedGenre(genreWeights: Map<string, number>, creationResult: CreationResult): string {
        const totalWeight = Array.from(genreWeights.values()).reduce((sum, weight) => sum + weight, 0);
        let randomResult = new RandomResult();
        let randomNumber = this.dice.getRandom();
        randomResult.result = randomNumber
        randomResult.description = "random number for choosing genre from genre mix (with weights)"
        let rollResult = new RollResult().withRandomResult(randomResult);
        creationResult.addRollResult(rollResult);
        let randomWeightedNumber = randomNumber * totalWeight;

        for (const [genre, weight] of genreWeights.entries()) {
            randomWeightedNumber -= weight;
            if (randomWeightedNumber <= 0) {
                return genre;
            }
        }

        // Fallback in case of rounding errors
        return Array.from(genreWeights.keys())[0];
    }

    async generateWorld(campaign: Campaign){
        let worldCreationResult = new WorldCreator(this.tableManager)
            .withGenreMix(campaign.genreMix)
            .create();
        campaign.world = worldCreationResult.getCreation() as World;
        let worldStore = await getStore('worldStore');
        await worldStore.saveEntity(campaign.world);
        await this.persist(campaign);
    }

    async persist(entity: Entity): Promise<void> {
        let campaign = entity as Campaign;
        let campaignStore = await getStore('campaignStore');
        await campaignStore.saveEntity(campaign);
    }

    private getThemesBy(genreMix: GenreMix, creationResult: CreationResult) {
        //TODO: get themes by genre // and tech level...
        //get theme from genre or from tech
        let themes: string[] = [];
        let numberOfThemes = this.getRandomNumberBetween(1,5)
        let numberOfThemesResult = new RandomResult()
            .withDescription("random number for number of themes of a campaign 1-5")
            .withResult(numberOfThemes);
        let randomOfThemesRollResult = new RollResult().withRandomResult(numberOfThemesResult);
        creationResult.addRollResult(randomOfThemesRollResult);

        for (let i = 0; i < numberOfThemes; i++) {
            let comparisonResult = new ComparisonResult(
                this.dice.getRandom(),
                RelationalOperator.GREATER,
                0.7,
                "theme from tech level not from genre");
            let rollResul = new RollResult().withComparisonResult(comparisonResult);
            creationResult.addRollResult(rollResul);

            if(comparisonResult.compare()){
                //TODO: theme from tech
            }else{
                let randomChosenGenreName = this.getRandomWeightedGenre(genreMix.genreWeights, creationResult);
                console.log(`get theme by genre: ${randomChosenGenreName}`);
                let themeTable = genreToThemeMap[randomChosenGenreName];
                let themeResult = this.tableManager.getTable(themeTable).withDice(this.dice).roll();
                creationResult.addRollResult(themeResult);
                themes.push(themeResult.combinedString);
            }
        }

        return themes;
    }

    getRandomNumberBetween(min: number, max: number): number {
        return Math.floor(this.dice.getRandom() * (max - min + 1)) + min;
    }

    private getStatements(themes: string[], creationResult: CreationResult) {
        let thematicStatements: string[] = [];
        for (const theme of themes) {

        }
        return thematicStatements;
    }
}