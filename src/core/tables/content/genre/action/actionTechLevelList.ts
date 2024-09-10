import {TechLevelList} from "../../../../entities/genre/techLevelList";
import {TechLevelSetting} from "../../../../entities/genre/techLevelSetting";
import {TechLevels, techLevelsWithProbabilities} from "../../other/techLevelTable";

export let actionTechLevelList = new TechLevelList()
    .withSetting(new TechLevelSetting().with(TechLevels.Medieval).withPercentDelta(-10))
    .withSetting(new TechLevelSetting().with(TechLevels.Modern).withPercentDelta(2))
    .withSetting(new TechLevelSetting().with(TechLevels.AtomicAge).withPercentDelta(6))
    .withSetting(new TechLevelSetting().with(TechLevels.InformationAge).withPercentDelta(2))
    .withTechLevels(techLevelsWithProbabilities)
    .getTechLevelsWithProbabilities();