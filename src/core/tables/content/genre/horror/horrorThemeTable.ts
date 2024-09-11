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
import {CatAndMouseTheme} from "../../themes/catAndMouseTheme";
import {DeathTheme} from "../../themes/deathTheme";
import {NatureAsEnemyTheme} from "../../themes/NatureAsEnemyTheme";
import {SurvivalTheme} from "../../themes/survivalTheme";
import {UnknownTheme} from "../../themes/unknownTheme";
import {IsolationTheme} from "../../themes/isolationTheme";
import {InvasionTheme} from "../../themes/invasionTheme";
import {LossOfControlTheme} from "../../themes/lossOfControl";
import {PsychosomaticDualityTheme} from "../../themes/psychosomaticDualityTheme";
import {ApocalypseTheme} from "../../themes/apocalypseTheme";

export let horrorThemes = [
    new CatAndMouseTheme().name,
    new DavidVsGoliathTheme().name,
    new DeathTheme().name,
    new GoodVsEvilTheme().name,
    new NatureAsEnemyTheme().name,
    new SurvivalTheme().name,
    new TeamworkTheme().name,
    new UnknownTheme().name,
    new IsolationTheme().name,
    new InvasionTheme().name,
    new JusticeTheme().name,
    new LossOfControlTheme().name,
    new PsychosomaticDualityTheme().name,
    new ApocalypseTheme().name,
];

export const HorrorThemeTableName = "Horror Theme";

export class HorrorThemesTable extends Table{
    constructor() {
        super();
        this.title = HorrorThemeTableName;
        this.addEntriesFromList(horrorThemes);
    }
}