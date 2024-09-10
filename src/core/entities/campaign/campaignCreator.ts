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
import {GeneralThemesTable} from "../../tables/content/genre/theme/generalThemesTable";
import {IntervalResult} from "../../tables/intervalResult";
import type {Table} from "../../tables/table";
import {FantasyThemesTable} from "../../tables/content/genre/theme/fantasyThemesTable";
import {genreToSubGenreMap} from "../../tables/content/genre/genreToSubGenreMap";

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
        campaign.genreMix = genreCreationResult.getCreation() as GenreMix;
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
            genreCreationResult.addRollResult(rollResult);

            let themeResult: RollResult;
            if(comparisonResult.compare()){
                themeResult = new GeneralThemesTable().withDice(this.dice).roll();
                genreCreationResult.addRollResult(themeResult);
            }else{
                let randomChosenGenreName = this.getRandomWeightedGenre(campaign.genreMix.genreWeights);
                console.log(randomChosenGenreName);
                let randomChosenGenre = genreToSubGenreMap[randomChosenGenreName];
                if(randomChosenGenre){
                    console.log(randomChosenGenre);
                    let table = this.tableManager.getTable(randomChosenGenre);
                    console.log(table);
                    themeResult = table.withDice(this.dice).roll();
                    genreCreationResult.addRollResult(themeResult);
                }
            }
            campaign.themes.push(themeResult.combinedString);
        }
        await this.setId(campaign);
        return creationResult;
    }

    getRandomWeightedGenre(genreWeights: Map<string, number>): string {
        const totalWeight = Array.from(genreWeights.values()).reduce((sum, weight) => sum + weight, 0);
        let randomNumber = this.dice.getRandom() * totalWeight;

        for (const [genre, weight] of genreWeights.entries()) {
            randomNumber -= weight;
            if (randomNumber <= 0) {
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
}