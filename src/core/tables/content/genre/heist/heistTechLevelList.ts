import {TechLevelList} from "../../../../entities/genre/techLevelList";
import {TechLevelSetting} from "../../../../entities/genre/techLevelSetting";
import {TechLevels, techLevelsWithProbabilities} from "../../other/techLevelTable";

export let heistTechLevelList = new TechLevelList()
    .withSetting(new TechLevelSetting().with(TechLevels.Industrial).withPercentDelta(2))
    .withSetting(new TechLevelSetting().with(TechLevels.Modern).withPercentDelta(3))
    .withSetting(new TechLevelSetting().with(TechLevels.AtomicAge).withPercentDelta(3))
    .withSetting(new TechLevelSetting().with(TechLevels.InformationAge).withPercentDelta(7))
    .withSetting(new TechLevelSetting().with(TechLevels.Cyber).withPercentDelta(5))
    .withTechLevels(techLevelsWithProbabilities)
    .getTechLevelsWithProbabilities();
