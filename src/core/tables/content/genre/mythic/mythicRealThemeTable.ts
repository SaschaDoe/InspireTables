import {Table} from "../../../table";

export const mythicRealThemes = [
    "the hero's journey begins with a single step",
    "in the realm of myths, ordinary rules do not apply",
    "great power comes with great responsibility",
    "fate and free will are two sides of the same coin",
    "the gods are as flawed as the mortals they rule",
    "every monster was once someone's child",
    "immortality is both a blessing and a curse",
    "the line between mortal and divine is thinner than you think",
    "in myths, nothing is ever truly lost, only transformed",
    "the greatest battles are fought within oneself",
    "prophecies often fulfill themselves in unexpected ways",
    "even the smallest being can change the course of the future",
    "in the world of myths, death is rarely the end",
    "the most powerful magic comes from the heart",
    "legends are born from the seeds of truth"
]

export const MythicRealThemesTableName = "Mythic Real Themes"

export class MythicRealThemeTable extends Table{
    constructor() {
        super();
        this.title = MythicRealThemesTableName;
        this.addEntriesFromList(mythicRealThemes);
    }
}