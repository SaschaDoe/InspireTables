import {TechLevelList} from "../../../../entities/genre/techLevelList";
import {TechLevelSetting} from "../../../../entities/genre/techLevelSetting";
import {TechLevels, techLevelsWithProbabilities} from "../../other/techLevelTable";

export let memoirTechLevelList = new TechLevelList()
    .withSetting(new TechLevelSetting().with(TechLevels.Classical).withPercentDelta(0))
    .withSetting(new TechLevelSetting().with(TechLevels.Medieval).withPercentDelta(-10))
    .withSetting(new TechLevelSetting().with(TechLevels.Renaissance).withPercentDelta(0))
    .withSetting(new TechLevelSetting().with(TechLevels.EarlyModern).withPercentDelta(1))
    .withSetting(new TechLevelSetting().with(TechLevels.Industrial).withPercentDelta(2))
    .withSetting(new TechLevelSetting().with(TechLevels.Modern).withPercentDelta(1))
    .withSetting(new TechLevelSetting().with(TechLevels.AtomicAge).withPercentDelta(1))
    .withSetting(new TechLevelSetting().with(TechLevels.InformationAge).withPercentDelta(5))
    .withSetting(new TechLevelSetting().with(TechLevels.Cyber).withPercentDelta(1))
    .withTechLevels(techLevelsWithProbabilities)
    .getTechLevelsWithProbabilities();
