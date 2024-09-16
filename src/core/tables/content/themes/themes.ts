import {MagicTheme, MagicThemeName} from "./magicTheme";
import {DestinyTheme, DestinyThemeName} from "./destinyTheme";
import type {Theme} from "./theme";
import {AfterlifeTheme, AfterlifeThemeName} from "./afterlifeTheme";
import {AgonyTheme, AgonyThemeName} from "./agonyTheme";
import {ApocalypseTheme, ApocalypseThemeName} from "./apocalypseTheme";
import {AttractionTheme, AttractionThemeName} from "./attractionTheme";
import {BalanceTheme, BalanceThemeName} from "./balanceTheme";
import {BereavementTheme, BereavementThemeName} from "./bereavementTheme";
import {CatAndMouseTheme, CatAndMouseThemeName} from "./catAndMouseTheme";
import {ChangeTheme, ChangeThemeName} from "./changeTheme";
import {ComingOfAgeTheme, ComingOfAgeThemeName} from "./comingOfAgeTheme";
import {CorruptionTheme, CorruptionThemeName} from "./corruptionTheme";
import {CultureClashesTheme, CultureClashesThemeName} from "./cultureClashTheme";
import {DavidVsGoliathTheme, DavidVsGoliathThemeName} from "./davidVsGoliathTheme";
import {GoodVsEvilTheme, GoodVsEvilThemeName} from "./godVsEvilTheme";
import {DeathTheme, DeathThemeName} from "./deathTheme";
import {DefinitionOfHumanityTheme, DefinitionOfHumanityThemeName} from "./definitionOfHumanityTheme";
import {DisillusionmentTheme, DisillusionmentThemeName} from "./disillusionmentTheme";
import {FakeRelationshipTheme, FakeRelationshipThemeName} from "./fakeRelationshipTheme";
import {FamilyTheme, FamilyThemeName} from "./familyTheme";
import {FishOutOfWaterTheme, FishOutOfWaterThemeName} from "./fishOutOfWaterTheme";
import {FriendsToLoversTheme, FriendsToLoversThemeName} from "./friendsToLoversTheme";
import {FutilityOfStruggleTheme, FutilityOfStruggleThemeName} from "./futilityOfStruggleTheme";
import {GreedTheme, GreedThemeName} from "./greedTheme";
import {GuiltTheme, GuiltThemeName} from "./guiltTheme";
import {HeroismTheme, HeroismThemeName} from "./heroismTheme";
import {InnocenceTheme, InnocenceThemeName} from "./innocenceTheme";
import {InvasionTheme, InvasionThemeName} from "./invasionTheme";
import {IsolationTheme, IsolationThemeName} from "./isolationTheme";
import {JusticeTheme, JusticeThemeName} from "./justiceTheme";
import {LossOfControlTheme, LossOfControlThemeName} from "./lossOfControl";
import {LoveTriangleTheme, LoveTriangleThemeName} from "./loveTriangleTheme";
import {LoyaltyTheme, LoyaltyThemeName} from "./loyaltyTheme";
import {MentorshipTheme, MentorshipThemeName} from "./mentorshipTheme";
import {MistakenIdentityTheme, MistakenIdentityThemeName} from "./mistakenIdentity";
import {NatureAsEnemyTheme, NatureAsEnemyThemeName} from "./natureAsEnemyTheme";
import {NormalityMadnessBoundaryTheme, NormalityMadnessBoundaryThemeName} from "./normalityMadnessBoundaryTheme";
import {NostalgiaTheme, NostalgiaThemeName} from "./nostalgiaTheme";
import {ObsessionTheme, ObsessionThemeName} from "./obsessionTheme";
import {PersonalGrowthTheme, PersonalGrowthThemeName} from "./personalGrowthTheme";
import {PoliticalPhilosophyTheme, PoliticalPhilosophyThemeName} from "./politicalPhilosophyTheme";
import {PowerTheme, PowerThemeName} from "./powerTheme";
import {PriceOfSuccessTheme, PriceOfSuccessThemeName} from "./priceOfSuccessTheme";
import {PsychosomaticDualityTheme, PsychosomaticDualityThemeName} from "./psychosomaticDualityTheme";
import {PublicPerceptionTheme, PublicPerceptionThemeName} from "./publicPerceptionTheme";
import {PursuitOfProsperityTheme, PursuitOfProsperityThemeName} from "./pursuitOfProsperityTheme";
import {RealityTheme, RealityThemeName} from "./realityTheme";
import {RecallTheme, RecallThemeName} from "./recallTheme";
import {RevengeTheme, RevengeThemeName} from "./revengeTheme";
import {SearchTheme, SearchThemeName} from "./searchTheme";
import {SecondChanceRomanceTheme, SecondChanceRomanceThemeName} from "./secondChanceRomanceTheme";
import {SoulmatesTheme, SoulmatesThemeName} from "./soulmateTheme";
import {StarCrossedLoversTheme, StarCrossedLoversThemeName} from "./starCrossedLoversTheme";
import {SurvivalTheme, SurvivalThemeName} from "./survivalTheme";
import {TabooLoveTheme, TabooLoveThemeName} from "./tabooTheme";
import {TeamworkTheme, TeamworkThemeName} from "./teamworkTheme";
import {TechnologicalInnovationTheme, TechnologicalInnovationThemeName} from "./technologicalInovationTheme";
import {TimeTheme, TimeThemeName} from "./timeTheme";
import {TraumaTheme, TraumaThemeName} from "./traumaTheme";
import {TrustInSocietyTheme, TrustInSocietyThemeName} from "./trustInSocietyTheme";
import {TrustTheme, TrustThemeName} from "./trustTheme";
import {UnknownTheme, UnknownThemeName} from "./unknownTheme";
import {WhatReallyMattersTheme, WhatReallyMattersThemeName} from "./whatReallyMattersTheme";
import {DivineTheme, DivineThemeName} from "./divineTheme";
import {TruthTheme, TruthThemeName} from "./truthTheme";

export let themeMap: { [p: string]: Theme };
themeMap = {
    [AfterlifeThemeName]: new AfterlifeTheme(),
    [AgonyThemeName]: new AgonyTheme(),
    [ApocalypseThemeName]: new ApocalypseTheme(),
    [AttractionThemeName]: new AttractionTheme(),
    [BalanceThemeName]: new BalanceTheme(),
    [BereavementThemeName]: new BereavementTheme(),
    [CatAndMouseThemeName]: new CatAndMouseTheme(),
    [ChangeThemeName]: new ChangeTheme(),
    [ComingOfAgeThemeName]: new ComingOfAgeTheme(),
    [CorruptionThemeName]: new CorruptionTheme(),
    [CultureClashesThemeName]: new CultureClashesTheme(),
    [DestinyThemeName]: new DestinyTheme(),
    [DivineThemeName]: new DivineTheme(),
    [DavidVsGoliathThemeName]: new DavidVsGoliathTheme(),
    [DeathThemeName]: new DeathTheme(),
    [DefinitionOfHumanityThemeName]: new DefinitionOfHumanityTheme(),
    [DisillusionmentThemeName]: new DisillusionmentTheme(),
    [FakeRelationshipThemeName]: new FakeRelationshipTheme(),
    [FamilyThemeName]: new FamilyTheme(),
    [FishOutOfWaterThemeName]: new FishOutOfWaterTheme(),
    [FriendsToLoversThemeName]: new FriendsToLoversTheme(),
    [FutilityOfStruggleThemeName]: new FutilityOfStruggleTheme(),
    [GoodVsEvilThemeName]: new GoodVsEvilTheme(),
    [GreedThemeName]: new GreedTheme(),
    [GuiltThemeName]: new GuiltTheme(),
    [HeroismThemeName]: new HeroismTheme(),
    [InnocenceThemeName]: new InnocenceTheme(),
    [InvasionThemeName]: new InvasionTheme(),
    [IsolationThemeName]: new IsolationTheme(),
    [JusticeThemeName]: new JusticeTheme(),
    [LossOfControlThemeName]: new LossOfControlTheme(),
    [LoveTriangleThemeName]: new LoveTriangleTheme(),
    [LoyaltyThemeName]: new LoyaltyTheme(),
    [MagicThemeName]: new MagicTheme(),
    [MentorshipThemeName]: new MentorshipTheme(),
    [MistakenIdentityThemeName]: new MistakenIdentityTheme(),
    [NatureAsEnemyThemeName]: new NatureAsEnemyTheme(),
    [NormalityMadnessBoundaryThemeName]: new NormalityMadnessBoundaryTheme(),
    [NostalgiaThemeName]: new NostalgiaTheme(),
    [ObsessionThemeName]: new ObsessionTheme(),
    [PersonalGrowthThemeName]: new PersonalGrowthTheme(),
    [PoliticalPhilosophyThemeName]: new PoliticalPhilosophyTheme(),
    [PowerThemeName]: new PowerTheme(),
    [PriceOfSuccessThemeName]: new PriceOfSuccessTheme(),
    [PsychosomaticDualityThemeName]: new PsychosomaticDualityTheme(),
    [PublicPerceptionThemeName]: new PublicPerceptionTheme(),
    [PursuitOfProsperityThemeName]: new PursuitOfProsperityTheme(),
    [RealityThemeName]: new RealityTheme(),
    [RecallThemeName]: new RecallTheme(),
    [RevengeThemeName]: new RevengeTheme(),
    [SearchThemeName]: new SearchTheme(),
    [SecondChanceRomanceThemeName]: new SecondChanceRomanceTheme(),
    [SoulmatesThemeName]: new SoulmatesTheme(),
    [StarCrossedLoversThemeName]: new StarCrossedLoversTheme(),
    [SurvivalThemeName]: new SurvivalTheme(),
    [TabooLoveThemeName]: new TabooLoveTheme(),
    [TeamworkThemeName]: new TeamworkTheme(),
    [TechnologicalInnovationThemeName]: new TechnologicalInnovationTheme(),
    [TimeThemeName]: new TimeTheme(),
    [TraumaThemeName]: new TraumaTheme(),
    [TrustInSocietyThemeName]: new TrustInSocietyTheme(),
    [TrustThemeName]: new TrustTheme(),
    [TruthThemeName]: new TruthTheme(),
    [UnknownThemeName]: new UnknownTheme(),
    [WhatReallyMattersThemeName]: new WhatReallyMattersTheme(),
};


// Function to get a theme by its name
export function getTheme(themeName: string): Theme | undefined {
    return themeMap[themeName.toLowerCase()];
}

// Function to get all theme names
export function getAllThemeNames(): string[] {
    return Object.keys(themeMap);
}

// Function to get all themes
export function getAllThemes(): Theme[] {
    return Object.values(themeMap);
}