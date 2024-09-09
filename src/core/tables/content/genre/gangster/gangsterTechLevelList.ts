import { TechLevelSetting } from "../../../../entities/genre/techLevelSetting";
import { TechLevelList } from "../../../../entities/genre/techLevelList";
import { TechLevels, techLevelsWithProbabilities } from "../../other/techLevelTable";

export let gangsterTechLevelList = new TechLevelList()
    .withSetting(new TechLevelSetting().with(TechLevels.Renaissance).withPercentDelta(-3))
    .withSetting(new TechLevelSetting().with(TechLevels.EarlyModern).withPercentDelta(2))
    .withSetting(new TechLevelSetting().with(TechLevels.Industrial).withPercentDelta(7))
    .withSetting(new TechLevelSetting().with(TechLevels.Modern).withPercentDelta(7))
    .withSetting(new TechLevelSetting().with(TechLevels.AtomicAge).withPercentDelta(3))
    .withSetting(new TechLevelSetting().with(TechLevels.InformationAge).withPercentDelta(3))
    .withSetting(new TechLevelSetting().with(TechLevels.Cyber).withPercentDelta(1))
    .withSetting(new TechLevelSetting().with(TechLevels.SpaceTravel).withPercentDelta(-2))
    .withTechLevels(techLevelsWithProbabilities)
    .getTechLevelsWithProbabilities();
