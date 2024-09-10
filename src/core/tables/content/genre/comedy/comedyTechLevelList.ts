import {TechLevelList} from "../../../../entities/genre/techLevelList";
import {TechLevelSetting} from "../../../../entities/genre/techLevelSetting";
import {TechLevels, techLevelsWithProbabilities} from "../../other/techLevelTable";

export let comedyTechLevelList = new TechLevelList()
    .withSetting(new TechLevelSetting().with(TechLevels.Medieval).withPercentDelta(-10))
    .withSetting(new TechLevelSetting().with(TechLevels.Modern).withPercentDelta(1))
    .withSetting(new TechLevelSetting().with(TechLevels.AtomicAge).withPercentDelta(3))
    .withSetting(new TechLevelSetting().with(TechLevels.InformationAge).withPercentDelta(3))
    .withTechLevels(techLevelsWithProbabilities)
    .getTechLevelsWithProbabilities();