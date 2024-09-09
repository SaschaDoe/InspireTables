import exp from "node:constants";
import {Table} from "../../../table";

const explorerSubGenres = [
    "open world",
    "survival",
    "dungeon crawler",
    "space", 
    "city crawler",
    "time",
]

export const ExplorerSubGenreTableName = "Explorer sub genres";

export class ExplorerSubGenreTable extends Table{
    constructor() {
        super();
        this.title = ExplorerSubGenreTableName;
        this.addEntriesFromList(explorerSubGenres);
    }
}