import {Table} from "../../../table";
import {LoyaltyThemeName} from "../../themes/loyaltyTheme";
import {CorruptionThemeName} from "../../themes/corruptionTheme";
import {JusticeThemeName} from "../../themes/justiceTheme";
import {GreedThemeName} from "../../themes/greedTheme";
import {TeamworkThemeName} from "../../themes/teamworkTheme";
import {TechnologicalInnovationThemeName} from "../../themes/technologicalInnovationTheme";
import {DavidVsGoliathThemeName} from "../../themes/davidVsGoliathTheme";
import {ObsessionThemeName} from "../../themes/obsessionTheme";
import {PursuitOfProsperityThemeName} from "../../themes/pursuitOfProsperityTheme";
import {SearchThemeName} from "../../themes/searchTheme";
import {UnknownThemeName} from "../../themes/unknownTheme";

export let heistThemes = [
    JusticeThemeName,
    GreedThemeName,
    TeamworkThemeName,
    TechnologicalInnovationThemeName,
    LoyaltyThemeName,
    DavidVsGoliathThemeName,
    ObsessionThemeName,
    CorruptionThemeName,
    PursuitOfProsperityThemeName,
    SearchThemeName,
    UnknownThemeName,
];

export const HeistThemeTableName = "Heist Theme";

export class HeistThemesTable extends Table{
    constructor() {
        super();
        this.title = HeistThemeTableName;
        this.addEntriesFromList(heistThemes);
    }
}