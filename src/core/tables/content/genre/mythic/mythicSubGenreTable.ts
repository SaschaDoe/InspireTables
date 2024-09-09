import {Table} from "../../../table";

const mythSubGenres = [
    "ecological",
    "cyclic",
];

export const MythSubGenreTableName = "Myth sub genres";

export class MythSubGenreTable extends Table{
    constructor() {
        super();
        this.title = MythSubGenreTableName;
        this.addEntriesFromList(mythSubGenres);
    }
}