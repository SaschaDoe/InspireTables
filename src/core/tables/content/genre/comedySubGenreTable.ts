import {Table} from "../../table";

const comedySubGenres = [
    "black",
    "slapstick",
    "parody",
    "satire",
    "screwball",
    "spoof",
]

export const ComedySubGenreTableName = "Comedy sub genres";

export class ComedySubGenreTable extends Table {
    constructor() {
        super();
        this.title = ComedySubGenreTableName;
        this.addEntriesFromList(comedySubGenres);
    }
}