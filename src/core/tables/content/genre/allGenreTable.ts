import {Table} from "../../table";
import {Entry} from "../../core/entry/entry";
import {MainGenreTable} from "./mainGenres";
import {ComedySubGenreTable} from "./comedy/comedySubGenreTable";
import {ActionSubGenreTable} from "./action/actionSubGenreTable";

export class AllGenreTable extends Table{
    constructor() {
        super();
        this.title = "All Genres";
        this.entryList.with(new Entry().withTable(new MainGenreTable()))
        this.entryList.with(new Entry().withTable(new ComedySubGenreTable()))
        this.entryList.with(new Entry().withTable(new ActionSubGenreTable()))
        //TODO Propability of fantasy or sci fi very high / love low
        //Do I need the table?
    }
}