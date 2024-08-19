import {Table} from "../../../table";

export const realisticLowTechIllnessAdjectives: [string, string][] = [
    ["rare", "mysterious"],
    ["rare", "psychosomatic"],
    ["rare", "toxic"],
    ["rare", "ancient"],
    ["rare", "parasitic"],
    ["rare", "unknown"],
    ["common", "contagious"],
    ["common", "infectious"],
    ["common", "virulent"],
    ["common", "debilitating"],
    ["common", "chronic"],
    ["common", "acute"],
    ["common", "lethal"],
    ["common", "benign"],
    ["common", "endemic"],
    ["common", "epidemic"],
    ["common", "common"]
];

export class RealisticLowTechIllnessAdjectiveTable extends Table{
    constructor() {
        super();
        this.title = "Realistic Low Tech Illness Adjective";
        this.addProbabilityListWithWords(realisticLowTechIllnessAdjectives);
    }



}