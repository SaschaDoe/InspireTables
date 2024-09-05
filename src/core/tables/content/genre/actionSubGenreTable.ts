import {Table} from "../../table";

const actionSubGenres: string[] = [
    "superhero",
    "martial arts",
    "spy",
    "disaster",
];

export const ActionSubGenreTableName = "Action sub genres";

export class ActionSubGenreTable extends Table {
    constructor() {
        super();
        this.title = ActionSubGenreTableName;
        this.addEntriesFromList(actionSubGenres);
    }
}