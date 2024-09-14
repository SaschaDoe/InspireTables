import {Table} from "../../../table";
import {AfterlifeThemeName} from "../../themes/afterlifeTheme";
import {ApocalypseThemeName} from "../../themes/apocalypseTheme";
import {DavidVsGoliathThemeName} from "../../themes/davidVsGoliathTheme";
import {DeathThemeName} from "../../themes/deathTheme";
import {FamilyThemeName} from "../../themes/familyTheme";
import {GoodVsEvilThemeName} from "../../themes/godVsEvilTheme";
import {HeroismThemeName} from "../../themes/heroismTheme";
import {InnocenceThemeName} from "../../themes/innocenceTheme";
import {InvasionThemeName} from "../../themes/invasionTheme";
import {JusticeThemeName} from "../../themes/justiceTheme";
import {LoyaltyThemeName} from "../../themes/loyaltyTheme";
import {MagicThemeName} from "../../themes/magicTheme";
import {NatureAsEnemyThemeName} from "../../themes/natureAsEnemyTheme";
import {ObsessionThemeName} from "../../themes/obsessionTheme";
import {PersonalGrowthThemeName} from "../../themes/personalGrowthTheme";
import {PowerThemeName} from "../../themes/powerTheme";
import {PublicPerceptionThemeName} from "../../themes/publicPerceptionTheme";
import {RealityThemeName} from "../../themes/realityTheme";
import {RevengeThemeName} from "../../themes/revengeTheme";
import {SearchThemeName} from "../../themes/searchTheme";
import {SoulmatesThemeName} from "../../themes/soulmateTheme";
import {SurvivalThemeName} from "../../themes/survivalTheme";
import {TrustThemeName} from "../../themes/trustTheme";
import {UnknownThemeName} from "../../themes/unknownTheme";
import {DivineThemeName} from "../../themes/divineTheme";
import {BalanceThemeName} from "../../themes/balanceTheme";
import {ChangeThemeName} from "../../themes/changeTheme";

export let mythicThemes = [
    AfterlifeThemeName,
    ApocalypseThemeName,
    DavidVsGoliathThemeName,
    DeathThemeName,
    FamilyThemeName,
    GoodVsEvilThemeName,
    HeroismThemeName,
    InnocenceThemeName,
    InvasionThemeName,
    JusticeThemeName,
    LoyaltyThemeName,
    MagicThemeName,
    NatureAsEnemyThemeName,
    ObsessionThemeName,
    PersonalGrowthThemeName,
    PowerThemeName,
    PublicPerceptionThemeName,
    RealityThemeName,
    RevengeThemeName,
    SearchThemeName,
    SoulmatesThemeName,
    SurvivalThemeName,
    TrustThemeName,
    UnknownThemeName,
    DivineThemeName,
    BalanceThemeName,
    ChangeThemeName,
];

export const MythicThemeTableName = "Mythic Theme";

export class MythicThemesTable extends Table{
    constructor() {
        super();
        this.title = MythicThemeTableName;
        this.addEntriesFromList(mythicThemes);
    }
}