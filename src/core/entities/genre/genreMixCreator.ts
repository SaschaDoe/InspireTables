import {GenreMix, type GenreWeights} from "./genreMix";
import {getStore} from "../persist/stores";
import {GenreCreator} from "./genreCreator";
import {CreationResult} from "../creationResult";
import {BaseCreator} from "../baseCreator";
import {type Genre, getGenreFullName, getJustMainGenreName} from "./genre";
import {NarrativeMediumTypes} from "../campaign/narrativeMediumTypes";
import {RollResult} from "../../tables/rollResult";
import {addList} from "../../tables/content/other/techLevelTable";
import {themeMap} from "../../tables/content/themes/themes";
import {generateThematicStatement} from "../../tables/content/themes/theme";
import {RandomResult} from "../../tables/randomResult";
import {ComparisonResult, RelationalOperator} from "../../tables/comparisonResult";
import {genreToThemeTableMap} from "../../tables/content/genre/genreToThemeTable";
import {genreToRealThemeMap} from "../../tables/content/genre/genreToRealThemeMap";
import type {Table} from "../../tables/table";
import {themeToRealStatementMap} from "../../tables/content/genre/themeToRealStatementMap";

export class GenreMixCreator extends BaseCreator {
    narrativeMedium: NarrativeMediumTypes = NarrativeMediumTypes.RPG;

    withNarrativeMedium(narrativeMedium: NarrativeMediumTypes) {
        this.narrativeMedium = narrativeMedium;
        return this;
    }

    async create() {
        let genreMix = new GenreMix();

        let {creationResult, numberOfGenres} = await this.addGenres(genreMix);
        this.setGenreWeights(numberOfGenres, creationResult, genreMix);
        this.addTechLists(genreMix);
        genreMix.themes = this.getThemesBy(genreMix, creationResult);

        /* Better to let the user add theme statements because it is much to read
        genreMix.themeStatements = this.getStatements(genreMix.themes, creationResult);
        genreMix.realThemeStatements = this.getRealThemeStatements(genreMix.subGenres.map(genre => genre.name), creationResult);
        */

        creationResult.addCreation(genreMix);
        return creationResult;
    }


    private addTechLists(genreMix: GenreMix) {
        genreMix.techList = genreMix.primaryGenre.technologyLevels;

        for (const subGenre of genreMix.subGenres) {
            genreMix.techList = addList(genreMix.techList, subGenre.technologyLevels);
        }
    }

    private setGenreWeights(numberOfGenres: number, creationResult: CreationResult, genreMix: GenreMix) {
        let remainingWeight = 100;

        // Assign weight to primary genre
        let primaryGenreWeight = this.dice.rollInterval(40, 70);
        if (numberOfGenres === 0) {
            primaryGenreWeight = 100;
        }
        let primaryGenreWeightResult = new RollResult().withInterval(20, 80, "primary genre weight", primaryGenreWeight);
        creationResult.addRollResult(primaryGenreWeightResult);
        let fullName = getGenreFullName(genreMix.primaryGenre.name, genreMix.primaryGenre.subGenreName)
        genreMix.genreWeights[fullName] = primaryGenreWeight;
        console.log("GenreMix: ", genreMix);
        remainingWeight -= primaryGenreWeight;

        for (let i = 0; i < genreMix.subGenres.length; i++) {
            let subGenre = genreMix.subGenres[i];
            let weight: number;

            if (i === genreMix.subGenres.length - 1) {
                weight = remainingWeight;
            } else {
                let min = 1;
                let max = remainingWeight - (genreMix.subGenres.length - i - 1);
                weight = this.dice.rollInterval(min, max);
                let genreWeightResult = new RollResult().withInterval(min, max, `genre weight for ${fullName}`, weight);
                creationResult.addRollResult(genreWeightResult);
                remainingWeight -= weight;
            }

            genreMix.genreWeights[getGenreFullName(subGenre.name, subGenre.subGenreName)] = weight;

            let subGenreWeightResult = new RollResult().withInterval(1, 100, `${fullName} weight`, weight);
            creationResult.addRollResult(subGenreWeightResult);
        }
    }

    private async addGenres(genreMix: GenreMix) {
        let creationResult = new CreationResult();
        let primaryGenreCreationResult = await this.createUniqueGenre(genreMix);
        creationResult.addCreationResult(primaryGenreCreationResult);
        genreMix.primaryGenre = primaryGenreCreationResult.getCreation() as Genre;
        console.log("Primary genre: ", genreMix.primaryGenre)
        let min = 0;
        let hasJustOneGenre = this.dice.getRandom() > 0.8;
        if (!hasJustOneGenre) {
            min = 1;
        }
        let numberOfGenres = this.dice.rollInterval(min, 4);
        let numberOfGenresRollResult = new RollResult().withInterval(1, 4, "number of genres", numberOfGenres);
        creationResult.addRollResult(numberOfGenresRollResult);

        for (let i = 0; i < numberOfGenres; i++) {
            let genreCreationResult = await this.createUniqueGenre(genreMix);
            creationResult.addCreationResult(genreCreationResult);
            genreMix.subGenres.push(genreCreationResult.getCreation() as Genre);
        }
        return {creationResult, numberOfGenres};
    }

    public addTheme(genreMix: GenreMix): GenreMix {
        let attempts = 0;
        const maxAttempts = 10; // Prevent infinite loop if all themes are exhausted

        while (attempts < maxAttempts) {
            let randomChosenGenreName = this.getRandomWeightedGenre(genreMix.genreWeights, null);
            console.log(`get theme by genre: ${randomChosenGenreName}`);
            let justMainGenreName = getJustMainGenreName(randomChosenGenreName);
            let themeTable = genreToThemeTableMap[justMainGenreName];
            console.log(themeTable);
            let themeResult = this.tableManager.getTable(themeTable).withDice(this.dice).roll().combinedString;

            if (!genreMix.themes.includes(themeResult)) {
                genreMix.themes.push(themeResult);
                return genreMix;
            }

            attempts++;
        }

        console.log("Unable to find a new unique theme after multiple attempts.");
        return genreMix;
    }

    public addStatement(genreMix: GenreMix, themeName: string|null){
        if(!themeName){
            let randomThemesIndex = this.dice.rollInterval(0,genreMix.themes.length-1);
            themeName = genreMix.themes[randomThemesIndex];
        }
        let theme = themeMap[themeName];
        let thematicStatement = generateThematicStatement(theme);
        genreMix.themeStatements.push(thematicStatement);
        return genreMix;
    }

    public addRealStatement(genreMix: GenreMix, themeName: string|null){
        let table: Table;
        if(!themeName){
            let genres = genreMix.subGenres.map(genre => genre.name).concat(genreMix.primaryGenre.name);
            let randomGenreIndex = this.dice.rollInterval(0,genres.length-1);
            let genreName = genres[randomGenreIndex];
            let themeTableName = genreToRealThemeMap[genreName];
            table = this.tableManager.getTable(themeTableName)
        }else{
            let themeTableName = themeToRealStatementMap[themeName];
            console.log("Theme Table Name: ", themeTableName);
            table = this.tableManager.getTable(themeTableName)
        }
        let realStatement = table.withDice(this.dice).roll().combinedString;
        console.log("Real statement: ", realStatement);
        genreMix.themeStatements.push(realStatement);
        return genreMix;
    }

    public removeStatement(genreMix: GenreMix, statement: string){
        genreMix.themeStatements = genreMix.themeStatements.filter(s => s !== statement);
        return genreMix;
    }

    private getThemesBy(genreMix: GenreMix, creationResult: CreationResult) {
        let themes: string[] = [];
        let numberOfThemes = this.dice.rollInterval(3,5);
        let numberOfThemesResult = new RandomResult()
            .withDescription("random number for number of themes of a campaign 3-5")
            .withResult(numberOfThemes);
        let randomOfThemesRollResult = new RollResult().withRandomResult(numberOfThemesResult);
        creationResult.addRollResult(randomOfThemesRollResult);

        let maxAttempts = 100; // Safeguard to prevent infinite loops
        let attempts = 0;

        while (themes.length < numberOfThemes && attempts < maxAttempts) {
            attempts++;

            let comparisonResult = new ComparisonResult(
                this.dice.getRandom(),
                RelationalOperator.GREATER,
                0.7,
                "theme from tech level not from genre"
            );
            let rollResul = new RollResult().withComparisonResult(comparisonResult);
            creationResult.addRollResult(rollResul);

            let themeResult: RollResult;

            if (comparisonResult.compare()) {
                //TODO: other
                let randomChosenGenreName = this.getRandomWeightedGenre(genreMix.genreWeights, creationResult);
                console.log(`get theme by genre: ${randomChosenGenreName}`);
                let justMainGenreName = getJustMainGenreName(randomChosenGenreName);
                let themeTable = genreToThemeTableMap[justMainGenreName];
                console.log(themeTable);
                themeResult = this.tableManager.getTable(themeTable).withDice(this.dice).roll();
                creationResult.addRollResult(themeResult);
            } else {
                let randomChosenGenreName = this.getRandomWeightedGenre(genreMix.genreWeights, creationResult);
                console.log(`get theme by genre: ${randomChosenGenreName}`);
                let justMainGenreName = getJustMainGenreName(randomChosenGenreName);
                let themeTable = genreToThemeTableMap[justMainGenreName];
                console.log(themeTable);
                themeResult = this.tableManager.getTable(themeTable).withDice(this.dice).roll();
                creationResult.addRollResult(themeResult);
            }

            let themeName = themeResult.combinedString;

            if (!themes.includes(themeName)) {
                themes.push(themeName);
            }
        }

        if (attempts === maxAttempts) {
            console.warn("Maximum attempts reached while generating unique themes.");
        }

        return themes;
    }



    getRandomWeightedGenre(genreWeights: GenreWeights, creationResult: CreationResult | null): string {
        const totalWeight = Object.values(genreWeights).reduce((sum, weight) => sum + weight, 0);
        let randomResult = new RandomResult();
        let randomNumber = this.dice.getRandom();
        randomResult.result = randomNumber;
        randomResult.description = "random number for choosing genre from genre mix (with weights)";
        let rollResult = new RollResult().withRandomResult(randomResult);
        creationResult?.addRollResult(rollResult);
        let randomWeightedNumber = randomNumber * totalWeight;

        for (const [genre, weight] of Object.entries(genreWeights)) {
            randomWeightedNumber -= weight;
            if (randomWeightedNumber <= 0) {
                return genre;
            }
        }

        // Fallback in case of rounding errors
        return Object.keys(genreWeights)[0];
    }

    async createUniqueGenre(genreMix: GenreMix): Promise<CreationResult> {
        let genreCreationResult;
        let genre: Genre;

        do {
            genreCreationResult = await new GenreCreator(this.tableManager)
                .withNarrativeMedium(this.narrativeMedium)
                .create();
            genre = genreCreationResult.getCreation() as Genre;
        } while (this.isGenreDuplicate(genreMix, genre));

        return genreCreationResult;
    }

    isGenreDuplicate(genreMix: GenreMix, otherGenre: Genre): boolean {
        // Combine primary genre and sub-genres into one array
        const allGenres = [genreMix.primaryGenre, ...genreMix.subGenres].filter(Boolean);

        // Check if any genre in the list matches the logic you provided
        return allGenres.some(genre =>
            getGenreFullName(genre.name, genre.subGenreName) === getGenreFullName(otherGenre.name, otherGenre.subGenreName)
            ||
            genre?.name === otherGenre.name &&
            otherGenre.subGenreName === ""
        );
    }

    async persist(genreMix: GenreMix): Promise<void> {
        console.log("persist genreMix", genreMix.id);
        try {
            let store = await getStore('genreMixStore');
            await store.saveEntity(genreMix);
            console.log(`genre mix saved successfully.`);
        } catch (error) {
            console.error(`Failed to save entities:`, error);
            throw error;
        }
    }

    private getStatements(themes: string[], creationResult: CreationResult) {
        let thematicStatements: string[] = [];
        for (const themeName of themes) {
            console.log("theme: ",themeName);
            let theme = themeMap[themeName];
            let thematicStatement = generateThematicStatement(theme);
            thematicStatements.push(thematicStatement)
        }
        return thematicStatements;
    }

    private getRealThemeStatements(genreNames: string[], creationResult: CreationResult) {
        let thematicStatements: string[] = [];
        for (const genreName of genreNames) {
            console.log("genre: ",genreName);
            let themeTableName = genreToRealThemeMap[genreName];
            console.log("real theme table: ",themeTableName);
            let table = this.tableManager.getTable(themeTableName)
            let thematicStatementResult = table.withDice(this.dice).roll();
            creationResult.addRollResult(thematicStatementResult);
            let statement = thematicStatementResult.combinedString;
            thematicStatements.push(statement)
        }
        return thematicStatements;
    }
}
