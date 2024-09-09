import {TechLevelList} from "../../../../entities/genre/techLevelList";
import {TechLevelSetting} from "../../../../entities/genre/techLevelSetting";
import {TechLevels, techLevelsWithProbabilities} from "../../other/techLevelTable";

export let westernTechLevelList = new TechLevelList()
    .withSetting(new TechLevelSetting().with(TechLevels.Medieval).withPercentDelta(-10))
    .withSetting(new TechLevelSetting().with(TechLevels.Industrial).withPercentDelta(20))
    .withSetting(new TechLevelSetting().with(TechLevels.Modern).withPercentDelta(3))
    .withSetting(new TechLevelSetting().with(TechLevels.InformationAge).withPercentDelta(-2))
    .withSetting(new TechLevelSetting().with(TechLevels.Cyber).withPercentDelta(-2))
    .withTechLevels(techLevelsWithProbabilities)
    .getTechLevelsWithProbabilities();
