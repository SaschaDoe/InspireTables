import {Table} from "../table";

export const strength = [
    "negligible",
    "weak",
    "mild",
    "moderate",
    "substantial",
    "strong",
    "overwhelming"
];

export class StrengthTable extends Table{
    constructor(){
        super();
        this.title = "Strength"
        this.withEntriesFromList(strength);

    }
}