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
import {ActionRealThemeTable} from "./content/genre/action/actionRealThemeTable";
import {ComedyRealThemeTable} from "./content/genre/comedy/comedyRealThemeTable";
import {CrimeRealThemeTable} from "./content/genre/crime/crimeRealThemeTable";
import {DramaRealThemeTable} from "./content/genre/drama/dramaRealThemeTable";
import {ExplorerRealThemeTable} from "./content/genre/explorer/explorerRealThemeTable";
import {GangsterRealThemeTable} from "./content/genre/gangster/gangsterRealThemeTable";
import {FantasyRealThemeTable} from "./content/genre/fantasy/fantasyRealthemeTable";
import {HeistRealThemeTable} from "./content/genre/heist/heistRealThemeTable";
import {HorrorRealThemeTable} from "./content/genre/horror/horrorRealThemeTable";
import {LoveRealThemeTable} from "./content/genre/love/loveRealThemeTable";
import {MemoirRealThemeTable} from "./content/genre/memoir/memoirRealThemeTable";
import {MysteryRealThemeTable} from "./content/genre/mystery/mysteryRealThemeTable";
import {MythicRealThemeTable} from "./content/genre/mythic/mythicRealThemeTable";
import {PerformanceRealThemeTable} from "./content/genre/performance/performanceRealThemeTable";
import {SciFiRealThemeTable} from "./content/genre/sciFi/sciFiRealThemeTable";
import {ThrillerRealThemeTable} from "./content/genre/thriller/thrillerRealThemeTable";
import {WarRealThemeTable} from "./content/genre/war/warRealThemeTable";
import {WesternRealThemeTable} from "./content/genre/western/westernRealThemeTable";
import {AfterlifeThemeStatementTable} from "./content/themes/afterlifeThemeStatementTable";
import {AgonyThemeStatementTable} from "./content/themes/agonyThemeStatementTable";
import {ApocalypseThemeStatementTable} from "./content/themes/apocalypseThemeStatementTable";
import {AttractionThemeStatementTable} from "./content/themes/attractionThemeStatementTable";
import {BalanceThemeStatementTable} from "./content/themes/balanceThemeStatementTable";
import {BereavementThemeStatementTable} from "./content/themes/bereavementThemeStatementTable";
import {CatAndMouseThemeStatementTable} from "./content/themes/catAndMouseThemeStatementTable";
import {ChangeThemeStatementTable} from "./content/themes/changeThemeStatementTable";
import {ComingOfAgeThemeStatementTable} from "./content/themes/comingOfAgeThemeStatementTable";
import {CorruptionThemeStatementTable} from "./content/themes/corruptionThemeStatementTable";
import {
    ClashOfCulturesThemeStatementTable,
    ClashOfCulturesThemeStatementTableName
} from "./content/themes/cultureClashThemeStatementTable";
import {DavidVsGoliathThemeStatementTable} from "./content/themes/davidVsGoliathThemeStatementTable";
import {DeathThemeStatementTable} from "./content/themes/deathThemeStatementTable";
import {DefinitionOfHumanityThemeStatementTable} from "./content/themes/definitionOfHumanityThemeStatementTable";
import {DestinyThemeStatementTable} from "./content/themes/destinyThemeStatementTable";
import {DisillusionmentThemeStatementTable} from "./content/themes/DisillusionmentThemeStatementTable";
import {DivineThemeStatementTable} from "./content/themes/divineThemeStatementTable";
import {FakeRelationshipThemeStatementTable} from "./content/themes/fakeRelationshipThemeStatementTable";
import {FamilyThemeStatementTable} from "./content/themes/familyThemeStatementTable";
import {FishOutOfWaterThemeStatementTable} from "./content/themes/fishOutOfWaterThemeStatementTable";
import {FriendsToLoversThemeStatementTable} from "./content/themes/friendsToLoversThemeStatementTable";
import {FutilityOfStruggleThemeStatementTable} from "./content/themes/futilityOfStruggleThemeStatementTable";
import {GoodVsEvilThemeStatementTable} from "./content/themes/goodVsEvilThemeStatementTable";
import {GreedThemeStatementTable} from "./content/themes/greedThemeStatementTable";
import {GuiltThemeStatementTable} from "./content/themes/guiltThemeStatementTable";
import {HeroismThemeStatementTable} from "./content/themes/heroismThemeStatementTable";
import {InnocenceThemeStatementTable} from "./content/themes/innocenceThemeStatementTable";
import {InvasionThemeStatementTable} from "./content/themes/invasionThemeStatementTable";
import {IsolationThemeStatementTable} from "./content/themes/isolationThemeStatementTable";
import {JusticeThemeStatementTable} from "./content/themes/justiceThemeStatementTable";
import {LossOfControlThemeStatementTable} from "./content/themes/lossOfControlThemeStatementTable";
import {LoveTriangleThemeStatementTable} from "./content/themes/loveTriangleThemeStatementTable";
import {LoyaltyThemeStatementTable} from "./content/themes/loyaltyThemeStatementTable";
import {MagicThemeStatementTable} from "./content/themes/magicThemeStatementTable";
import {MentorshipThemeStatementTable} from "./content/themes/mentorshipThemeStatementTable";
import {MistakenIdentityThemeStatementTable} from "./content/themes/mistakenIdentityThemeStatementTable";
import {NatureAsEnemyThemeStatementTable} from "./content/themes/natureAsEnemyThemeStatementTable";
import {
    NormalityMadnessBoundaryThemeStatementTable
} from "./content/themes/normalityMadnessBoundaryThemeStatementTable";
import {
    NostalgiaThemeStatementTable,
    NostalgiaThemeStatementTableName
} from "./content/themes/nostalgiaThemeStatementTable";
import {ObsessionThemeStatementTable} from "./content/themes/obsessionThemeStatementTable";
import {PersonalityGrowthThemeStatementTable} from "./content/themes/personalityGrowthThemeStatementTable";
import {PoliticalPhilosophyThemeStatementTable} from "./content/themes/politicalPhilosophyThemeStatementTable";
import {PowerThemeStatementTable} from "./content/themes/powerThemeStatementTable";
import {PriceOfSuccessThemeStatementTable} from "./content/themes/priceOfSuccessThemeStatementTable";
import {PsychosomaticDualityThemeStatementTable} from "./content/themes/psychosomaticDualityThemeStatementTable";
import {PublicPerceptionThemeStatementTable} from "./content/themes/publicPerceptionThemeStatementTable";
import {PursuitOfProsperityThemeStatementTable} from "./content/themes/pursuitOfProsperityThemeStatementTable";
import {RealityThemeStatementTable} from "./content/themes/realityThemeStatementTable";
import {RecallThemeStatementTable} from "./content/themes/recallThemeStatementTable";
import {RevengeThemeStatementTable} from "./content/themes/revengeThemeStatementTable";
import {SearchThemeStatementTable} from "./content/themes/searchThemeStatementTable";
import {SecondChanceRomanceThemeStatementTable} from "./content/themes/secondChanceRomanceThemeStatementTable";
import {SoulmateThemeStatementTable} from "./content/themes/soulmateThemeStatementTable";
import {StarCrossedLoversThemeStatementTable} from "./content/themes/starCrossedLoversThemeStatementTable";
import {SurvivalThemeStatementTable} from "./content/themes/survivalThemeStatementTable";
import {TabooThemeStatementTable} from "./content/themes/tabooThemeStatementTable";
import {TeamworkThemeStatementTable} from "./content/themes/teamworkThemeStatementTable";
import {TechnologicalInnovationThemeStatementTable} from "./content/themes/technologicalInnovationThemeStatementTable";
import {TimeThemeStatementTable} from "./content/themes/timeThemeStatementTable";
import {TraumaThemeStatementTable} from "./content/themes/traumaThemeStatementTable";
import {TrustInSocietyThemeStatementTable} from "./content/themes/trustInSocietyThemeStatementTable";
import {TrustThemeStatementTable} from "./content/themes/trustThemeStatementTable";
import {TruthThemeStatementTable} from "./content/themes/truthThemeStatementTable";
import {UnknownThemeStatementTable} from "./content/themes/unknownThemeStatementTable";
import {WhatReallyMattersThemeStatementTable} from "./content/themes/whatReallyMattersThemeStatementTable";

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
        .withTable(new ActionRealThemeTable)

        .withTable(new ComedyThemeTable())
        .withTable(new ComedyRealThemeTable())

        .withTable(new CrimeThemeTable())
        .withTable(new CrimeRealThemeTable())

        .withTable(new DramaThemeTable())
        .withTable(new DramaRealThemeTable())

        .withTable(new ExplorerThemeTable())
        .withTable(new ExplorerRealThemeTable())

        .withTable(new GangsterThemesTable())
        .withTable(new GangsterRealThemeTable())

        .withTable(new FantasyThemeTable())
        .withTable(new FantasyRealThemeTable())

        .withTable(new HeistThemesTable())
        .withTable(new HeistRealThemeTable())

        .withTable(new HorrorThemesTable())
        .withTable(new HorrorRealThemeTable())

        .withTable(new LoveThemesTable())
        .withTable(new LoveRealThemeTable())

        .withTable(new MemoirThemesTable())
        .withTable(new MemoirRealThemeTable())

        .withTable(new MysteryThemesTable())
        .withTable(new MysteryRealThemeTable())

        .withTable(new MythicThemesTable())
        .withTable(new MythicRealThemeTable())

        .withTable(new PerformanceThemesTable())
        .withTable(new PerformanceRealThemeTable())

        .withTable(new SciFiThemesTable())
        .withTable(new SciFiRealThemeTable())

        .withTable(new ThrillerThemesTable())
        .withTable(new ThrillerRealThemeTable())

        .withTable(new WarThemesTable())
        .withTable(new WarRealThemeTable())

        .withTable(new WesternThemesTable())
        .withTable(new WesternRealThemeTable())

        .withTable(new AfterlifeThemeStatementTable())
        .withTable(new AgonyThemeStatementTable())
        .withTable(new ApocalypseThemeStatementTable())
        .withTable(new AttractionThemeStatementTable())
        .withTable(new BalanceThemeStatementTable())
        .withTable(new BereavementThemeStatementTable())
        .withTable(new CatAndMouseThemeStatementTable())
        .withTable(new ChangeThemeStatementTable())
        .withTable(new ComingOfAgeThemeStatementTable())
        .withTable(new CorruptionThemeStatementTable())
        .withTable(new ClashOfCulturesThemeStatementTable())
        .withTable(new DavidVsGoliathThemeStatementTable())
        .withTable(new DeathThemeStatementTable())
        .withTable(new DefinitionOfHumanityThemeStatementTable())
        .withTable(new DestinyThemeStatementTable())
        .withTable(new DisillusionmentThemeStatementTable())
        .withTable(new DivineThemeStatementTable())
        .withTable(new FakeRelationshipThemeStatementTable())
        .withTable(new FamilyThemeStatementTable())
        .withTable(new FishOutOfWaterThemeStatementTable())
        .withTable(new FriendsToLoversThemeStatementTable())
        .withTable(new FutilityOfStruggleThemeStatementTable())
        .withTable(new GoodVsEvilThemeStatementTable())
        .withTable(new GreedThemeStatementTable())
        .withTable(new GuiltThemeStatementTable())
        .withTable(new HeroismThemeStatementTable())
        .withTable(new InnocenceThemeStatementTable())
        .withTable(new InvasionThemeStatementTable())
        .withTable(new IsolationThemeStatementTable())
        .withTable(new JusticeThemeStatementTable())
        .withTable(new LossOfControlThemeStatementTable())
        .withTable(new LoveTriangleThemeStatementTable())
        .withTable(new LoyaltyThemeStatementTable())
        .withTable(new MagicThemeStatementTable())
        .withTable(new MentorshipThemeStatementTable())
        .withTable(new MistakenIdentityThemeStatementTable())
        .withTable(new NatureAsEnemyThemeStatementTable())
        .withTable(new NormalityMadnessBoundaryThemeStatementTable())
        .withTable(new NostalgiaThemeStatementTable())
        .withTable(new ObsessionThemeStatementTable())
        .withTable(new PersonalityGrowthThemeStatementTable())
        .withTable(new PoliticalPhilosophyThemeStatementTable())
        .withTable(new PowerThemeStatementTable())
        .withTable(new PriceOfSuccessThemeStatementTable())
        .withTable(new PsychosomaticDualityThemeStatementTable())
        .withTable(new PublicPerceptionThemeStatementTable())
        .withTable(new PursuitOfProsperityThemeStatementTable())
        .withTable(new RealityThemeStatementTable())
        .withTable(new RecallThemeStatementTable())
        .withTable(new RevengeThemeStatementTable())
        .withTable(new SearchThemeStatementTable())
        .withTable(new SecondChanceRomanceThemeStatementTable())
        .withTable(new SoulmateThemeStatementTable())
        .withTable(new StarCrossedLoversThemeStatementTable())
        .withTable(new SurvivalThemeStatementTable())
        .withTable(new TabooThemeStatementTable())
        .withTable(new TeamworkThemeStatementTable())
        .withTable(new TechnologicalInnovationThemeStatementTable())
        .withTable(new TimeThemeStatementTable())
        .withTable(new TraumaThemeStatementTable())
        .withTable(new TrustInSocietyThemeStatementTable())
        .withTable(new TrustThemeStatementTable())
        .withTable(new TruthThemeStatementTable())
        .withTable(new UnknownThemeStatementTable())
        .withTable(new WhatReallyMattersThemeStatementTable())
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