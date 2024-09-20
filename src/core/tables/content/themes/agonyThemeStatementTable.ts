import {Table} from "../../table";

const agonyThemeStatements = [
    "agony reveals the depths of human endurance",
    "in agony, we confront our innermost fears and weaknesses",
    "agony can be a catalyst for profound personal transformation",
    "the experience of agony connects us to our shared humanity",
    "agony tests the limits of both body and spirit",
    "through agony, we discover hidden reservoirs of strength",
    "agony can strip away pretense, revealing our true selves",
    "the memory of agony can shape our future choices and perceptions",
    "agony challenges our understanding of justice and meaning in life",
    "in agony, time seems to stretch and distort",
    "agony can forge unbreakable bonds between those who suffer together",
    "the aftermath of agony can lead to either growth or despair",
    "agony forces us to confront our mortality and limitations",
    "the fear of agony can be as paralyzing as the experience itself",
    "agony can be a crucible for creativity and artistic expression",
    "to live is to suffer, to survive is to find some meaning in the suffering",
    "pain is inevitable. suffering is optional",
    "the wound is the place where the light enters you",
    "out of suffering have emerged the strongest souls; the most massive characters are seared with scars",
    "there is no coming to consciousness without pain",
    "the truth that many people never understand is that the more you try to avoid suffering, the more you suffer",
    "although the world is full of suffering, it is also full of the overcoming of it",
    "character cannot be developed in ease and quiet. only through experience of trial and suffering can the soul be strengthened",
    "the only way out of the labyrinth of suffering is to forgive",
    "we must embrace pain and burn it as fuel for our journey"
];

export const AgonyThemeStatementTableName = "Agony theme statement";

export class AgonyThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = AgonyThemeStatementTableName;
        this.addEntriesFromList(agonyThemeStatements);
    }
}