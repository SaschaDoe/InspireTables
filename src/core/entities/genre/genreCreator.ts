import {BaseCreator} from "../baseCreator";
import {Genre} from "./genre";
import {CreationResult} from "../creationResult";
import {MainGenreBooksTableName, MainGenreTableName} from "../../tables/content/genre/mainGenres";
import {NarrativeMediumTypes} from "../campaign/narrativeMediumTypes";
import {Table} from "../../tables/table";
import {ComparisonResult, RelationalOperator} from "../../tables/comparisonResult";
import {RollResult} from "../../tables/rollResult";
import {genreToSubGenreMap} from "../../tables/content/genre/genreToSubGenreMap";
import {reduceList, techLevelsWithProbabilities, TechLevelTable} from "../../tables/content/other/techLevelTable";
import {genreToTechLevelMap} from "../../tables/content/genre/genreTechLevelMap";

export class GenreCreator extends BaseCreator {
    private narrativeMedium: NarrativeMediumTypes = NarrativeMediumTypes.RPG;

    withNarrativeMedium(narrativeMedium: NarrativeMediumTypes){
        this.narrativeMedium = narrativeMedium;
        return this;
    }

    async create() {
        let genre = new Genre();
        let creationResult = new CreationResult();
        let mainGenreTable: Table;
        if(this.narrativeMedium === NarrativeMediumTypes.Book){
            mainGenreTable = this.tableManager.getTable(MainGenreBooksTableName);
        }else{
            mainGenreTable = this.tableManager.getTable(MainGenreTableName);
        }

        let mainGenreRollResult = mainGenreTable.withDice(this.dice).roll();
        creationResult.addRollResult(mainGenreRollResult);

        genre.name = mainGenreRollResult.combinedString;

        let comparisonResult = new ComparisonResult(
            this.dice.getRandom(),
            RelationalOperator.GREATER,
            0.8,
            "is sub genre");
        let isSubGenreResult = new RollResult().withComparisonResult(comparisonResult);
        creationResult.addRollResult(isSubGenreResult);
        let hasSubGenre = comparisonResult.compare();

        if(hasSubGenre){
            console.log(genre.name);
            let subGenreTableTitle = genreToSubGenreMap[genre.name];
            if(subGenreTableTitle){
                console.log(subGenreTableTitle);
                let subGenreTable = this.tableManager.getTable(subGenreTableTitle);
                let subGenreResult = subGenreTable.withDice(this.dice).roll();
                creationResult.addRollResult(subGenreResult);
                genre.subGenreName = subGenreResult.combinedString;
            }
        }

        let techLevelVariation = this.dice.rollInterval(1,techLevelsWithProbabilities.length);
        console.log(genre.name)
        let techLevelProbabilities = genreToTechLevelMap[genre.name];
        let techLevelTable: Table;
        if(techLevelProbabilities){
            console.log(techLevelProbabilities);
            techLevelTable = new Table().withTitle(`Tech Level of ${genre.name}`);
            techLevelTable.addProbabilityList(techLevelProbabilities);
            console.log(techLevelTable)
        }else{
            techLevelTable = new TechLevelTable();
        }

        let techLevelBaseResult = techLevelTable.withDice(this.dice).roll();
        creationResult.addRollResult(techLevelBaseResult);
        genre.techLevelBase = techLevelBaseResult.combinedString;
        genre.technologyLevels = reduceList(techLevelProbabilities, techLevelBaseResult.rolledIndex, techLevelVariation);

        await this.setId(genre);
        creationResult.addCreation(genre);
        return creationResult;
    }

    async persist(genre: Genre): Promise<void> {
        console.log("Persisting genre entity:", genre);
        // Implement persistence logic here
    }
}