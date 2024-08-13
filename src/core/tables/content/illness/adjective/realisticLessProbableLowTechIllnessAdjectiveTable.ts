import {Table} from "../../../table";

export const realisticLessProbableLowTechIllnessAdjectives: string[] = [
    "mysterious",
    "psychosomatic",
    "toxic",
    "ancient",
    "parasitic",
    "unknown",
];

export class RealisticLessProbableLowTechIllnessAdjectiveTable extends Table{
    constructor() {
        super();
        this.title = "Realistic Probable Low Tech Illness Adjective";
        this.withEntriesFromList(realisticLessProbableLowTechIllnessAdjectives);
    }
}