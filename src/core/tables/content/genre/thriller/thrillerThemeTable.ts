import {Table} from "../../../table";
import {GuiltTheme} from "../../themes/guiltTheme";
import {BereavementTheme} from "../../themes/bereavementTheme";
import {CatAndMouseTheme} from "../../themes/catAndMouseTheme";
import {CorruptionTheme} from "../../themes/corruptionTheme";
import {DavidVsGoliathTheme} from "../../themes/davidVsGoliathTheme";
import {DeathTheme} from "../../themes/deathTheme";
import {GoodVsEvilTheme} from "../../themes/godVsEvilTheme";
import {GreedTheme} from "../../themes/greedTheme";
import {IsolationTheme} from "../../themes/isolationTheme";
import {NormalityMadnessBoundaryTheme} from "../../themes/normalityMadnessBoundaryTheme";
import {ObsessionTheme} from "../../themes/obsessionTheme";
import {PowerTheme} from "../../themes/powerTheme";
import {PublicPerceptionTheme} from "../../themes/publicPerceptionTheme";
import {SearchTheme} from "../../themes/searchTheme";
import {RevengeTheme} from "../../themes/revengeTheme";
import {SurvivalTheme} from "../../themes/survivalTheme";
import {TruthTheme} from "../../themes/truthTheme";
import {UnknownTheme} from "../../themes/unknownTheme";


export let thrillerThemes = [
    new GuiltTheme().name,
    new BereavementTheme().name,
    new CatAndMouseTheme().name,
    new CorruptionTheme().name,
    new DavidVsGoliathTheme().name,
    new DeathTheme().name,
    new GoodVsEvilTheme().name,
    new GreedTheme().name,
    new IsolationTheme().name,
    new NormalityMadnessBoundaryTheme().name,
    new ObsessionTheme().name,
    new PowerTheme().name,
    new PublicPerceptionTheme().name,
    new SearchTheme().name,
    new RevengeTheme().name,
    new SurvivalTheme().name,
    new TruthTheme().name,
    new UnknownTheme().name,
];

export const ThrillerThemeTableName = "Thriller Theme";

export class ThrillerThemesTable extends Table{
    constructor() {
        super();
        this.title = ThrillerThemeTableName;
        this.addEntriesFromList(thrillerThemes);
    }
}