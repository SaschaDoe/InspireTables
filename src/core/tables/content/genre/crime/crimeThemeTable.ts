import {Table} from "../../../table";
import {CatAndMouseThemeName} from "../../themes/catAndMouseTheme";
import {CorruptionThemeName} from "../../themes/corruptionTheme";
import {GoodVsEvilThemeName} from "../../themes/godVsEvilTheme";
import {JusticeThemeName} from "../../themes/justiceTheme";
import {
    NormalityMadnessBoundaryThemeName
} from "../../themes/normalityMadnessBoundaryTheme";
import {PublicPerceptionThemeName} from "../../themes/publicPerceptionTheme";
import {TrustInSocietyThemeName} from "../../themes/trustInSocietyTheme";
import {DeathThemeName} from "../../themes/deathTheme";
import {TruthThemeName} from "../../themes/truthTheme";
import {SearchThemeName} from "../../themes/searchTheme";
import {GreedThemeName} from "../../themes/greedTheme";
import {TeamworkThemeName} from "../../themes/teamworkTheme";
import {BereavementThemeName} from "../../themes/bereavementTheme";
import {RecallThemeName} from "../../themes/recallTheme";
import {AgonyThemeName} from "../../themes/agonyTheme";
import {MentorshipThemeName} from "../../themes/mentorshipTheme";

export let crimeThemes = [
    CatAndMouseThemeName,
    CorruptionThemeName,
    GoodVsEvilThemeName,
    JusticeThemeName,
    NormalityMadnessBoundaryThemeName,
    PublicPerceptionThemeName,
    TrustInSocietyThemeName,
    DeathThemeName,
    TruthThemeName,
    SearchThemeName,
    GreedThemeName,
    TeamworkThemeName,
    BereavementThemeName,
    RecallThemeName,
    AgonyThemeName,
    MentorshipThemeName,
];

export const CrimeThemeTableName = "Crime Theme";

export class CrimeThemeTable extends Table{
    constructor() {
        super();
        this.title = CrimeThemeTableName;
        this.addEntriesFromList(crimeThemes);
    }
}