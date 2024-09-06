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
import {GeneralThemesTable} from "./content/genre/theme/generalThemesTable";
import {FantasyThemesTable} from "./content/genre/theme/fantasyThemesTable";
import {CrimeSubGenreTable} from "./content/genre/crimeSubGenreTable";
import {ExplorerSubGenreTable} from "./content/genre/explorerSubGenreTable";
import {FantasySubGenreTable} from "./content/genre/fantasySubGenreTable";
import {GangsterSubGenreTable} from "./content/genre/gangsterSubGenreTable";
import {HeistSubGenreTable} from "./content/genre/heistSubGenreTable";
import {HorrorSubGenreTable} from "./content/genre/horrorSubGenreTable";
import {InternalGenreTable} from "./content/genre/internalGenreTable";
import {LoveSubGenreTable} from "./content/genre/loveSubGenreTable";
import {MemoirSubGenreTable, MemoirSubGenreTableName} from "./content/genre/memoirSubGenreTable";
import {MythSubGenreTable} from "./content/genre/mythicSubGenreTable";
import {PerformanceSubGenreTable} from "./content/genre/performanceSubGenreTable";
import {SciFiSubGenreTable} from "./content/genre/sciFiSubGenreTable";
import {ThrillerSubGenreTable} from "./content/genre/thrillerSubGenreTable";
import {WarSubGenreTable} from "./content/genre/warSubGenreTable";
import {WesternSubGenreTable} from "./content/genre/westernSubGenreTable";
import {TechLevelTable} from "./content/other/techLevelTable";
import {AmountTable} from "./content/other/amountTable";
import {DifficultyLevelTable} from "./content/other/difficultTable";
import {HeightTable} from "./content/other/heightTable";
import {RealismTable} from "./content/other/realismTable";
import {SpeedTable} from "./content/other/speedTable";

export const IllnessCategoryName = "Illness";
export const OtherCategoryName = "Other";

export function allCategories(): Category[] {
    let allCategories: Category[] = [];

    let characterCategory = new Category()
        .withName("Character")
        .withTable(new CharacterTable())
    allCategories.push(characterCategory);

    let themeCategory = new Category()
        .withName("Theme")
        .withTable(new GeneralThemesTable())
        .withTable(new FantasyThemesTable());
    allCategories.push(themeCategory);

    let genreCategory = new Category()
        .withName("Genres")
        .withTable(new AllGenreTable())
        .withTable(new MainGenreTable())
        .withTable(new ActionSubGenreTable())
        .withTable(new ComedySubGenreTable())
        .withTable(new CrimeSubGenreTable())
        .withTable(new ExplorerSubGenreTable())
        .withTable(new FantasySubGenreTable())
        .withTable(new GangsterSubGenreTable())
        .withTable(new HeistSubGenreTable())
        .withTable(new HorrorSubGenreTable())
        .withTable(new InternalGenreTable())
        .withTable(new LoveSubGenreTable())
        .withTable(new MemoirSubGenreTable)
        .withTable(new MythSubGenreTable())
        .withTable(new PerformanceSubGenreTable())
        .withTable(new SciFiSubGenreTable())
        .withTable(new ThrillerSubGenreTable())
        .withTable(new WarSubGenreTable())
        .withTable(new WesternSubGenreTable())
    allCategories.push(genreCategory);

    let illnessCategory = new Category()
        .withName(IllnessCategoryName)
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
        .withName(OtherCategoryName)
        .withTable(new AmountTable())
        .withTable(new DifficultyLevelTable())
        .withTable(new HeightTable())
        .withTable(new ProbabilityTable())
        .withTable(new RealismTable())
        .withTable(new SpeedTable())
        .withTable(new TimeTable())
        .withTable(new StrengthTable())
        .withTable(new ProbabilityTable())
        .withTable(new GenderTable())
        .withTable(new ImpactTable())
        .withTable(new TechLevelTable());
    allCategories.push(otherCategory);

    return allCategories;
}