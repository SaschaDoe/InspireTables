import {BaseCreator} from "../baseCreator";
import {Genre} from "./genre";
import {CreationResult} from "../creationResult";
import {MainGenreBooksTableName, MainGenreTableName} from "../../tables/content/genre/mainGenres";
import {NarrativeMediumTypes} from "../campaign/narrativeMediumTypes";
import type {Table} from "../../tables/table";

export class GenreCreator extends BaseCreator {
    private narrativeMedium: NarrativeMediumTypes = NarrativeMediumTypes.RPG;

    withNarrativeMedium(narrativeMedium: NarrativeMediumTypes){
        this.narrativeMedium = narrativeMedium;
        return this;
    }

    create(): CreationResult {
        let genre = new Genre();
        let creationResult = new CreationResult();
        let mainGenreTable: Table;
        console.log("create genre!!!");
        if(this.narrativeMedium === NarrativeMediumTypes.Book){
            console.log("Genre Books are used");
            mainGenreTable = this.tableManager.getTable(MainGenreBooksTableName);
        }else{
            mainGenreTable = this.tableManager.getTable(MainGenreTableName);
        }

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