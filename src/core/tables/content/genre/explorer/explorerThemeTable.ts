import {Table} from "../../../table";
import {CultureClashesThemeName} from "../../themes/cultureClashTheme";
import {DestinyThemeName} from "../../themes/destinyTheme";
import {FishOutOfWaterThemeName} from "../../themes/fishOutOfWaterTheme";
import {SurvivalThemeName} from "../../themes/survivalTheme";
import {UnknownThemeName} from "../../themes/unknownTheme";
import {SearchThemeName} from "../../themes/searchTheme";
import {NatureAsEnemyThemeName} from "../../themes/natureAsEnemyTheme";
import {TimeThemeName} from "../../themes/timeTheme";
import {TechnologicalInnovationThemeName} from "../../themes/technologicalInnovationTheme";
import {PersonalGrowthThemeName} from "../../themes/personalGrowthTheme";
import {TeamworkThemeName} from "../../themes/teamworkTheme";
import {IsolationThemeName} from "../../themes/isolationTheme";

export let explorerThemes = [
    CultureClashesThemeName,
    DestinyThemeName,
    FishOutOfWaterThemeName,
    SurvivalThemeName,
    UnknownThemeName,
    SearchThemeName,
    NatureAsEnemyThemeName,
    TimeThemeName,
    TechnologicalInnovationThemeName,
    PersonalGrowthThemeName,
    TeamworkThemeName,
    IsolationThemeName,
];

export const ExplorerThemeTableName = "Explorer Theme";

export class ExplorerThemeTable extends Table{
    constructor() {
        super();
        this.title = ExplorerThemeTableName;
        this.addEntriesFromList(explorerThemes);
    }
}