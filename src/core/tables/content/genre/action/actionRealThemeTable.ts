import {Table} from "../../../table";

export const actionRealThemes = [
    "life is too short",
    "one person can make a difference against overwhelming odds",
    "loyalty and teamwork triumph over individual ambition",
    "the ends don't always justify the means",
    "redemption is possible for those who seek it",
    "power corrupts, and absolute power corrupts absolutely",
    "sacrifice is necessary for the greater good",
    "technology can be both a tool and a threat",
    "justice sometimes requires operating outside the law",
    "the line between hero and villain is often blurred",
    "facing one's fears is the key to overcoming them",
    "the pursuit of justice often comes at a personal cost",
    "true strength lies in vulnerability and empathy",
    "the greatest battles are fought within oneself",
    "power and responsibility are inextricably linked",
    "the cycle of violence perpetuates itself unless consciously broken",
    "humanity's resilience often emerges in the face of insurmountable odds",
    "the line between hero and villain is drawn by perspective and circumstance",
    "true victory lies not in defeating others, but in mastering oneself",
    "the quest for vengeance often leads to self-destruction",
    "moral absolutes crumble in the face of complex realities",
    "the price of freedom is eternal vigilance"
]

export const ActionRealThemesTableName = "Action Real Themes"

export class ActionRealThemeTable extends Table{
    constructor() {
        super();
        this.title = ActionRealThemesTableName;
        this.addEntriesFromList(actionRealThemes);
    }
}