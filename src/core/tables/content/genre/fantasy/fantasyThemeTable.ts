import {Table} from "../../../table";
import {MagicThemeName} from "../../themes/magicTheme";
import {DestinyThemeName} from "../../themes/destinyTheme";
import {GoodVsEvilThemeName} from "../../themes/goodVsEvilTheme";
import {HeroismThemeName} from "../../themes/heroismTheme";
import {UnknownThemeName} from "../../themes/unknownTheme";
import {RealityThemeName} from "../../themes/realityTheme";
import {DavidVsGoliathThemeName} from "../../themes/davidVsGoliathTheme";
import {SoulmatesThemeName} from "../../themes/soulmateTheme";
import {PoliticalPhilosophyThemeName} from "../../themes/politicalPhilosophyTheme";
import {InnocenceThemeName} from "../../themes/innocenceTheme";
import {GuiltThemeName} from "../../themes/guiltTheme";
import {NostalgiaThemeName} from "../../themes/nostalgiaTheme";

export let fantasyThemes = [
    MagicThemeName,
    DestinyThemeName,
    GoodVsEvilThemeName,
    HeroismThemeName,
    UnknownThemeName,
    RealityThemeName,
    DavidVsGoliathThemeName,
    SoulmatesThemeName,
    PoliticalPhilosophyThemeName,
    InnocenceThemeName,
    GuiltThemeName,
    NostalgiaThemeName,
];

export const FantasyThemeTableName = "Fantasy Theme";

export class FantasyThemeTable extends Table{
    constructor() {
        super();
        this.title = FantasyThemeTableName;
        this.addEntriesFromList(fantasyThemes);
    }
}