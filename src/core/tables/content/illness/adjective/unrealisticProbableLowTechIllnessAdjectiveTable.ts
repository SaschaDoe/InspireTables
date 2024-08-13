import {Table} from "../../../table";

export const unrealisticProbableLowTechIllnessAdjectives: string[] = [
    "cursed",
    "magical",
    "supernatural",
    "mythical",
    "arcane"
];

export class UnrealisticProbableLowTechIllnessAdjectiveTable extends Table{
    constructor() {
        super();
        this.title = "Unrealistic Probable Low Tech Illness Adjective";
        this.withEntriesFromList(unrealisticProbableLowTechIllnessAdjectives);
    }
}