import {Table} from "../../table";

export const thrillerSubGenres = [
    "conspiracy",
    "psychological",
    "cultural",
]

export const ThrillerSubGenreTableName = "Thriller sub genres";

export class ThrillerSubGenreTable extends Table{
    constructor() {
        super();
        this.title = ThrillerSubGenreTableName;
        this.addEntriesFromList(thrillerSubGenres);
    }
}