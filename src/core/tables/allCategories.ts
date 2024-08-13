import {MainGenreTable} from "./content/genre/mainGenres";
import {ActionSubGenreTable} from "./content/genre/actionSubGenreTable";
import {ComedySubGenreTable} from "./content/genre/comedySubGenreTable";
import {AllGenreTable} from "./content/genre/allGenreTable";
import {Category} from "./category";
import {IllnessCureTable} from "./content/illness/illnessCureTable";
import {IllnessLoreTable} from "./content/illness/illnessLoreTable";
import {IllnessOriginTable} from "./content/illness/illnessOriginTable";
import {IllnessSymptomTable} from "./content/illness/illnessSymptomTable";
import {IllnessTypeTable} from "./content/illness/illnessTypeTable";
import {IllnessTransmissionTable} from "./content/illness/illnessTransmissionTable";
import {TimeTable} from "./content/other/timeTable";
import {CharacterTable} from "./content/character/characterTable";
import {StrengthTable} from "./content/other/strengthTable";
import {ProbabilityTable} from "./content/other/probabilityTable";
import {GenderTable} from "./content/other/genderTable";
import {PrognosisTable} from "./content/illness/prognosisTable";
import {ImpactTable} from "./content/other/impactTable";
import {
    RealisticProbableLowTechIllnessAdjectiveTable
} from "./content/illness/adjective/realisticProbableLowTechIllnessAdjectiveTable";
import {
    RealisticProbableHighTechIllnessAdjectiveTable
} from "./content/illness/adjective/realisticProbableHighTechIllnessAdjectiveTable";
import {
    RealisticLessProbableHighTechIllnessAdjectiveTable
} from "./content/illness/adjective/realisticLessProbableHighTechIllnessAdjectiveTable";
import {
    RealisticLessProbableLowTechIllnessAdjectiveTable
} from "./content/illness/adjective/realisticLessProbableLowTechIllnessAdjectiveTable";
import {
    UnrealisticProbableHighTechIllnessAdjectiveTable
} from "./content/illness/adjective/unrealisticProbableHighTechIllnessAdjectiveTable";
import {
    UnrealisticProbableLowTechIllnessAdjectiveTable
} from "./content/illness/adjective/unrealisticProbableLowTechIllnessAdjectiveTable";
import {
    UnrealisticLessProbableHighTechIllnessAdjectiveTable
} from "./content/illness/adjective/unrealisticLessProbableHighTechIllnessAdjectiveTable";
import {
    UnrealisticLessProbableLowTechIllnessAdjectiveTable
} from "./content/illness/adjective/unrealisticLessProbableLowTechIllnessAdjectiveTable";
import {RealisticLowTechIllnessAdjectiveTable} from "./content/illness/adjective/realisticLowTechIllnessAdjectiveTable";

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
        .withTable(new RealisticLowTechIllnessAdjectiveTable())
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