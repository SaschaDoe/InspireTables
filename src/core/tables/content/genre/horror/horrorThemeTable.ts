import {Table} from "../../../table";
import {GoodVsEvilThemeName} from "../../themes/goodVsEvilTheme";
import {JusticeThemeName} from "../../themes/justiceTheme";
import {TeamworkThemeName} from "../../themes/teamworkTheme";
import {DavidVsGoliathThemeName} from "../../themes/davidVsGoliathTheme";
import {CatAndMouseThemeName} from "../../themes/catAndMouseTheme";
import {DeathThemeName} from "../../themes/deathTheme";
import {NatureAsEnemyThemeName} from "../../themes/natureAsEnemyTheme";
import {SurvivalThemeName} from "../../themes/survivalTheme";
import {UnknownThemeName} from "../../themes/unknownTheme";
import {IsolationThemeName} from "../../themes/isolationTheme";
import {InvasionThemeName} from "../../themes/invasionTheme";
import {LossOfControlThemeName} from "../../themes/lossOfControl";
import {PsychosomaticDualityThemeName} from "../../themes/psychosomaticDualityTheme";
import {ApocalypseThemeName} from "../../themes/apocalypseTheme";
import {InnocenceThemeName} from "../../themes/innocenceTheme";
import {GuiltThemeName} from "../../themes/guiltTheme";
import {TraumaThemeName} from "../../themes/traumaTheme";
import {FutilityOfStruggleThemeName} from "../../themes/futilityOfStruggleTheme";

export let horrorThemes = [
    CatAndMouseThemeName,
    DavidVsGoliathThemeName,
    DeathThemeName,
    GoodVsEvilThemeName,
    NatureAsEnemyThemeName,
    SurvivalThemeName,
    TeamworkThemeName,
    UnknownThemeName,
    IsolationThemeName,
    InvasionThemeName,
    JusticeThemeName,
    LossOfControlThemeName,
    PsychosomaticDualityThemeName,
    ApocalypseThemeName,
    InnocenceThemeName,
    GuiltThemeName,
    TraumaThemeName,
    FutilityOfStruggleThemeName,
];

export const HorrorThemeTableName = "Horror Theme";

export class HorrorThemesTable extends Table{
    constructor() {
        super();
        this.title = HorrorThemeTableName;
        this.addEntriesFromList(horrorThemes);
    }
}