import {Table} from "../../table";

export const mainGenres: string[] = [
    "love",
    "memoir",
    "action",
    "comedy",
    "crime",
    "explorer",
    "fantasy",
    "gangster",
    "heist",
    "horror",
    "myth",
    "sciFi",
    "sport",
    "thriller",
    "war",
    "western",
    "drama",
];

export class MainGenreTable extends Table{
    constructor() {
        super();
        this.title = "Main Genres";
        this.withEntriesFromList(mainGenres);
    }
}