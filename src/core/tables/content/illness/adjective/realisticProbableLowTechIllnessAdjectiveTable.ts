import {Table} from "../../../table";

export const realisticProbableLowTechIllnessAdjectives: string[] = [
    "contagious",
    "infectious",
    "virulent",
    "debilitating",
    "chronic",
    "acute",
    "lethal",
    "benign",
    "endemic",
    "epidemic",
    "common"
];

export class RealisticProbableLowTechIllnessAdjectiveTable extends Table{
    constructor() {
        super();
        this.title = "Realistic Probable Low Tech Illness Adjective";
        this.withEntriesFromList(realisticProbableLowTechIllnessAdjectives);
    }
}