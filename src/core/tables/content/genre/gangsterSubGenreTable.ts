import {Table} from "../../table";

const gangsterSubGenres = [
    "mafia",
    "mob",
    "noir",
]

export const GangsterSubGenreTableName = "Gangster sub genres";

export class GangsterSubGenreTable extends Table {
    constructor() {
        super();
        this.title = GangsterSubGenreTableName;
        this.addEntriesFromList(gangsterSubGenres);
    }
}