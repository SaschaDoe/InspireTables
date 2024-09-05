import {Table} from "../../../table";

export let fantasyThemeExamples = [
    ["magic", "harry potter", "https://en.wikipedia.org/wiki/Harry_Potter"],
    ["destiny", "Oedipus", "https://en.wikipedia.org/wiki/Oedipus"],
    ["destiny", "Mulan", "https://en.wikipedia.org/wiki/Mulan_(1998_film)"],
    ["good vs. evil", "Lord of the rings", "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"],
    ["the unknown", "frozen 2", "https://en.wikipedia.org/wiki/Frozen_II"],
    ["reality", "wizard of oz", "https://en.wikipedia.org/wiki/The_Wizard_of_Oz"],
]

export let fantasyThemes = [
    "magic",
    "destiny",
    "good vs. evil",
    "heroism",
    "the unknown",
    "reality",
];

export const FantasyThemeTableName = "Fantasy Theme";

export class FantasyThemesTable extends Table{
    constructor() {
        super();
        this.title = FantasyThemeTableName;
        this.addEntriesFromList(fantasyThemes);
    }
}