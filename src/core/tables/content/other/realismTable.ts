import {Table} from "../../table";

export const realisms = [
    "high-fantasy",
    "fantasy",
    "costume realism",
    "realistic",
];

export class RealismTable extends Table{
    constructor() {
        super();
        this.title = "Realism";
        this.withEntriesFromList(realisms);
    }
}