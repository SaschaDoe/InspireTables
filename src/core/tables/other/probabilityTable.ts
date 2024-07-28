import {Table} from "../table";

export const probability = [
    "certain",
    "high",
    "mid",
    "low",
    "non existing"
];

export class ProbabilityTable extends Table{
    constructor(){
        super();
        this.title = "Probability"
        this.withEntriesFromList(probability);

    }
}