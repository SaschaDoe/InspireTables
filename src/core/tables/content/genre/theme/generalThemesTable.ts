import {Table} from "../../../table";

export const generalThemes: string[] = [
    "love",
    "morality",
    "overcoming fear",
    "truth",
    "searching for something",
    "what is a strong man / female",
    "identity and self-discovery",
    "power and its consequences",
    "sacrifice",
    "redemption",
    "family dynamics",
    "survival",
    "pursuit of happiness",
    "meaning of life",
    "consequences of choices",
    "clash of cultures",
    "role of fate vs. free will",
    "price of ambition",
    "struggle for freedom"
];

export const GeneralThemeName = "General theme";

export class GeneralThemesTable extends Table {
    constructor() {
        super();
        this.title = GeneralThemeName;
        this.addEntriesFromList(generalThemes);
    }
}