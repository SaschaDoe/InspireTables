import {Table} from "../table";

export const illnessAdjectiveTable: string[] = [
    "contagious",
    "infectious",
    "virulent",
    "debilitating",
    "chronic",
    "acute",
    "mysterious",
    "lethal",
    "benign",
    "endemic",
    "epidemic",
    "rare",
    "genetic",
    "mutative",
    "psychosomatic",
    "alien",
    "magical",
    "cursed",
    "nano-engineered",
    "cybernetic",
    "parasitic",
    "psychic",
    "interdimensional",
    "bioengineered",
    "antibiotic-resistant",
    "supernatural",
    "ancient",
    "mythical",
    "cosmic",
    "elemental",
    "arcane",
    "toxic",
    "radioactive",
    "neurodegenerative",
    "psychotropic",
    "hallucinogenic",
    "transmutable",
    "pandemic",
    "zombifying",
    "necrotic",
    "phantasmal",
    "chronic",
    "hyperspatial"
];

export class IllnessAdjectiveTable extends Table{
    constructor() {
        super();
        this.title = "Illness Adjective";
        this.withEntriesFromList(illnessAdjectiveTable);
    }
}