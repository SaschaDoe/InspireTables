import {TechLevelSetting} from "../../../../entities/genre/techLevelSetting";
import {TechLevelList} from "../../../../entities/genre/techLevelList";
import {TechLevels, techLevelsWithProbabilities} from "../../other/techLevelTable";

export let crimeTechLevelList = new TechLevelList()
    .withSetting(new TechLevelSetting().with(TechLevels.Medieval).withPercentDelta(-12))
    .withSetting(new TechLevelSetting().with(TechLevels.Industrial).withPercentDelta(7))
    .withSetting(new TechLevelSetting().with(TechLevels.Modern).withPercentDelta(2))
    .withSetting(new TechLevelSetting().with(TechLevels.AtomicAge).withPercentDelta(2))
    .withSetting(new TechLevelSetting().with(TechLevels.InformationAge).withPercentDelta(5))
    .withSetting(new TechLevelSetting().with(TechLevels.Cyber).withPercentDelta(1))
    .withTechLevels(techLevelsWithProbabilities)
    .getTechLevelsWithProbabilities();