import {Table} from "../table";

const generalCures: string[] = [
    "antibiotics",
    "antivirals",
    "vaccination",
    "herbal remedies",
    "rest and hydration",
    "surgery",
    "magic potions",
    "alchemy",
    "physical therapy",
    "radiation therapy",
    "chemotherapy",
    "acupuncture",
    "blood transfusion",
    "immune therapy",
    "detoxification",
    "prayer or divine intervention",
    "spellcasting",
    "elixirs",
    "meditation and healing rituals",
    "dietary changes",
    "exercise",
    "heat treatment",
    "cold compresses",
    "leech therapy",
    "aromatherapy",
    "crystal healing",
    "shamanic healing",
    "regenerative magic",
    "enchantments",
    "ancient relics or artifacts"
];

export class IllnessCureTable extends Table{
    constructor() {
        super();
        this.title = "Illness Cure";
        this.withEntriesFromList(generalCures);
    }
}