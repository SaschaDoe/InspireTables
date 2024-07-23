import {Table} from "../table";

const illnessTransmissionMethods: string[] = [
    "airborne particles",
    "direct physical contact",
    "contaminated water or food",
    "bloodborne pathogens",
    "vector-borne (e.g., insects)",
    "sexual transmission",
    "mother to fetus (vertical transmission)",
    "droplet spread",
    "fomites (contaminated objects)",
    "animal to human (zoonotic transmission)",
    "magical contagion",
    "psychic or telepathic transfer",
    "nanobot dissemination",
    "interdimensional exposure",
    "genetic inheritance",
    "cybernetic interface infection",
    "alien spore inhalation",
    "ritualistic transmission",
    "aura or energy field absorption",
    "temporal or chronological exposure",
    "interstellar travel exposure",
    "synthetic lifeform contamination",
    "quantum entanglement",
    "artificial intelligence symbiosis",
    "hyperspace travel effects"
];

export class IllnessTransmissionTable extends Table{
    constructor() {
        super();
        this.title = "Illness Transmission";
        this.withEntriesFromList(illnessTransmissionMethods);
    }
}