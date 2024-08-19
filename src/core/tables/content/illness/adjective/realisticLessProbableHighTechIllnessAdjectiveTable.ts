import {Table} from "../../../table";

export const realisticLessProbableHighTechIllnessAdjectives: string[] = [
    "radioactive",
    "psychotropic",
    "hallucinogenic",
    "transmutable",
    "cryogenic"
];

export class RealisticLessProbableHighTechIllnessAdjectiveTable extends Table{
    constructor() {
        super();
        this.title = "Realistic Less Probable Low Tech Illness Adjective";
        this.addEntriesFromList(realisticLessProbableHighTechIllnessAdjectives)
    }
}