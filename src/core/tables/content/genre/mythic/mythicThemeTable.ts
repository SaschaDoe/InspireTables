import {Table} from "../../../table";
import {AfterlifeTheme} from "../../themes/afterlifeTheme";
import {ApocalypseTheme} from "../../themes/apocalypseTheme";
import {DavidVsGoliathTheme} from "../../themes/davidVsGoliathTheme";
import {DeathTheme} from "../../themes/deathTheme";
import {FamilyTheme} from "../../themes/familyTheme";
import {GoodVsEvilTheme} from "../../themes/godVsEvilTheme";
import {HeroismTheme} from "../../themes/heroismTheme";
import {InnocenceTheme} from "../../themes/innocenceTheme";
import {InvasionTheme} from "../../themes/invasionTheme";
import {JusticeTheme} from "../../themes/justiceTheme";
import {LoyaltyTheme} from "../../themes/loyaltyTheme";
import {MagicTheme} from "../../themes/magicTheme";
import {NatureAsEnemyTheme} from "../../themes/NatureAsEnemyTheme";
import {ObsessionTheme} from "../../themes/obsessionTheme";
import {PersonalGrowthTheme} from "../../themes/personalGrowthTheme";
import {PowerTheme} from "../../themes/powerTheme";
import {PublicPerceptionTheme} from "../../themes/publicPerceptionTheme";
import {RealityTheme} from "../../themes/realityTheme";
import {RevengeTheme} from "../../themes/revengeTheme";
import {SearchTheme} from "../../themes/searchTheme";
import {SoulmatesTheme} from "../../themes/soulmateTheme";
import {SurvivalTheme} from "../../themes/survivalTheme";
import {TrustTheme} from "../../themes/trustTheme";
import {UnknownTheme} from "../../themes/unknownTheme";
import {DivineTheme} from "../../themes/divineTheme";
import {BalanceTheme} from "../../themes/balanceTheme";

export let mythicThemes = [
    new AfterlifeTheme().name,
    new ApocalypseTheme().name,
    new DavidVsGoliathTheme().name,
    new DeathTheme().name,
    new FamilyTheme().name,
    new GoodVsEvilTheme().name,
    new HeroismTheme().name,
    new InnocenceTheme().name,
    new InvasionTheme().name,
    new JusticeTheme().name,
    new LoyaltyTheme().name,
    new MagicTheme().name,
    new NatureAsEnemyTheme().name,
    new ObsessionTheme().name,
    new PersonalGrowthTheme().name,
    new PowerTheme().name,
    new PublicPerceptionTheme().name,
    new RealityTheme().name,
    new RevengeTheme().name,
    new SearchTheme().name,
    new SoulmatesTheme().name,
    new SurvivalTheme().name,
    new TrustTheme().name,
    new UnknownTheme().name,
    new DivineTheme().name,
    new BalanceTheme().name,
];

export const MythicThemeTableName = "Mythic Theme";

export class MythicThemesTable extends Table{
    constructor() {
        super();
        this.title = MythicThemeTableName;
        this.addEntriesFromList(mythicThemes);
    }
}