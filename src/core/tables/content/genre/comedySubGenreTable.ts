import {Table} from "../../table";

const comedySubGenres = [
    "black",
    "slapstick",
    "parody",
    "satire",
    "screwball",
    "spoof",
]

export class ComedySubGenreTable extends Table {
    constructor() {
        super();
        this.title = "Comedy Sub Genre";
        this.addEntriesFromList(comedySubGenres);
    }
}