import {TechLevelList} from "../../../../entities/genre/techLevelList";
import {TechLevelSetting} from "../../../../entities/genre/techLevelSetting";
import {TechLevels, techLevelsWithProbabilities} from "../../other/techLevelTable";

export let sciFiTechLevelList = new TechLevelList()
    .withSetting(new TechLevelSetting().with(TechLevels.Medieval).withPercentDelta(-12))
    .withSetting(new TechLevelSetting().with(TechLevels.Modern).withPercentDelta(-10))
    .withSetting(new TechLevelSetting().with(TechLevels.Cyber).withPercentDelta(6))
    .withSetting(new TechLevelSetting().with(TechLevels.SpaceTravel).withPercentDelta(8))
    .withSetting(new TechLevelSetting().with(TechLevels.Interstellar).withPercentDelta(14))
    .withSetting(new TechLevelSetting().with(TechLevels.Intergalactic).withPercentDelta(8))
    .withTechLevels(techLevelsWithProbabilities)
    .getTechLevelsWithProbabilities();
