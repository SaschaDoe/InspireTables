import {Table} from "../../../table";
import {TraumaTheme} from "../../themes/traumaTheme";
import {FutilityOfStruggleTheme} from "../../themes/futilityOfStruggleTheme";
import {AgonyTheme} from "../../themes/agonyTheme";
import {BereavementTheme} from "../../themes/bereavementTheme";
import {DavidVsGoliathTheme} from "../../themes/davidVsGoliathTheme";
import {DeathTheme} from "../../themes/deathTheme";
import {DefinitionOfHumanityTheme} from "../../themes/definitionOfHumanityTheme";
import {DisillusionmentTheme} from "../../themes/disillusionmentTheme";
import {FishOutOfWaterTheme} from "../../themes/fishOutOfWaterTheme";
import {GoodVsEvilTheme} from "../../themes/godVsEvilTheme";
import {GuiltTheme} from "../../themes/guiltTheme";
import {HeroismTheme} from "../../themes/heroismTheme";
import {InnocenceTheme} from "../../themes/innocenceTheme";
import {InvasionTheme} from "../../themes/invasionTheme";
import {JusticeTheme} from "../../themes/justiceTheme";
import {LossOfControlTheme} from "../../themes/lossOfControl";
import {LoyaltyTheme} from "../../themes/loyaltyTheme";
import {NormalityMadnessBoundaryTheme} from "../../themes/normalityMadnessBoundaryTheme";
import {PersonalGrowthTheme} from "../../themes/personalGrowthTheme";
import {PsychosomaticDualityTheme} from "../../themes/psychosomaticDualityTheme";
import {RevengeTheme} from "../../themes/revengeTheme";
import {SoulmatesTheme} from "../../themes/soulmateTheme";
import {SurvivalTheme} from "../../themes/survivalTheme";
import {TechnologicalInnovationTheme} from "../../themes/technologicalInovationTheme";
import {TeamworkTheme} from "../../themes/teamworkTheme";
import {TrustTheme} from "../../themes/trustTheme";
import {NostalgiaTheme} from "../../themes/nostalgiaTheme";

export let warThemes = [
    new TraumaTheme().name,
    new FutilityOfStruggleTheme().name,
    new AgonyTheme().name,
    new BereavementTheme().name,
    new DavidVsGoliathTheme().name,
    new DeathTheme().name,
    new DefinitionOfHumanityTheme().name,
    new DisillusionmentTheme().name,
    new FishOutOfWaterTheme().name,
    new GoodVsEvilTheme().name,
    new GuiltTheme().name,
    new HeroismTheme().name,
    new InnocenceTheme().name,
    new InvasionTheme().name,
    new JusticeTheme().name,
    new LossOfControlTheme().name,
    new LoyaltyTheme().name,
    new NormalityMadnessBoundaryTheme().name,
    new PersonalGrowthTheme().name,
    new PsychosomaticDualityTheme().name,
    new RevengeTheme().name,
    new SoulmatesTheme().name,
    new SurvivalTheme().name,
    new TechnologicalInnovationTheme().name,
    new TeamworkTheme().name,
    new TrustTheme().name,
    new NostalgiaTheme().name,
];

export const WarThemeTableName = "War Theme";

export class WarThemesTable extends Table{
    constructor() {
        super();
        this.title = WarThemeTableName;
        this.addEntriesFromList(warThemes);
    }
}