import {Table} from "../../table";

const warSubGenres = [
    "anti",
    "guerrilla",
    "naval", //can also be in space
    "siege",
    "post war",
];

export const WarSubGenreTableName = "War sub genres";

export class WarSubGenreTable extends Table {
    constructor() {
        super();
        this.title = WarSubGenreTableName;
        this.addEntriesFromList(warSubGenres);
    }
}