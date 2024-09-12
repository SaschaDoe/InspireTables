import {Table} from "../../../table";
import {JusticeTheme} from "../../themes/justiceTheme";
import {TruthTheme} from "../../themes/truthTheme";
import {CatAndMouseTheme} from "../../themes/catAndMouseTheme";
import {GoodVsEvilTheme} from "../../themes/godVsEvilTheme";
import {MistakenIdentityTheme} from "../../themes/mistakenIdentity";
import {PowerTheme} from "../../themes/powerTheme";
import {SearchTheme} from "../../themes/searchTheme";
import {IsolationTheme} from "../../themes/isolationTheme";
import {TeamworkTheme} from "../../themes/teamworkTheme";
import {TimeTheme} from "../../themes/timeTheme";
import {UnknownTheme} from "../../themes/unknownTheme";
import {ObsessionTheme} from "../../themes/obsessionTheme";
import {RevengeTheme} from "../../themes/revengeTheme";
import {RecallTheme} from "../../themes/recallTheme";
import {TrustTheme} from "../../themes/trustTheme";
import {RealityTheme} from "../../themes/realityTheme";
import {TechnologicalInnovationTheme} from "../../themes/technologicalInovationTheme";

export let mysteryThemes = [
    new JusticeTheme().name,
    new TruthTheme().name,
    new CatAndMouseTheme().name,
    new GoodVsEvilTheme().name,
    new MistakenIdentityTheme().name,
    new PowerTheme().name,
    new SearchTheme().name,
    new IsolationTheme().name,
    new TeamworkTheme().name,
    new TimeTheme().name,
    new UnknownTheme().name,
    new ObsessionTheme().name,
    new RevengeTheme().name,
    new RecallTheme().name,
    new TrustTheme().name,
    new RealityTheme().name,
    new TechnologicalInnovationTheme().name,
];

export const MysteryThemeTableName = "Mystery Theme";

export class MemoirThemesTable extends Table{
    constructor() {
        super();
        this.title = MysteryThemeTableName;
        this.addEntriesFromList(mysteryThemes);
    }
}