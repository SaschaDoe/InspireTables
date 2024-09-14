import {Table} from "../../../table";
import {StarCrossedLoversThemeName} from "../../themes/starCrossedLoversTheme";
import {AttractionThemeName} from "../../themes/attractionTheme";
import {FriendsToLoversThemeName} from "../../themes/friendsToLoversTheme";
import {SecondChanceRomanceThemeName} from "../../themes/secondChanceRomanceTheme";
import {CultureClashesThemeName} from "../../themes/cultureClashTheme";
import {DisillusionmentThemeName} from "../../themes/disillusionmentTheme";
import {FamilyThemeName} from "../../themes/familyTheme";
import {ComingOfAgeThemeName} from "../../themes/comingOfAgeTheme";
import {LoyaltyThemeName} from "../../themes/loyaltyTheme";
import {PersonalGrowthThemeName} from "../../themes/personalGrowthTheme";
import {RevengeThemeName} from "../../themes/revengeTheme";
import {TeamworkThemeName} from "../../themes/teamworkTheme";
import {TabooLoveThemeName} from "../../themes/tabooTheme";
import {LoveTriangleThemeName} from "../../themes/loveTriangleTheme";
import {FakeRelationshipThemeName} from "../../themes/fakeRelationshipTheme";
import {SoulmatesThemeName} from "../../themes/soulmateTheme";
import {InnocenceThemeName} from "../../themes/innocenceTheme";
import {ObsessionThemeName} from "../../themes/obsessionTheme";
import {TrustThemeName} from "../../themes/trustTheme";

export let loveThemes = [
    StarCrossedLoversThemeName,
    AttractionThemeName,
    FriendsToLoversThemeName,
    SecondChanceRomanceThemeName,
    CultureClashesThemeName,
    DisillusionmentThemeName,
    FamilyThemeName,
    ComingOfAgeThemeName,
    LoyaltyThemeName,
    PersonalGrowthThemeName,
    RevengeThemeName,
    TeamworkThemeName,
    TabooLoveThemeName,
    LoveTriangleThemeName,
    FakeRelationshipThemeName,
    SoulmatesThemeName,
    InnocenceThemeName,
    ObsessionThemeName,
    TrustThemeName,
];

export const LoveThemeTableName = "Love Theme";

export class LoveThemesTable extends Table{
    constructor() {
        super();
        this.title = LoveThemeTableName;
        this.addEntriesFromList(loveThemes);
    }
}