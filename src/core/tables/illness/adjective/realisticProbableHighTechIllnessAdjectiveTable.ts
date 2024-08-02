import {Table} from "../../table";

export const realisticProbableHighTechIllnessAdjectives: string[] = [
    "antibiotic-resistant",
    "bioengineered",
    "nano-engineered",
    "genetic",
    "mutative",
    "neurodegenerative",
    "pandemic",
    "cybernetic"
];

export class RealisticProbableHighTechIllnessAdjectiveTable extends Table{
    constructor() {
        super();
        this.title = "Realistic Probable High Tech Illness Adjective";
        this.withEntriesFromList(realisticProbableHighTechIllnessAdjectives);
    }
}