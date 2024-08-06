import {Table} from "../table";
import {Entry} from "../entry";
import {EntryPart} from "../entryPart";
import {EntrySetting} from "../entrySetting";

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
        this.add(new Entry().withText("certain",1));
        this.add(new Entry().withText("high",30));
        this.add(new Entry().withText("mid",38));
        this.add(new Entry().withText("low",30));
        this.add(new Entry().withText("non existing",1));
    }
}