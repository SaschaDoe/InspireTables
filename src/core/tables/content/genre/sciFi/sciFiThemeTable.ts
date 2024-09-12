import {Table} from "../../../table";
import {DefinitionOfHumanityTheme} from "../../themes/definitionOfHumanityTheme";
import {ApocalypseTheme} from "../../themes/apocalypseTheme";
import {CultureClashesTheme} from "../../themes/cultureClashTheme";
import {DisillusionmentTheme} from "../../themes/disillusionmentTheme";
import {FishOutOfWaterTheme} from "../../themes/fishOutOfWaterTheme";
import {InvasionTheme} from "../../themes/invasionTheme";
import {LossOfControlTheme} from "../../themes/lossOfControl";
import {MagicTheme} from "../../themes/magicTheme";
import {PowerTheme} from "../../themes/powerTheme";
import {PriceOfSuccessTheme} from "../../themes/priceOfSuccessTheme";
import {RealityTheme} from "../../themes/realityTheme";
import {SurvivalTheme} from "../../themes/survivalTheme";
import {TechnologicalInnovationTheme} from "../../themes/technologicalInovationTheme";
import {TimeTheme} from "../../themes/timeTheme";
import {TrustInSocietyTheme} from "../../themes/trustInSocietyTheme";
import {UnknownTheme} from "../../themes/unknownTheme";
import {PoliticalPhilosophyTheme} from "../../themes/politicalPhilosophyTheme";
import {DeathTheme} from "../../themes/deathTheme";


export let sciFiThemes = [
    new DefinitionOfHumanityTheme().name,
    new ApocalypseTheme().name,
    new CultureClashesTheme().name,
    new DisillusionmentTheme().name,
    new FishOutOfWaterTheme().name,
    new InvasionTheme().name,
    new LossOfControlTheme().name,
    new MagicTheme().name,
    new PowerTheme().name,
    new PriceOfSuccessTheme().name,
    new RealityTheme().name,
    new SurvivalTheme().name,
    new TechnologicalInnovationTheme().name,
    new TimeTheme().name,
    new TrustInSocietyTheme().name,
    new UnknownTheme().name,
    new PoliticalPhilosophyTheme().name,
    new DeathTheme().name,
];

export const SciFiThemeTableName = "SciFi Theme";

export class SciFiThemesTable extends Table{
    constructor() {
        super();
        this.title = SciFiThemeTableName;
        this.addEntriesFromList(sciFiThemes);
    }
}