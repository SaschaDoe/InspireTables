import {TechLevelList} from "../../../../entities/genre/techLevelList";
import {TechLevelSetting} from "../../../../entities/genre/techLevelSetting";
import {TechLevels, techLevelsWithProbabilities} from "../../other/techLevelTable";

export let performanceTechLevelList = new TechLevelList()
    .withSetting(new TechLevelSetting().with(TechLevels.Modern).withPercentDelta(5))
    .withSetting(new TechLevelSetting().with(TechLevels.AtomicAge).withPercentDelta(5))
    .withSetting(new TechLevelSetting().with(TechLevels.InformationAge).withPercentDelta(7))
    .withTechLevels(techLevelsWithProbabilities)
    .getTechLevelsWithProbabilities();
