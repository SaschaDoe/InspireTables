import {Table} from "../../../table";
import {BalanceThemeName} from "../../themes/balanceTheme";
import {AgonyThemeName} from "../../themes/agonyTheme";
import {MentorshipThemeName} from "../../themes/mentorshipTheme";
import {PriceOfSuccessThemeName} from "../../themes/priceOfSuccessTheme";
import {ComingOfAgeThemeName} from "../../themes/comingOfAgeTheme";
import {DavidVsGoliathThemeName} from "../../themes/davidVsGoliathTheme";
import {DestinyThemeName} from "../../themes/destinyTheme";
import {FamilyThemeName} from "../../themes/familyTheme";
import {FishOutOfWaterThemeName} from "../../themes/fishOutOfWaterTheme";
import {GreedThemeName} from "../../themes/greedTheme";
import {IsolationThemeName} from "../../themes/isolationTheme";
import {ObsessionThemeName} from "../../themes/obsessionTheme";
import {PublicPerceptionThemeName} from "../../themes/publicPerceptionTheme";
import {TeamworkThemeName} from "../../themes/teamworkTheme";

export let performanceThemes = [
    BalanceThemeName,
    AgonyThemeName,
    MentorshipThemeName,
    PriceOfSuccessThemeName,
    ComingOfAgeThemeName,
    DavidVsGoliathThemeName,
    DestinyThemeName,
    FamilyThemeName,
    FishOutOfWaterThemeName,
    GreedThemeName,
    IsolationThemeName,
    ObsessionThemeName,
    PublicPerceptionThemeName,
    TeamworkThemeName,
    
];

export const PerformanceThemeTableName = "Performance Theme";

export class PerformanceThemesTable extends Table{
    constructor() {
        super();
        this.title = PerformanceThemeTableName;
        this.addEntriesFromList(performanceThemes);
    }
}