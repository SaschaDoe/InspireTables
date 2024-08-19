import {Table} from "../../table";
import {Entry} from "../../core/entry/entry";

export const probabilities = [
    "certain",
    "high",
    "mid",
    "low",
    "non existing",
];

export class ProbabilityTable extends Table{
    constructor(){
        super();
        this.title = "Probability";
        this.entryList.with(new Entry().withText("certain",1));
        this.entryList.with(new Entry().withText("high",30));
        this.entryList.with(new Entry().withText("mid",38));
        this.entryList.with(new Entry().withText("low",30));
        this.entryList.with(new Entry().withText("non existing",1));
    }
}