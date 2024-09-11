import {MagicTheme} from "../../themes/magicTheme";
import {DestinyTheme} from "../../themes/destinyTheme";
import {GoodVsEvilTheme} from "../../themes/godVsEvilTheme";
import {HeroismTheme} from "../../themes/heroismTheme";
import {UnknownTheme} from "../../themes/unknownTheme";
import {RealityTheme} from "../../themes/realityTheme";
import {Table} from "../../../table";
import {RevengeTheme} from "../../themes/revengeTheme";
import {SurvivalTheme} from "../../themes/survivalTheme";
import {JusticeTheme} from "../../themes/justiceTheme";
import {LoyaltyTheme} from "../../themes/loyaltyTheme";
import {PowerTheme} from "../../themes/powerTheme";
import {CorruptionTheme} from "../../themes/corruptionTheme";
import {DavidVsGoliathTheme} from "../../themes/davidVsGoliathTheme";
import {PsychosomaticDualityTheme} from "../../themes/psychosomaticDualityTheme";

export let actionThemes = [
    new HeroismTheme().name,
    new GoodVsEvilTheme().name,
    new RevengeTheme().name,
    new SurvivalTheme().name,
    new JusticeTheme().name,
    new LoyaltyTheme().name,
    new PowerTheme().name,
    new CorruptionTheme().name,
    new DavidVsGoliathTheme().name,
    new PsychosomaticDualityTheme().name,
    
];

export const ActionThemeTableName = "Action Theme";

export class ActionThemeTable extends Table{
    constructor() {
        super();
        this.title = ActionThemeTableName;
        this.addEntriesFromList(actionThemes);
    }
}