import {Table} from "../../../table";
import {JusticeThemeName} from "../../themes/justiceTheme";
import {TruthThemeName} from "../../themes/truthTheme";
import {CatAndMouseThemeName} from "../../themes/catAndMouseTheme";
import {GoodVsEvilThemeName} from "../../themes/godVsEvilTheme";
import {MistakenIdentityThemeName} from "../../themes/mistakenIdentity";
import {PowerThemeName} from "../../themes/powerTheme";
import {SearchThemeName} from "../../themes/searchTheme";
import {IsolationThemeName} from "../../themes/isolationTheme";
import {TeamworkThemeName} from "../../themes/teamworkTheme";
import {TimeThemeName} from "../../themes/timeTheme";
import {UnknownThemeName} from "../../themes/unknownTheme";
import {ObsessionThemeName} from "../../themes/obsessionTheme";
import {RevengeThemeName} from "../../themes/revengeTheme";
import {RecallThemeName} from "../../themes/recallTheme";
import {TrustThemeName} from "../../themes/trustTheme";
import {RealityThemeName} from "../../themes/realityTheme";
import {TechnologicalInnovationThemeName} from "../../themes/technologicalInovationTheme";

export let mysteryThemes = [
    JusticeThemeName,
    TruthThemeName,
    CatAndMouseThemeName,
    GoodVsEvilThemeName,
    MistakenIdentityThemeName,
    PowerThemeName,
    SearchThemeName,
    IsolationThemeName,
    TeamworkThemeName,
    TimeThemeName,
    UnknownThemeName,
    ObsessionThemeName,
    RevengeThemeName,
    RecallThemeName,
    TrustThemeName,
    RealityThemeName,
    TechnologicalInnovationThemeName,
];

export const MysteryThemeTableName = "Mystery Theme";

export class MysteryThemesTable extends Table{
    constructor() {
        super();
        this.title = MysteryThemeTableName;
        this.addEntriesFromList(mysteryThemes);
    }
}