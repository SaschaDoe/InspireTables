import {Table} from "../../../table";
import {BalanceTheme} from "../../themes/balanceTheme";
import {AgonyTheme} from "../../themes/agonyTheme";
import {MentorshipTheme} from "../../themes/mentorshipTheme";
import {PriceOfSuccessTheme} from "../../themes/priceOfSuccessTheme";
import {ComingOfAgeTheme} from "../../themes/comingOfAgeTheme";
import {DavidVsGoliathTheme} from "../../themes/davidVsGoliathTheme";
import {DestinyTheme} from "../../themes/destinyTheme";
import {FamilyTheme} from "../../themes/familyTheme";
import {FishOutOfWaterTheme} from "../../themes/fishOutOfWaterTheme";
import {GreedTheme} from "../../themes/greedTheme";
import {IsolationTheme} from "../../themes/isolationTheme";
import {ObsessionTheme} from "../../themes/obsessionTheme";
import {PublicPerceptionTheme} from "../../themes/publicPerceptionTheme";
import {TeamworkTheme} from "../../themes/teamworkTheme";

export let performanceThemes = [
    new BalanceTheme().name,
    new AgonyTheme().name,
    new MentorshipTheme().name,
    new PriceOfSuccessTheme().name,
    new ComingOfAgeTheme().name,
    new DavidVsGoliathTheme().name,
    new DestinyTheme().name,
    new FamilyTheme().name,
    new FishOutOfWaterTheme().name,
    new GreedTheme().name,
    new IsolationTheme().name,
    new ObsessionTheme().name,
    new PublicPerceptionTheme().name,
    new TeamworkTheme().name,
    
];

export const PerformanceThemeTableName = "Performance Theme";

export class PerformanceThemesTable extends Table{
    constructor() {
        super();
        this.title = PerformanceThemeTableName;
        this.addEntriesFromList(performanceThemes);
    }
}