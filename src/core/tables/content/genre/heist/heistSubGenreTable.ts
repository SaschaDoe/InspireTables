import {Table} from "../../../table";

const heistSubGenres = [
    "con artists",
    "self liberation",
    "reverse heist",
]

export const HeistSubGenreTableName = "Heist sub genres";

export class HeistSubGenreTable extends Table{
    constructor() {
        super();
        this.title = HeistSubGenreTableName;
        this.addEntriesFromList(heistSubGenres);
    }
}