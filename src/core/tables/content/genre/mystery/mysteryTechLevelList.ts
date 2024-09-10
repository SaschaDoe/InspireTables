import {TechLevelList} from "../../../../entities/genre/techLevelList";
import {TechLevelSetting} from "../../../../entities/genre/techLevelSetting";
import {TechLevels, techLevelsWithProbabilities} from "../../other/techLevelTable";

export let mysteryTechLevelList = new TechLevelList()
    .withSetting(new TechLevelSetting().with(TechLevels.Medieval).withPercentDelta(-12))
    .withSetting(new TechLevelSetting().with(TechLevels.Industrial).withPercentDelta(1))
    .withSetting(new TechLevelSetting().with(TechLevels.Modern).withPercentDelta(5))
    .withSetting(new TechLevelSetting().with(TechLevels.AtomicAge).withPercentDelta(5))
    .withSetting(new TechLevelSetting().with(TechLevels.InformationAge).withPercentDelta(5))
    .withSetting(new TechLevelSetting().with(TechLevels.Cyber).withPercentDelta(1))
    .withTechLevels(techLevelsWithProbabilities)
    .getTechLevelsWithProbabilities();
