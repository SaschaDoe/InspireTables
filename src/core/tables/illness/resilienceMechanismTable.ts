import {Table} from "../table";

export const resilienceMechanisms = [
    "production of heat-shock proteins",
    "increased membrane stability",
    "enzyme thermostabilization",
    "production of antifreeze proteins",
    "increased membrane fluidity",
    "cold-adapted enzymes",
    "production of trehalose or other compatible solutes",
    "entering dormant state",
    "spore formation",
    "production of pigments (e.g., melanin)",
    "enhanced DNA repair mechanisms",
    "formation of protective biofilms",
    "proton pumps to maintain internal pH",
    "acid-resistant cell walls",
    "production of alkaline compounds",
    "enzymatic degradation of antibiotics",
    "altered antibiotic target sites",
    "efflux pumps to expel antibiotics",
    "decreased membrane permeability",
    "antigenic variation",
    "molecular mimicry",
    "immunosuppression",
    "intracellular survival",
    "production of antioxidant enzymes",
    "accumulation of carotenoids",
    "metabolic flexibility",
    "formation of persistence cells",
    "enhanced nutrient acquisition systems",
    "production of bacteriocins or other antimicrobial compounds",
    "quorum sensing",
    "cell wall thickening",
    "capsule formation",
    "alteration of surface proteins",
    "production of enzymes that break down antimicrobial substances",
    "changes in metabolic pathways",
    "horizontal gene transfer",
    "rapid mutation rates",
    "symbiotic relationships with other microorganisms",
    "formation of endospores",
    "production of exopolysaccharides",
    "changes in cell morphology",
    "production of surfactants",
    "formation of persister cells",
    "activation of stress response genes",
    "production of siderophores for iron acquisition"
];

export class ResilienceMechanismsTable extends Table {
    constructor() {
        super();
        this.title = "Resilience Mechanisms";
        this.withEntriesFromList(resilienceMechanisms);
    }
}