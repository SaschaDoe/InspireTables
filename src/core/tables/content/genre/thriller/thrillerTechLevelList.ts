import {TechLevelList} from "../../../../entities/genre/techLevelList";
import {TechLevelSetting} from "../../../../entities/genre/techLevelSetting";
import {TechLevels, techLevelsWithProbabilities} from "../../other/techLevelTable";

export let thrillerTechLevelList = new TechLevelList()
    .withSetting(new TechLevelSetting().with(TechLevels.Medieval).withPercentDelta(-4))
    .withSetting(new TechLevelSetting().with(TechLevels.Modern).withPercentDelta(0))
    .withSetting(new TechLevelSetting().with(TechLevels.AtomicAge).withPercentDelta(7))
    .withSetting(new TechLevelSetting().with(TechLevels.InformationAge).withPercentDelta(7))
    .withSetting(new TechLevelSetting().with(TechLevels.Cyber).withPercentDelta(5))
    .withTechLevels(techLevelsWithProbabilities)
    .getTechLevelsWithProbabilities();
