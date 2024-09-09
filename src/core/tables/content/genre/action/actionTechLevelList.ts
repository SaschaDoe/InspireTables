import {TechLevelList} from "../../../../entities/genre/techLevelList";
import {TechLevelSetting} from "../../../../entities/genre/techLevelSetting";
import {techLevelsWithProbabilities} from "../../other/techLevelTable";

export let actionTechLevelList = new TechLevelList()
    .withSetting(new TechLevelSetting()
        .withBase(8)
        .withPercentDelta(10))
    .withSetting(new TechLevelSetting()
        .withBase(9)
        .withPercentDelta(10))
    .withSetting(new TechLevelSetting()
        .withBase(10)
        .withPercentDelta(10))
    .withTechLevels(techLevelsWithProbabilities)
    .getTechLevelsWithProbabilities();