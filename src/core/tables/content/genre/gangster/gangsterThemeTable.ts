import {Table} from "../../../table";
import {PowerThemeName} from "../../themes/powerTheme";
import {LoyaltyThemeName} from "../../themes/loyaltyTheme";
import {RevengeThemeName} from "../../themes/revengeTheme";
import {DisillusionmentThemeName} from "../../themes/disillusionmentTheme";
import {CorruptionThemeName} from "../../themes/corruptionTheme";
import {GoodVsEvilThemeName} from "../../themes/godVsEvilTheme";
import {JusticeThemeName} from "../../themes/justiceTheme";
import {GreedThemeName} from "../../themes/greedTheme";
import {FamilyThemeName} from "../../themes/familyTheme";
import {DavidVsGoliathThemeName} from "../../themes/davidVsGoliathTheme";
import {IsolationThemeName} from "../../themes/isolationTheme";
import {PriceOfSuccessThemeName} from "../../themes/priceOfSuccessTheme";
import {FutilityOfStruggleThemeName} from "../../themes/futilityOfStruggleTheme";
import {WhatReallyMattersThemeName} from "../../themes/whatReallyMattersTheme";

export let gangsterThemes = [
    WhatReallyMattersThemeName,
    PowerThemeName,
    LoyaltyThemeName,
    RevengeThemeName,
    DisillusionmentThemeName,
    CorruptionThemeName,
    GoodVsEvilThemeName,
    JusticeThemeName,
    GreedThemeName,
    FamilyThemeName,
    DavidVsGoliathThemeName,
    IsolationThemeName,
    PriceOfSuccessThemeName,
    FutilityOfStruggleThemeName
];

export const GangsterThemeTableName = "Gangster Theme";

export class GangsterThemesTable extends Table{
    constructor() {
        super();
        this.title = GangsterThemeTableName;
        this.addEntriesFromList(gangsterThemes);
    }
}