import {MainGenreTable} from "./content/genre/mainGenres";
import {ActionSubGenreTable} from "./content/genre/action/actionSubGenreTable";
import {ComedySubGenreTable} from "./content/genre/comedy/comedySubGenreTable";
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
import {FantasyThemeTable} from "./content/genre/fantasy/fantasyThemeTable";
import {CrimeSubGenreTable} from "./content/genre/crime/crimeSubGenreTable";
import {ExplorerSubGenreTable} from "./content/genre/explorer/explorerSubGenreTable";
import {FantasySubGenreTable} from "./content/genre/fantasy/fantasySubGenreTable";
import {GangsterSubGenreTable} from "./content/genre/gangster/gangsterSubGenreTable";
import {HeistSubGenreTable} from "./content/genre/heist/heistSubGenreTable";
import {HorrorSubGenreTable} from "./content/genre/horror/horrorSubGenreTable";
import {InternalGenreTable} from "./content/genre/internalGenreTable";
import {LoveSubGenreTable} from "./content/genre/love/loveSubGenreTable";
import {MemoirSubGenreTable} from "./content/genre/memoir/memoirSubGenreTable";
import {MythSubGenreTable} from "./content/genre/mythic/mythicSubGenreTable";
import {PerformanceSubGenreTable} from "./content/genre/performance/performanceSubGenreTable";
import {SciFiSubGenreTable} from "./content/genre/sciFi/sciFiSubGenreTable";
import {ThrillerSubGenreTable} from "./content/genre/thriller/thrillerSubGenreTable";
import {WarSubGenreTable} from "./content/genre/war/warSubGenreTable";
import {WesternSubGenreTable} from "./content/genre/western/westernSubGenreTable";
import {TechLevelTable} from "./content/other/techLevelTable";
import {AmountTable} from "./content/other/amountTable";
import {DifficultyLevelTable} from "./content/other/difficultTable";
import {HeightTable} from "./content/other/heightTable";
import {RealismTable} from "./content/other/realismTable";
import {SpeedTable} from "./content/other/speedTable";
import {ActionThemeTable} from "./content/genre/action/actionThemeTable";
import {ComedyThemeTable} from "./content/genre/comedy/comedyThemeTable";
import {CrimeThemeTable} from "./content/genre/crime/crimeThemeTable";
import {DramaThemeTable} from "./content/genre/drama/dramaThemeTable";
import {ExplorerThemeTable} from "./content/genre/explorer/explorerThemeTable";
import {GangsterThemesTable} from "./content/genre/gangster/gangsterThemeTable";
import {HeistThemesTable} from "./content/genre/heist/heistThemeTable";
import {HorrorThemesTable} from "./content/genre/horror/horrorThemeTable";
import {LoveThemesTable} from "./content/genre/love/loveThemeTable";
import {MemoirThemesTable} from "./content/genre/memoir/memoirThemeTable";
import {MysteryThemesTable} from "./content/genre/mystery/mysteryThemeTable";
import {MythicThemesTable} from "./content/genre/mythic/mythicThemeTable";
import {PerformanceThemesTable} from "./content/genre/performance/performanceThemeTable";
import {SciFiThemesTable} from "./content/genre/sciFi/sciFiThemeTable";
import {ThrillerThemesTable} from "./content/genre/thriller/thrillerThemeTable";
import {WesternThemesTable} from "./content/genre/western/westernThemeTable";
import {WarThemesTable} from "./content/genre/war/warThemeTable";

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
        .withTable(new ActionThemeTable())
        .withTable(new ComedyThemeTable())
        .withTable(new CrimeThemeTable())
        .withTable(new DramaThemeTable())
        .withTable(new ExplorerThemeTable())
        .withTable(new GangsterThemesTable())
        .withTable(new FantasyThemeTable())
        .withTable(new HeistThemesTable())
        .withTable(new HorrorThemesTable())
        .withTable(new LoveThemesTable())
        .withTable(new MemoirThemesTable())
        .withTable(new MysteryThemesTable())
        .withTable(new MythicThemesTable())
        .withTable(new PerformanceThemesTable())
        .withTable(new SciFiThemesTable())
        .withTable(new ThrillerThemesTable())
        .withTable(new WarThemesTable())
        .withTable(new WesternThemesTable())
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