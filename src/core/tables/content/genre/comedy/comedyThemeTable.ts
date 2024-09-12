import {Table} from "../../../table";
import {FishOutOfWaterThemeName} from "../../themes/fishOutOfWaterTheme";
import {MistakenIdentityThemeName} from "../../themes/mistakenIdentity";
import {FamilyThemeName} from "../../themes/familyTheme";
import {ComingOfAgeThemeName} from "../../themes/comingOfAgeTheme";
import {CultureClashesThemeName} from "../../themes/cultureClashTheme";
import {WhatReallyMattersThemeName} from "../../themes/whatReallyMattersTheme";

export let comedyThemes = [
    WhatReallyMattersThemeName,
    FishOutOfWaterThemeName,
    MistakenIdentityThemeName,
    FamilyThemeName,
    ComingOfAgeThemeName,
    CultureClashesThemeName,
];

export const ComedyThemeTableName = "Comedy Theme";

export class ComedyThemeTable extends Table{
    constructor() {
        super();
        this.title = ComedyThemeTableName;
        this.addEntriesFromList(comedyThemes);
    }
}