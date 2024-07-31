import {Table} from "../table";

export const illnessWorldImpacts: string[] = [
    "economic downturn",
    "social unrest",
    "quarantine measures",
    "healthcare system overload",
    "travel restrictions",
    "population decline",
    "increased mortality rate",
    "disruption of supply chains",
    "changes in public policies",
    "stigmatization of affected groups",
    "advancements in medical research",
    "rise in mental health issues",
    "shift in population demographics",
    "increased public health awareness",
    "cultural changes",
    "political tensions",
    "religious interpretations and movements",
    "ecological changes",
    "changes in work habits and environments",
    "educational system disruptions",
    "technological advancements for healthcare",
    "strengthening of community bonds",
    "emergence of new political powers",
    "changes in artistic and literary expression",
    "modification of social norms and behaviors",
    "awakening of ancient beings",
    "emergence of new magical abilities in the population",
    "creation of forbidden zones tainted by magic",
    "collapse of magical barriers or protections",
    "altered behavior of magical creatures",
    "enchantment of natural landscapes",
    "distortion of time and space in affected areas",
    "rise of cults worshiping the illness as a deity",
    "emergence of a new class of magic users",
    "transformation or mutation of flora and fauna",
    "prophecies being fulfilled or altered",
    "opening of portals to other realms",
    "shifts in the balance of elemental forces",
    "revival of long-forgotten rituals and spells",
    "corruption or purification of sacred sites",
    "creation of new mythologies and legends",
    "changes in the alignment of stars and celestial bodies",
    "alteration of the physical laws of the universe",
    "rise or fall of powerful sorcerers or witches",
    "emergence of new sentient races or species",
    "discovery of previously unknown magical resources",
    "enhancement or suppression of magical powers",
    "creation of magical artifacts related to the illness",
    "initiation of quests to cure or exploit the illness",
    "triggering of apocalyptic or world-changing events"
];

export class IllnessWorldEffectTable extends Table{
    constructor() {
        super();
        this.title = "Illness World Effect";
        this.withEntriesFromList(illnessWorldImpacts);
    }
}