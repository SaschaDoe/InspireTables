import {Table} from "../../../table";

export const mysteryRealThemes = [
    "the truth is rarely pure and never simple",
    "in every shadow lurks a secret waiting to be uncovered",
    "the most obvious answer is often the most deceptive",
    "trust no one until you have evidence to do so",
    "appearances can be deceiving; look beyond the surface",
    "the smallest detail can unravel the greatest mystery",
    "in the game of deduction, patience is your greatest ally",
    "every lie contains a kernel of truth",
    "the past always leaves clues for those who know where to look",
    "sometimes, what's not said is more important than what is",
    "the art of misdirection is the mystery writer's greatest tool",
    "in the world of mystery, coincidences are rarely coincidental",
    "the perfect crime exists only in the mind of the perpetrator",
    "behind every locked door lies a potential revelation",
    "the most dangerous secrets are those we keep from ourselves"
]

export const MysteryRealThemesTableName = "Mystery Real Themes"

export class MysteryRealThemeTable extends Table{
    constructor() {
        super();
        this.title = MysteryRealThemesTableName;
        this.addEntriesFromList(mysteryRealThemes);
    }
}