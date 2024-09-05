import {Table} from "../../table";

const fantasySubGenres: string[] = [
    "swords and sorcery",
    "urban", //technology level = modern
    "high", //magic system highFantasy
    "grim dark", //tone of genre
    "historical",
    "alternate history",
    "fairytale"
];

export const FantasySubGenreTableName = "Fantasy sub genres"

export class FantasySubGenreTable extends Table {
    constructor() {
        super();
        this.title = FantasySubGenreTableName;
        this.addEntriesFromList(fantasySubGenres);
    }
}