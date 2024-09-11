import {Table} from "../../../table";
import {PowerTheme} from "../../themes/powerTheme";
import {LoyaltyTheme} from "../../themes/loyaltyTheme";
import {RevengeTheme} from "../../themes/revengeTheme";
import {DisillusionmentTheme} from "../../themes/disillusionmentTheme";
import {CorruptionTheme} from "../../themes/corruptionTheme";
import {GoodVsEvilTheme} from "../../themes/godVsEvilTheme";
import {JusticeTheme} from "../../themes/justiceTheme";
import {GreedTheme} from "../../themes/greedTheme";
import {FamilyTheme} from "../../themes/familyTheme";
import {DavidVsGoliathTheme} from "../../themes/davidVsGoliathTheme";
import {IsolationTheme} from "../../themes/isolationTheme";

export let gangsterThemes = [
    new PowerTheme().name,
    new LoyaltyTheme().name,
    new RevengeTheme().name,
    new DisillusionmentTheme().name,
    new CorruptionTheme().name,
    new GoodVsEvilTheme().name,
    new JusticeTheme().name,
    new GreedTheme().name,
    new FamilyTheme().name,
    new DavidVsGoliathTheme().name,
    new IsolationTheme().name,
];

export const GangsterThemeTableName = "Gangster Theme";

export class GangsterThemesTable extends Table{
    constructor() {
        super();
        this.title = GangsterThemeTableName;
        this.addEntriesFromList(gangsterThemes);
    }
}