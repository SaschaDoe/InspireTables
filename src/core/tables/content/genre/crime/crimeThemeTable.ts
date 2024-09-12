import {Table} from "../../../table";
import {FishOutOfWaterTheme} from "../../themes/fishOutOfWaterTheme";
import {MistakenIdentityTheme} from "../../themes/mistakenIdentity";
import {FamilyTheme} from "../../themes/familyTheme";
import {ComingOfAgeTheme} from "../../themes/comingOfAgeTheme";
import {CultureClashesTheme} from "../../themes/cultureClashTheme";
import {CatAndMouseTheme} from "../../themes/catAndMouseTheme";
import {CorruptionTheme} from "../../themes/corruptionTheme";
import {GoodVsEvilTheme} from "../../themes/godVsEvilTheme";
import {JusticeTheme} from "../../themes/justiceTheme";
import {NormalityMadnessBoundaryTheme} from "../../themes/normalityMadnessBoundaryTheme";
import {PublicPerceptionTheme} from "../../themes/publicPerceptionTheme";
import {TrustInSocietyTheme} from "../../themes/trustInSocietyTheme";
import {DeathTheme} from "../../themes/deathTheme";
import {TruthTheme} from "../../themes/truthTheme";
import {SearchTheme} from "../../themes/searchTheme";
import {GreedTheme} from "../../themes/greedTheme";
import {TeamworkTheme} from "../../themes/teamworkTheme";
import {BereavementTheme} from "../../themes/bereavementTheme";
import {RecallTheme} from "../../themes/recallTheme";
import {AgonyTheme} from "../../themes/agonyTheme";
import {MentorshipTheme} from "../../themes/mentorshipTheme";

export let crimeThemes = [
    new CatAndMouseTheme().name,
    new CorruptionTheme().name,
    new GoodVsEvilTheme().name,
    new JusticeTheme().name,
    new NormalityMadnessBoundaryTheme().name,
    new PublicPerceptionTheme().name,
    new TrustInSocietyTheme().name,
    new DeathTheme().name,
    new TruthTheme().name,
    new SearchTheme().name,
    new GreedTheme().name,
    new TeamworkTheme().name,
    new BereavementTheme().name,
    new RecallTheme().name,
    new AgonyTheme().name,
    new MentorshipTheme().name,
];

export const CrimeThemeTableName = "Crime Theme";

export class CrimeThemeTable extends Table{
    constructor() {
        super();
        this.title = CrimeThemeTableName;
        this.addEntriesFromList(crimeThemes);
    }
}