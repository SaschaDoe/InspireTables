import {Table} from "../../table";

const horrorSubGenres = [
    "lovecraftian",
    "body",
    "splatter",
    "psychological",
    "supernatural", //like ghost or vampire
    "house",
];

export const HorrorSubGenreTableName = "Horror sub genres";

export class HorrorSubGenreTable extends Table{
    constructor() {
        super();
        this.title = HorrorSubGenreTableName;
        this.addEntriesFromList(horrorSubGenres);
    }
}