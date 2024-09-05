import {Table} from "../../table";

const westernSubGenres = [
    "anti",
];

export const WesternSubGenreTableName = "Western sub genres";

export class WesternSubGenreTable extends Table{
    constructor() {
        super();
        this.title = WesternSubGenreTableName;
        this.addEntriesFromList(westernSubGenres);
    }
}