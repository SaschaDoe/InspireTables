import {Table} from "../../../table";
import {AgonyThemeName} from "../../themes/agonyTheme";
import {AttractionThemeName} from "../../themes/attractionTheme";
import {BereavementThemeName} from "../../themes/bereavementTheme";
import {ComingOfAgeThemeName} from "../../themes/comingOfAgeTheme";
import {CultureClashesThemeName} from "../../themes/cultureClashTheme";
import {DavidVsGoliathThemeName} from "../../themes/davidVsGoliathTheme";
import {PowerThemeName} from "../../themes/powerTheme";
import {DisillusionmentThemeName} from "../../themes/disillusionmentTheme";
import {FakeRelationshipThemeName} from "../../themes/fakeRelationshipTheme";
import {CorruptionThemeName} from "../../themes/corruptionTheme";
import {FishOutOfWaterThemeName} from "../../themes/fishOutOfWaterTheme";
import {GoodVsEvilThemeName} from "../../themes/goodVsEvilTheme";
import {GreedThemeName} from "../../themes/greedTheme";
import {HeroismThemeName} from "../../themes/heroismTheme";
import {InnocenceThemeName} from "../../themes/innocenceTheme";
import {InvasionThemeName} from "../../themes/invasionTheme";
import {IsolationThemeName} from "../../themes/isolationTheme";
import {LoyaltyThemeName} from "../../themes/loyaltyTheme";
import {LossOfControlThemeName} from "../../themes/lossOfControl";
import {JusticeThemeName} from "../../themes/justiceTheme";
import {
    NormalityMadnessBoundaryThemeName
} from "../../themes/normalityMadnessBoundaryTheme";
import {ObsessionThemeName} from "../../themes/obsessionTheme";
import {PersonalGrowthThemeName} from "../../themes/personalGrowthTheme";
import {PriceOfSuccessThemeName} from "../../themes/priceOfSuccessTheme";
import {TrustThemeName} from "../../themes/trustTheme";
import {TruthTheme} from "../../themes/truthTheme";
import {TraumaThemeName} from "../../themes/traumaTheme";

export let dramaThemes = [
    AgonyThemeName,
    AttractionThemeName,
    BereavementThemeName,
    ComingOfAgeThemeName,
    CultureClashesThemeName,
    DavidVsGoliathThemeName,
    PowerThemeName,
    DisillusionmentThemeName,
    FakeRelationshipThemeName,
    CorruptionThemeName,
    FishOutOfWaterThemeName,
    GoodVsEvilThemeName,
    GreedThemeName,
    HeroismThemeName,
    InnocenceThemeName,
    InvasionThemeName,
    IsolationThemeName,
    LoyaltyThemeName,
    LossOfControlThemeName,
    JusticeThemeName,
    NormalityMadnessBoundaryThemeName,
    ObsessionThemeName,
    PersonalGrowthThemeName,
    PriceOfSuccessThemeName,
    TrustThemeName,
    TraumaThemeName,
];

export const DramaThemeTableName = "Drama Theme";

export class DramaThemeTable extends Table{
    constructor() {
        super();
        this.title = DramaThemeTableName;
        this.addEntriesFromList(dramaThemes);
    }
}