import {BaseCreator} from "../baseCreator";
import {Genre} from "./genre";
import {CreationResult} from "../creationResult";
import {MainGenreTableName} from "../../tables/content/genre/mainGenres";

export class GenreCreator extends BaseCreator<Genre> {
    create(): CreationResult {
        let genre = new Genre();
        let creationResult = new CreationResult();
        const mainGenreTable = this.tableManager.getTable(MainGenreTableName);
        let mainGenreRollResult = mainGenreTable.withDice(this.dice).roll();
        creationResult.addRollResult(mainGenreRollResult);

        genre.name = mainGenreRollResult.combinedString;

        creationResult.addCreation(genre);
        return creationResult;
    }

    async persist(genre: Genre): Promise<void> {
        console.log("Persisting genre entity:", genre);
        // Implement persistence logic here
    }
}