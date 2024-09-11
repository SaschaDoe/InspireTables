import {Table} from "../../../table";
import {MagicTheme} from "../../themes/magicTheme";
import {generateThematicStatement} from "../../themes/theme";
import {DestinyTheme} from "../../themes/destinyTheme";
import {GoodVsEvilTheme} from "../../themes/godVsEvilTheme";
import {HeroismTheme} from "../../themes/heroismTheme";
import {UnknownTheme} from "../../themes/unknownTheme";
import {RealityTheme} from "../../themes/realityTheme";
import {DavidVsGoliathTheme} from "../../themes/davidVsGoliathTheme";
import {SoulmatesTheme} from "../../themes/soulmateTheme";

export let fantasyThemes = [
    new MagicTheme().name,
    new DestinyTheme().name,
    new GoodVsEvilTheme().name,
    new HeroismTheme().name,
    new UnknownTheme().name,
    new RealityTheme().name,
    new DavidVsGoliathTheme().name,
    new SoulmatesTheme().name,
];

export const FantasyThemeTableName = "Fantasy Theme";

export class FantasyThemesTable extends Table{
    constructor() {
        super();
        this.title = FantasyThemeTableName;
        this.addEntriesFromList(fantasyThemes);
    }
}