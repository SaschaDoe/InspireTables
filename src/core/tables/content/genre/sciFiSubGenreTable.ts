import {Table} from "../../table";

const sciFiSubGenres = [
    "space",
    "time travel",
    "dystopian",
    "cyberpunk",
    "post-apocalyptic",
    "space opera", //mostly no earth
    "alternate history",
    "first contact",
    "parallel universe",
]

export const SciFiSubGenreTableName = "Sci-Fi sub genre table";

export class SciFiSubGenreTable extends Table {
    constructor() {
        super();
        this.title = SciFiSubGenreTableName;
        this.addEntriesFromList(sciFiSubGenres);
    }
}