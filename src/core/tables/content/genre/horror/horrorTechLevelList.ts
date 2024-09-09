import {TechLevelList} from "../../../../entities/genre/techLevelList";
import {TechLevelSetting} from "../../../../entities/genre/techLevelSetting";
import {TechLevels, techLevelsWithProbabilities} from "../../other/techLevelTable";

export let horrorTechLevelList = new TechLevelList()
    .withSetting(new TechLevelSetting().with(TechLevels.Medieval).withPercentDelta(-7))
    .withSetting(new TechLevelSetting().with(TechLevels.Industrial).withPercentDelta(2))
    .withSetting(new TechLevelSetting().with(TechLevels.Modern).withPercentDelta(2))
    .withSetting(new TechLevelSetting().with(TechLevels.AtomicAge).withPercentDelta(2))
    .withSetting(new TechLevelSetting().with(TechLevels.InformationAge).withPercentDelta(5))
    .withSetting(new TechLevelSetting().with(TechLevels.Cyber).withPercentDelta(1))
    .withSetting(new TechLevelSetting().with(TechLevels.SpaceTravel).withPercentDelta(1))
    .withSetting(new TechLevelSetting().with(TechLevels.Interstellar).withPercentDelta(2))
    .withTechLevels(techLevelsWithProbabilities)
    .getTechLevelsWithProbabilities();
