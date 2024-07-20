import {Table} from "../table";

const actionSubGenres: string[] = [
    "superhero",
    "martial arts",
    "spy",
    "disaster",
];

export class ActionSubGenreTable extends Table {
    constructor() {
        super();
        this.title = "Action Sub Genres";
        this.withEntriesFromList(actionSubGenres);
    }
}