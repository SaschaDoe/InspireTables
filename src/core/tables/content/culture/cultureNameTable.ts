import {Table} from "../../table";

export const cultureNames = [
    "african", "german", "french", "arabic", "barbaric", "elvish", "greek", "halfling", "dwarfen",
    "indian", "nordic", "russian", "southamerican", "evil", "goblin", "orcish", "kobold", "asian",
    "nativeamerican", "inuit", "celtic", "demon", "persian", "giant", "italien", "roman", "english",
    "fey", "lizard", "dragon"
];

export class CultureNameTable extends Table {
    constructor() {
        super();
        this.title = "Culture Name";
        this.withEntriesFromList(cultureNames);
    }
}