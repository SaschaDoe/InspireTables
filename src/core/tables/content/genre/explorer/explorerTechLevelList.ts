import {TechLevelSetting} from "../../../../entities/genre/techLevelSetting";
import {TechLevelList} from "../../../../entities/genre/techLevelList";
import {TechLevels, techLevelsWithProbabilities} from "../../other/techLevelTable";

export let explorerTechLevelList = new TechLevelList()
    .withSetting(new TechLevelSetting().with(TechLevels.Classical).withPercentDelta(2))
    .withSetting(new TechLevelSetting().with(TechLevels.Renaissance).withPercentDelta(4))
    .withSetting(new TechLevelSetting().with(TechLevels.EarlyModern).withPercentDelta(8))
    .withSetting(new TechLevelSetting().with(TechLevels.Industrial).withPercentDelta(2))
    .withSetting(new TechLevelSetting().with(TechLevels.Modern).withPercentDelta(-12))
    .withSetting(new TechLevelSetting().with(TechLevels.AtomicAge).withPercentDelta(-5))
    .withSetting(new TechLevelSetting().with(TechLevels.InformationAge).withPercentDelta(-11))
    .withSetting(new TechLevelSetting().with(TechLevels.Cyber).withPercentDelta(-8))
    .withSetting(new TechLevelSetting().with(TechLevels.SpaceTravel).withPercentDelta(-3))
    .withSetting(new TechLevelSetting().with(TechLevels.Interstellar).withPercentDelta(3))
    .withSetting(new TechLevelSetting().with(TechLevels.Intergalactic).withPercentDelta(3))
    .withTechLevels(techLevelsWithProbabilities)
    .getTechLevelsWithProbabilities();
