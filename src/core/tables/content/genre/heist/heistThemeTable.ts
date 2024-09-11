import {Table} from "../../../table";
import {PowerTheme} from "../../themes/powerTheme";
import {LoyaltyTheme} from "../../themes/loyaltyTheme";
import {RevengeTheme} from "../../themes/revengeTheme";
import {DisillusionmentTheme} from "../../themes/disillusionmentTheme";
import {CorruptionTheme} from "../../themes/corruptionTheme";
import {GoodVsEvilTheme} from "../../themes/godVsEvilTheme";
import {JusticeTheme} from "../../themes/justiceTheme";
import {GreedTheme} from "../../themes/greedTheme";
import {TeamworkTheme} from "../../themes/teamworkTheme";
import {TechnologicalInnovationTheme} from "../../themes/technologicalInovationTheme";
import {DavidVsGoliathTheme} from "../../themes/davidVsGoliathTheme";

export let heistThemes = [
    new JusticeTheme().name,
    new GreedTheme().name,
    new TeamworkTheme().name,
    new TechnologicalInnovationTheme().name,
    new LoyaltyTheme().name,
    new DavidVsGoliathTheme().name,
];

export const HeistThemeTableName = "Heist Theme";

export class HeistThemesTable extends Table{
    constructor() {
        super();
        this.title = HeistThemeTableName;
        this.addEntriesFromList(heistThemes);
    }
}