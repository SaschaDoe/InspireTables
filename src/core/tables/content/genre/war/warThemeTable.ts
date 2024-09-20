import {Table} from "../../../table";
import {TraumaThemeName} from "../../themes/traumaTheme";
import {FutilityOfStruggleThemeName} from "../../themes/futilityOfStruggleTheme";
import {AgonyThemeName} from "../../themes/agonyTheme";
import {BereavementThemeName} from "../../themes/bereavementTheme";
import {DavidVsGoliathThemeName} from "../../themes/davidVsGoliathTheme";
import {DeathThemeName} from "../../themes/deathTheme";
import {DefinitionOfHumanityThemeName} from "../../themes/definitionOfHumanityTheme";
import {DisillusionmentThemeName} from "../../themes/disillusionmentTheme";
import {FishOutOfWaterThemeName} from "../../themes/fishOutOfWaterTheme";
import {GoodVsEvilThemeName} from "../../themes/goodVsEvilTheme";
import {GuiltThemeName} from "../../themes/guiltTheme";
import {HeroismThemeName} from "../../themes/heroismTheme";
import {InnocenceThemeName} from "../../themes/innocenceTheme";
import {InvasionThemeName} from "../../themes/invasionTheme";
import {JusticeThemeName} from "../../themes/justiceTheme";
import {LossOfControlThemeName} from "../../themes/lossOfControl";
import {LoyaltyThemeName} from "../../themes/loyaltyTheme";
import {
    NormalityMadnessBoundaryThemeName
} from "../../themes/normalityMadnessBoundaryTheme";
import {PersonalGrowthThemeName} from "../../themes/personalGrowthTheme";
import {PsychosomaticDualityThemeName} from "../../themes/psychosomaticDualityTheme";
import {RevengeThemeName} from "../../themes/revengeTheme";
import {SoulmatesThemeName} from "../../themes/soulmateTheme";
import {SurvivalThemeName} from "../../themes/survivalTheme";
import {TechnologicalInnovationThemeName} from "../../themes/technologicalInnovationTheme";
import {TeamworkThemeName} from "../../themes/teamworkTheme";
import {TrustThemeName} from "../../themes/trustTheme";
import {NostalgiaThemeName} from "../../themes/nostalgiaTheme";

export let warThemes = [
    TraumaThemeName,
    FutilityOfStruggleThemeName,
    AgonyThemeName,
    BereavementThemeName,
    DavidVsGoliathThemeName,
    DeathThemeName,
    DefinitionOfHumanityThemeName,
    DisillusionmentThemeName,
    FishOutOfWaterThemeName,
    GoodVsEvilThemeName,
    GuiltThemeName,
    HeroismThemeName,
    InnocenceThemeName,
    InvasionThemeName,
    JusticeThemeName,
    LossOfControlThemeName,
    LoyaltyThemeName,
    NormalityMadnessBoundaryThemeName,
    PersonalGrowthThemeName,
    PsychosomaticDualityThemeName,
    RevengeThemeName,
    SoulmatesThemeName,
    SurvivalThemeName,
    TechnologicalInnovationThemeName,
    TeamworkThemeName,
    TrustThemeName,
    NostalgiaThemeName,
];

export const WarThemeTableName = "War Theme";

export class WarThemesTable extends Table{
    constructor() {
        super();
        this.title = WarThemeTableName;
        this.addEntriesFromList(warThemes);
    }
}