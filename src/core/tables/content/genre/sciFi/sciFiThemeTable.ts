import {Table} from "../../../table";
import {DefinitionOfHumanityThemeName} from "../../themes/definitionOfHumanityTheme";
import {ApocalypseThemeName} from "../../themes/apocalypseTheme";
import {CultureClashesThemeName} from "../../themes/cultureClashTheme";
import {DisillusionmentThemeName} from "../../themes/disillusionmentTheme";
import {FishOutOfWaterThemeName} from "../../themes/fishOutOfWaterTheme";
import {InvasionThemeName} from "../../themes/invasionTheme";
import {LossOfControlThemeName} from "../../themes/lossOfControl";
import {MagicThemeName} from "../../themes/magicTheme";
import {PowerThemeName} from "../../themes/powerTheme";
import {PriceOfSuccessThemeName} from "../../themes/priceOfSuccessTheme";
import {RealityThemeName} from "../../themes/realityTheme";
import {SurvivalThemeName} from "../../themes/survivalTheme";
import {TechnologicalInnovationThemeName} from "../../themes/technologicalInovationTheme";
import {TimeThemeName} from "../../themes/timeTheme";
import {TrustInSocietyThemeName} from "../../themes/trustInSocietyTheme";
import {UnknownThemeName} from "../../themes/unknownTheme";
import {PoliticalPhilosophyThemeName} from "../../themes/politicalPhilosophyTheme";
import {DeathThemeName} from "../../themes/deathTheme";
import {ChangeThemeName} from "../../themes/changeTheme";


export let sciFiThemes = [
    DefinitionOfHumanityThemeName,
    ApocalypseThemeName,
    CultureClashesThemeName,
    DisillusionmentThemeName,
    FishOutOfWaterThemeName,
    InvasionThemeName,
    LossOfControlThemeName,
    MagicThemeName,
    PowerThemeName,
    PriceOfSuccessThemeName,
    RealityThemeName,
    SurvivalThemeName,
    TechnologicalInnovationThemeName,
    TimeThemeName,
    TrustInSocietyThemeName,
    UnknownThemeName,
    PoliticalPhilosophyThemeName,
    DeathThemeName,
    ChangeThemeName,
];

export const SciFiThemeTableName = "SciFi Theme";

export class SciFiThemesTable extends Table{
    constructor() {
        super();
        this.title = SciFiThemeTableName;
        this.addEntriesFromList(sciFiThemes);
    }
}