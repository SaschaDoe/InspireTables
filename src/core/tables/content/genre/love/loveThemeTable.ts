import {Table} from "../../../table";
import {StarCrossedLoversTheme} from "../../themes/starCrossedLoversTheme";
import {AttractionTheme} from "../../themes/attractionTheme";
import {FriendsToLoversTheme} from "../../themes/friendsToLoversTheme";
import {SecondChanceRomanceTheme} from "../../themes/secondChanceRomanceTheme";
import {CultureClashesTheme} from "../../themes/cultureClashTheme";
import {DisillusionmentTheme} from "../../themes/disillusionmentTheme";
import {FamilyTheme} from "../../themes/familyTheme";
import {ComingOfAgeTheme} from "../../themes/comingOfAgeTheme";
import {LoyaltyTheme} from "../../themes/loyaltyTheme";
import {PersonalGrowthTheme} from "../../themes/personalGrowthTheme";
import {RevengeTheme} from "../../themes/revengeTheme";
import {TeamworkTheme} from "../../themes/teamworkTheme";
import {TabooLoveTheme} from "../../themes/tabooTheme";
import {LoveTriangleTheme} from "../../themes/loveTriangleTheme";
import {FakeRelationshipTheme} from "../../themes/fakeRelationshipTheme";
import {SoulmatesTheme} from "../../themes/soulmateTheme";
import {InnocenceTheme} from "../../themes/innocenceTheme";
import {ObsessionTheme} from "../../themes/obsessionTheme";
import {TrustTheme} from "../../themes/trustTheme";

export let loveThemes = [
    new StarCrossedLoversTheme().name,
    new AttractionTheme().name,
    new FriendsToLoversTheme().name,
    new SecondChanceRomanceTheme().name,
    new CultureClashesTheme().name,
    new DisillusionmentTheme().name,
    new FamilyTheme().name,
    new ComingOfAgeTheme().name,
    new LoyaltyTheme().name,
    new PersonalGrowthTheme().name,
    new RevengeTheme().name,
    new TeamworkTheme().name,
    new TabooLoveTheme().name,
    new LoveTriangleTheme().name,
    new FakeRelationshipTheme().name,
    new SoulmatesTheme().name,
    new InnocenceTheme().name,
    new ObsessionTheme().name,
    new TrustTheme().name,
];

export const LoveThemeTableName = "Love Theme";

export class HorrorThemesTable extends Table{
    constructor() {
        super();
        this.title = LoveThemeTableName;
        this.addEntriesFromList(loveThemes);
    }
}