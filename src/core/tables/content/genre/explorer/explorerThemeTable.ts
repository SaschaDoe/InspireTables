import {Table} from "../../../table";
import {CultureClashesTheme} from "../../themes/cultureClashTheme";
import {DestinyTheme} from "../../themes/destinyTheme";
import {FishOutOfWaterTheme} from "../../themes/fishOutOfWaterTheme";
import {SurvivalTheme} from "../../themes/survivalTheme";
import {UnknownTheme} from "../../themes/unknownTheme";
import {SearchTheme} from "../../themes/searchTheme";
import {NatureAsEnemyTheme} from "../../themes/NatureAsEnemyTheme";
import {TimeTheme} from "../../themes/timeTheme";
import {TechnologicalInnovationTheme} from "../../themes/technologicalInovationTheme";
import {PersonalGrowthTheme} from "../../themes/personalGrowthTheme";
import {TeamworkTheme} from "../../themes/teamworkTheme";
import {IsolationTheme} from "../../themes/isolationTheme";

export let explorerThemes = [
    new CultureClashesTheme().name,
    new DestinyTheme().name,
    new FishOutOfWaterTheme().name,
    new SurvivalTheme().name,
    new UnknownTheme().name,
    new SearchTheme().name,
    new NatureAsEnemyTheme().name,
    new TimeTheme().name,
    new TechnologicalInnovationTheme().name,
    new PersonalGrowthTheme().name,
    new TeamworkTheme().name,
    new IsolationTheme().name,
];

export const ExplorerThemeTableName = "Explorer Theme";

export class ExplorerThemeTable extends Table{
    constructor() {
        super();
        this.title = ExplorerThemeTableName;
        this.addEntriesFromList(explorerThemes);
    }
}