import {TechLevelList} from "../../../../entities/genre/techLevelList";
import {TechLevelSetting} from "../../../../entities/genre/techLevelSetting";
import {TechLevels, techLevelsWithProbabilities} from "../../other/techLevelTable";

export let warTechLevelList = new TechLevelList()
    .withSetting(new TechLevelSetting().with(TechLevels.EarlyModern).withPercentDelta(5))
    .withSetting(new TechLevelSetting().with(TechLevels.Industrial).withPercentDelta(2))
    .withSetting(new TechLevelSetting().with(TechLevels.Modern).withPercentDelta(5))
    .withSetting(new TechLevelSetting().with(TechLevels.AtomicAge).withPercentDelta(2))
    .withTechLevels(techLevelsWithProbabilities)
    .getTechLevelsWithProbabilities();
