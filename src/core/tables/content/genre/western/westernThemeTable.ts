import {Table} from "../../../table";
import {PursuitOfProsperityTheme} from "../../themes/pursuitOfProsperityTheme";
import {ComingOfAgeTheme} from "../../themes/comingOfAgeTheme";
import {CorruptionTheme} from "../../themes/corruptionTheme";
import {DeathTheme} from "../../themes/deathTheme";
import {DisillusionmentTheme} from "../../themes/disillusionmentTheme";
import {GoodVsEvilTheme} from "../../themes/godVsEvilTheme";
import {GreedTheme} from "../../themes/greedTheme";
import {HeroismTheme} from "../../themes/heroismTheme";
import {InvasionTheme} from "../../themes/invasionTheme";
import {JusticeTheme} from "../../themes/justiceTheme";
import {IsolationTheme} from "../../themes/isolationTheme";
import {NatureAsEnemyTheme} from "../../themes/NatureAsEnemyTheme";
import {PowerTheme} from "../../themes/powerTheme";
import {RevengeTheme} from "../../themes/revengeTheme";
import {SearchTheme} from "../../themes/searchTheme";
import {SurvivalTheme} from "../../themes/survivalTheme";
import {TechnologicalInnovationTheme} from "../../themes/technologicalInovationTheme";
import {UnknownTheme} from "../../themes/unknownTheme";
import {CultureClashesTheme} from "../../themes/cultureClashTheme";
import {NostalgiaTheme} from "../../themes/nostalgiaTheme";

export let westernThemes = [
    new PursuitOfProsperityTheme().name,
    new ComingOfAgeTheme().name,
    new CorruptionTheme().name,
    new DeathTheme().name,
    new DisillusionmentTheme().name,
    new GoodVsEvilTheme().name,
    new GreedTheme().name,
    new HeroismTheme().name,
    new InvasionTheme().name,
    new JusticeTheme().name,
    new IsolationTheme().name,
    new NatureAsEnemyTheme().name,
    new PowerTheme().name,
    new RevengeTheme().name,
    new SearchTheme().name,
    new SurvivalTheme().name,
    new TechnologicalInnovationTheme().name,
    new UnknownTheme().name,
    new CultureClashesTheme().name,
    new NostalgiaTheme().name,
];

export const WesternThemeTableName = "Western Theme";

export class WesternThemesTable extends Table{
    constructor() {
        super();
        this.title = WesternThemeTableName;
        this.addEntriesFromList(westernThemes);
    }
}