import {Table} from "../../../table";

export const loveSubGenres = [
    "dark", //like in fifty shades
    "suspense", //like in bodyguard
    "non sexual", //like in supernatural
]

export const LoveSubGenreTableName = "Love sub genres";

export class LoveSubGenreTable extends Table{
    constructor() {
        super();
        this.title = LoveSubGenreTableName;
        this.addEntriesFromList(loveSubGenres);
    }
}