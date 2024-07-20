import {Table} from "../table";
import {Entry} from "../entry";
import {MainGenreTable} from "./mainGenres";
import {ComedySubGenreTable} from "./comedySubGenreTable";
import {ActionSubGenreTable} from "./actionSubGenreTable";

export class AllGenreTable extends Table{
    constructor() {
        super();
        this.title = "All Genres";
        this.add(new Entry().withTable(new MainGenreTable()));
        this.add(new Entry().withTable(new ComedySubGenreTable()));
        this.add(new Entry().withTable(new ActionSubGenreTable()));
        //TODO Propability of fantasy or sci fi very high / love low
    }
}