import {Table} from "../../../table";
import {unrealisticProbableLowTechIllnessAdjectives} from "./unrealisticProbableLowTechIllnessAdjectiveTable";

export const unrealisticLessProbableLowTechIllnessAdjectives: string[] = [
    "phantasmal",
    "soul-draining",
    "demonic",
    "eldritch",
    "fae-touched"
];

export class UnrealisticLessProbableLowTechIllnessAdjectiveTable extends Table{
    constructor() {
        super();
        this.title = "Unrealistic less probable Low Tech Illness Adjective";
        this.addEntriesFromList(unrealisticProbableLowTechIllnessAdjectives);
    }
}