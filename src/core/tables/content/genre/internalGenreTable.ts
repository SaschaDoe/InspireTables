import {Table} from "../../table";

export const internalGenres = [
    "worldview",
    "status",
    "morality",
];

export const InternalGenreTableName = "Internal genres";

export class InternalGenreTable extends Table{
    constructor() {
        super();
        this.title = InternalGenreTableName;
        this.addEntriesFromList(internalGenres);
    }
}