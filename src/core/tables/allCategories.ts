import {MainGenreTable} from "./genre/mainGenres";
import {ActionSubGenreTable} from "./genre/actionSubGenreTable";
import {ComedySubGenreTable} from "./genre/comedySubGenreTable";
import {AllGenreTable} from "./genre/allGenreTable";
import {Category} from "./category";
import {IllnessCureTable} from "./illness/illnessCureTable";
import {IllnessLoreTable} from "./illness/illnessLoreTable";
import {IllnessOriginTable} from "./illness/illnessOriginTable";
import {IllnessSymptomTable} from "./illness/illnessSymptomTable";
import {IllnessTypeTable} from "./illness/illnessTypeTable";
import {IllnessTransmissionTable} from "./illness/illnessTransmissionTable";
import {TimeTable} from "./other/timeTable";
import {CharacterTable} from "./character/characterTable";
import {StrengthTable} from "./other/strengthTable";
import {ProbabilityTable} from "./other/probabilityTable";
import {GenderTable} from "./other/genderTable";
import {PrognosisTable} from "./illness/prognosisTable";
import {ImpactTable} from "./other/impactTable";
import {
    RealisticProbableLowTechIllnessAdjectiveTable
} from "./illness/adjective/realisticProbableLowTechIllnessAdjectiveTable";
import {
    RealisticProbableHighTechIllnessAdjectiveTable
} from "./illness/adjective/realisticProbableHighTechIllnessAdjectiveTable";
import {
    RealisticLessProbableHighTechIllnessAdjectiveTable
} from "./illness/adjective/realisticLessProbableHighTechIllnessAdjectiveTable";
import {
    RealisticLessProbableLowTechIllnessAdjectiveTable
} from "./illness/adjective/realisticLessProbableLowTechIllnessAdjectiveTable";
import {
    UnrealisticProbableHighTechIllnessAdjectiveTable
} from "./illness/adjective/unrealisticProbableHighTechIllnessAdjectiveTable";
import {
    UnrealisticProbableLowTechIllnessAdjectiveTable
} from "./illness/adjective/unrealisticProbableLowTechIllnessAdjectiveTable";
import {
    UnrealisticLessProbableHighTechIllnessAdjectiveTable
} from "./illness/adjective/unrealisticLessProbableHighTechIllnessAdjectiveTable";
import {
    UnrealisticLessProbableLowTechIllnessAdjectiveTable
} from "./illness/adjective/unrealisticLessProbableLowTechIllnessAdjectiveTable";

export function allCategories(): Category[] {
    let allCategories: Category[] = [];

    let characterCategory = new Category()
        .withName("Character")
        .withTable(new CharacterTable())
    allCategories.push(characterCategory);

    let genreCategory = new Category()
        .withName("Genres")
        .withTable(new AllGenreTable())
        .withTable(new MainGenreTable())
        .withTable(new ActionSubGenreTable())
        .withTable(new ComedySubGenreTable());
    allCategories.push(genreCategory);

    let illnessCategory = new Category()
        .withName("Illness")
        .withTable(new IllnessCureTable())
        .withTable(new IllnessLoreTable)
        .withTable(new IllnessOriginTable())
        .withTable(new IllnessSymptomTable())
        .withTable(new IllnessTypeTable())
        .withTable(new IllnessTransmissionTable())
        .withTable(new RealisticProbableHighTechIllnessAdjectiveTable())
        .withTable(new RealisticProbableLowTechIllnessAdjectiveTable())
        .withTable(new RealisticLessProbableHighTechIllnessAdjectiveTable())
        .withTable(new RealisticLessProbableLowTechIllnessAdjectiveTable())
        .withTable(new UnrealisticProbableHighTechIllnessAdjectiveTable())
        .withTable(new UnrealisticProbableLowTechIllnessAdjectiveTable())
        .withTable(new UnrealisticLessProbableHighTechIllnessAdjectiveTable())
        .withTable(new UnrealisticLessProbableLowTechIllnessAdjectiveTable())
        .withTable(new PrognosisTable());
    allCategories.push(illnessCategory);

    let otherCategory = new Category()
        .withName("Other")
        .withTable(new TimeTable())
        .withTable(new StrengthTable())
        .withTable(new ProbabilityTable())
        .withTable(new GenderTable())
        .withTable(new ImpactTable());
    allCategories.push(otherCategory);

    return allCategories;
}