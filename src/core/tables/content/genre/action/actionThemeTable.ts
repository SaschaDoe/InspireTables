import {GoodVsEvilThemeName} from "../../themes/goodVsEvilTheme";
import {HeroismThemeName} from "../../themes/heroismTheme";
import {Table} from "../../../table";
import {RevengeThemeName} from "../../themes/revengeTheme";
import {SurvivalThemeName} from "../../themes/survivalTheme";
import {JusticeThemeName} from "../../themes/justiceTheme";
import {LoyaltyThemeName} from "../../themes/loyaltyTheme";
import {PowerThemeName} from "../../themes/powerTheme";
import {CorruptionThemeName} from "../../themes/corruptionTheme";
import {DavidVsGoliathThemeName} from "../../themes/davidVsGoliathTheme";
import {PsychosomaticDualityThemeName} from "../../themes/psychosomaticDualityTheme";
import {InnocenceThemeName} from "../../themes/innocenceTheme";
import {TechnologicalInnovationThemeName} from "../../themes/technologicalInnovationTheme";
import {PersonalGrowthThemeName} from "../../themes/personalGrowthTheme";

export let actionThemes = [
    HeroismThemeName,
    GoodVsEvilThemeName,
    RevengeThemeName,
    SurvivalThemeName,
    JusticeThemeName,
    LoyaltyThemeName,
    PowerThemeName,
    CorruptionThemeName,
    DavidVsGoliathThemeName,
    PsychosomaticDualityThemeName,
    InnocenceThemeName,
    TechnologicalInnovationThemeName,
    PersonalGrowthThemeName,
];

export const ActionThemeTableName = "Action Theme";

export class ActionThemeTable extends Table{
    constructor() {
        super();
        this.title = ActionThemeTableName;
        this.addEntriesFromList(actionThemes);
    }
}