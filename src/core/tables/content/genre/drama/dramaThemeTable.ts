import {Table} from "../../../table";
import {AgonyTheme} from "../../themes/agonyTheme";
import {AttractionTheme} from "../../themes/attractionTheme";
import {BereavementTheme} from "../../themes/bereavementTheme";
import {ComingOfAgeTheme} from "../../themes/comingOfAgeTheme";
import {CultureClashesTheme} from "../../themes/cultureClashTheme";
import {DavidVsGoliathTheme} from "../../themes/davidVsGoliathTheme";
import {PowerTheme} from "../../themes/powerTheme";
import {DisillusionmentTheme} from "../../themes/disillusionmentTheme";
import {FakeRelationshipTheme} from "../../themes/fakeRelationshipTheme";
import {CorruptionTheme} from "../../themes/corruptionTheme";
import {FishOutOfWaterTheme} from "../../themes/fishOutOfWaterTheme";
import {GoodVsEvilTheme} from "../../themes/godVsEvilTheme";
import {GreedTheme} from "../../themes/greedTheme";
import {HeroismTheme} from "../../themes/heroismTheme";
import {InnocenceTheme} from "../../themes/innocenceTheme";
import {InvasionTheme} from "../../themes/invasionTheme";
import {IsolationTheme} from "../../themes/isolationTheme";
import {LoyaltyTheme} from "../../themes/loyaltyTheme";
import {LossOfControlTheme} from "../../themes/lossOfControl";
import {JusticeTheme} from "../../themes/justiceTheme";
import {NormalityMadnessBoundaryTheme} from "../../themes/normalityMadnessBoundaryTheme";
import {ObsessionTheme} from "../../themes/obsessionTheme";
import {PersonalGrowthTheme} from "../../themes/personalGrowthTheme";
import {PriceOfSuccessTheme} from "../../themes/priceOfSuccessTheme";
import {TrustTheme} from "../../themes/trustTheme";
import {TruthTheme} from "../../themes/truthTheme";
import {TraumaTheme} from "../../themes/traumaTheme";

export let dramaThemes = [
    new AgonyTheme().name,
    new AttractionTheme().name,
    new BereavementTheme().name,
    new ComingOfAgeTheme().name,
    new CultureClashesTheme().name,
    new DavidVsGoliathTheme().name,
    new PowerTheme().name,
    new DisillusionmentTheme().name,
    new FakeRelationshipTheme().name,
    new CorruptionTheme().name,
    new FishOutOfWaterTheme().name,
    new GoodVsEvilTheme().name,
    new GreedTheme().name,
    new HeroismTheme().name,
    new InnocenceTheme().name,
    new InvasionTheme().name,
    new IsolationTheme().name,
    new LoyaltyTheme().name,
    new LossOfControlTheme().name,
    new JusticeTheme().name,
    new NormalityMadnessBoundaryTheme().name,
    new ObsessionTheme().name,
    new PersonalGrowthTheme().name,
    new PriceOfSuccessTheme().name,
    new TrustTheme().name,
    new TruthTheme().name,
    new TraumaTheme().name,
];

export const DramaThemeTableName = "Drama Theme";

export class DramaThemeTable extends Table{
    constructor() {
        super();
        this.title = DramaThemeTableName;
        this.addEntriesFromList(dramaThemes);
    }
}