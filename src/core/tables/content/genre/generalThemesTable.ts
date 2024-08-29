import {Table} from "../../table";

export const generalThemes: string[] = [
    "truth",
    "searching for something",
    "what does it mean to be good",
    "what is a strong man / female",
    "identity and self-discovery",
    "power and its consequences",
    "love and relationships",
    "sacrifice",
    "redemption",
    "family dynamics",
    "justice and morality",
    "survival",
    "coming of age",
    "nature of reality",
    "impact of technology",
    "individual vs. society",
    "pursuit of happiness",
    "meaning of life",
    "nature of evil",
    "consequences of choices",
    "power of friendship",
    "overcoming adversity",
    "clash of cultures",
    "role of fate vs. free will",
    "price of ambition",
    "struggle for freedom"
];

export class GeneralThemesTable extends Table {
    constructor() {
        super();
        this.title = "General Themes";
        this.addEntriesFromList(generalThemes);
    }
}