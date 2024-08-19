import {Table} from "../../../table";

export const unrealisticLessProbableHighTechIllnessAdjectives: string[] = [
    "psychic",
    "hyperspatial",
    "nanite-infested",
    "reality-warping",
    "dimensionally-phased"
];

export class UnrealisticLessProbableHighTechIllnessAdjectiveTable extends Table{
    constructor() {
        super();
        this.title = "Unrealistic less Probable High Tech Illness Adjective";
        this.addEntriesFromList(unrealisticLessProbableHighTechIllnessAdjectives);
    }
}