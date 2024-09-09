import {TechLevelList} from "../../../../entities/genre/techLevelList";
import {TechLevelSetting} from "../../../../entities/genre/techLevelSetting";
import {techLevelsWithProbabilities} from "../../other/techLevelTable";

export let comedyTechLevelList = new TechLevelList()
    .withSetting(new TechLevelSetting()
        .withBase(9)
        .withPercentDelta(5))
    .withSetting(new TechLevelSetting()
        .withBase(10)
        .withPercentDelta(10))
    .withTechLevels(techLevelsWithProbabilities)
    .getTechLevelsWithProbabilities();