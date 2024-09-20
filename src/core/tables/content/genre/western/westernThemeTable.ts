import {Table} from "../../../table";
import {PursuitOfProsperityThemeName} from "../../themes/pursuitOfProsperityTheme";
import {ComingOfAgeThemeName} from "../../themes/comingOfAgeTheme";
import {CorruptionThemeName} from "../../themes/corruptionTheme";
import {DeathThemeName} from "../../themes/deathTheme";
import {DisillusionmentThemeName} from "../../themes/disillusionmentTheme";
import {GoodVsEvilThemeName} from "../../themes/goodVsEvilTheme";
import {GreedThemeName} from "../../themes/greedTheme";
import {HeroismThemeName} from "../../themes/heroismTheme";
import {InvasionThemeName} from "../../themes/invasionTheme";
import {JusticeThemeName} from "../../themes/justiceTheme";
import {IsolationThemeName} from "../../themes/isolationTheme";
import {NatureAsEnemyThemeName} from "../../themes/natureAsEnemyTheme";
import {PowerThemeName} from "../../themes/powerTheme";
import {RevengeThemeName} from "../../themes/revengeTheme";
import {SearchThemeName} from "../../themes/searchTheme";
import {SurvivalThemeName} from "../../themes/survivalTheme";
import {TechnologicalInnovationThemeName} from "../../themes/technologicalInnovationTheme";
import {UnknownThemeName} from "../../themes/unknownTheme";
import {CultureClashesThemeName} from "../../themes/cultureClashTheme";
import {NostalgiaThemeName} from "../../themes/nostalgiaTheme";
import {ChangeThemeName} from "../../themes/changeTheme";

export let westernThemes = [
    PursuitOfProsperityThemeName,
    ComingOfAgeThemeName,
    CorruptionThemeName,
    DeathThemeName,
    DisillusionmentThemeName,
    GoodVsEvilThemeName,
    GreedThemeName,
    HeroismThemeName,
    InvasionThemeName,
    JusticeThemeName,
    IsolationThemeName,
    NatureAsEnemyThemeName,
    PowerThemeName,
    RevengeThemeName,
    SearchThemeName,
    SurvivalThemeName,
    TechnologicalInnovationThemeName,
    UnknownThemeName,
    CultureClashesThemeName,
    NostalgiaThemeName,
    ChangeThemeName,
];

export const WesternThemeTableName = "Western Theme";

export class WesternThemesTable extends Table{
    constructor() {
        super();
        this.title = WesternThemeTableName;
        this.addEntriesFromList(westernThemes);
    }
}