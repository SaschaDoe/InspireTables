import {Table} from "../../../table";
import {GuiltThemeName} from "../../themes/guiltTheme";
import {BereavementThemeName} from "../../themes/bereavementTheme";
import {CatAndMouseThemeName} from "../../themes/catAndMouseTheme";
import {CorruptionThemeName} from "../../themes/corruptionTheme";
import {DavidVsGoliathThemeName} from "../../themes/davidVsGoliathTheme";
import {DeathThemeName} from "../../themes/deathTheme";
import {GoodVsEvilThemeName} from "../../themes/goodVsEvilTheme";
import {GreedThemeName} from "../../themes/greedTheme";
import {IsolationThemeName} from "../../themes/isolationTheme";
import {
    NormalityMadnessBoundaryThemeName
} from "../../themes/normalityMadnessBoundaryTheme";
import {ObsessionThemeName} from "../../themes/obsessionTheme";
import {PowerThemeName} from "../../themes/powerTheme";
import {PublicPerceptionThemeName} from "../../themes/publicPerceptionTheme";
import {SearchThemeName} from "../../themes/searchTheme";
import {RevengeThemeName} from "../../themes/revengeTheme";
import {SurvivalThemeName} from "../../themes/survivalTheme";
import {TruthThemeName} from "../../themes/truthTheme";
import {UnknownThemeName} from "../../themes/unknownTheme";


export let thrillerThemes = [
    GuiltThemeName,
    BereavementThemeName,
    CatAndMouseThemeName,
    CorruptionThemeName,
    DavidVsGoliathThemeName,
    DeathThemeName,
    GoodVsEvilThemeName,
    GreedThemeName,
    IsolationThemeName,
    NormalityMadnessBoundaryThemeName,
    ObsessionThemeName,
    PowerThemeName,
    PublicPerceptionThemeName,
    SearchThemeName,
    RevengeThemeName,
    SurvivalThemeName,
    TruthThemeName,
    UnknownThemeName,
];

export const ThrillerThemeTableName = "Thriller Theme";

export class ThrillerThemesTable extends Table{
    constructor() {
        super();
        this.title = ThrillerThemeTableName;
        this.addEntriesFromList(thrillerThemes);
    }
}