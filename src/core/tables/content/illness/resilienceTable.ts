import {Table} from "../../table";

export const resiliences = [
    "heat",
    "cold",
    "desiccation",
    "uv light",
    "acidic environments",
    "alkaline environments",
    "high salinity",
    "high pressure",
    "antibiotics",
    "antiviral drugs",
    "antifungal drugs",
    "antiparasitic drugs",
    "disinfectants",
    "antiseptics",
    "immune system",
    "phagocytosis",
    "complement system",
    "antibodies",
    "surface degradation",
    "air exposure",
    "vector defense mechanisms",
    "cross-species barriers",
    "genetic stability",
    "nutrient scarcity",
    "oxygen presence",
    "oxygen absence",
    "mechanical stress",
    "heavy metals",
    "oxidative stress",
    "osmotic stress",
    "competing microorganisms",
    "vaccines",
    "immunotherapy",
    "gene therapy",
    "radiation",
    "extreme ph changes",
    "digestive enzymes",
    "dehydration",
    "temperature fluctuations",
    "host cell defenses",
    "antimicrobial peptides",
    "proteolytic enzymes",
    "bile salts",
    "stomach acid",
    "soap and detergents"
];

/*
This is not taken for illness because it is for now simpler to take the general environmental resilience
and apply it where it is (like the desert for hot etc.).
 */

export class ResilienceTable extends Table {
    constructor() {
        super();
        this.title = "Resilience";
        this.addEntriesFromList(resiliences);
    }
}