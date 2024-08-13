import {Table} from "../../table";
import {Entry} from "../../core/entry/entry";
import {MainGenreTable} from "./mainGenres";
import {ComedySubGenreTable} from "./comedySubGenreTable";
import {ActionSubGenreTable} from "./actionSubGenreTable";

export class AllGenreTable extends Table{
    constructor() {
        super();
        this.title = "All Genres";
        this.addEntry(new Entry().withTable(new MainGenreTable()))
        this.addEntry(new Entry().withTable(new ComedySubGenreTable()))
        this.addEntry(new Entry().withTable(new ActionSubGenreTable()))
        //TODO Propability of fantasy or sci fi very high / love low
    }
}