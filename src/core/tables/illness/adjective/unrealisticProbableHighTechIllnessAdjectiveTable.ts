import {Table} from "../../table";

export const unrealisticProbableHighTechIllnessAdjectives: string[] = [
    "alien",
    "interdimensional",
    "cosmic",
    "quantum",
    "temporally-shifted"
];

export class UnrealisticProbableHighTechIllnessAdjectiveTable extends Table{
    constructor() {
        super();
        this.title = "Unrealistic Probable High Tech Illness Adjective";
        this.withEntriesFromList(unrealisticProbableHighTechIllnessAdjectives);
    }
}