import {Table} from "../table";

export const strengths = [
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
        this.withEntriesFromList(strengths);

    }
}