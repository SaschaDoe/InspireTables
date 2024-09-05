import {Table} from "../../table";

const crimeSubGenres = [
    "true",
    "legal",
    "mystery",
    "detective",
    "police",
]

export const CrimeSubGenreTableName = "Crime sub genres";

export class CrimeSubGenreTable extends Table{
    constructor() {
        super();
        this.title = CrimeSubGenreTableName;
        this.addEntriesFromList(crimeSubGenres);
    }
}