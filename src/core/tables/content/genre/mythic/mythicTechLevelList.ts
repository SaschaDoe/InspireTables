import {TechLevelList} from "../../../../entities/genre/techLevelList";
import {TechLevelSetting} from "../../../../entities/genre/techLevelSetting";
import {TechLevels, techLevelsWithProbabilities} from "../../other/techLevelTable";

export let mythicTechLevelList = new TechLevelList()
    .withSetting(new TechLevelSetting().with(TechLevels.StoneAge).withPercentDelta(5))
    .withSetting(new TechLevelSetting().with(TechLevels.BronzeAge).withPercentDelta(5))
    .withSetting(new TechLevelSetting().with(TechLevels.IronAge).withPercentDelta(5))
    .withSetting(new TechLevelSetting().with(TechLevels.Classical).withPercentDelta(5))
    .withSetting(new TechLevelSetting().with(TechLevels.Medieval).withPercentDelta(-7))
    .withSetting(new TechLevelSetting().with(TechLevels.Renaissance).withPercentDelta(0))
    .withSetting(new TechLevelSetting().with(TechLevels.EarlyModern).withPercentDelta(0))
    .withSetting(new TechLevelSetting().with(TechLevels.Interstellar).withPercentDelta(5))
    .withSetting(new TechLevelSetting().with(TechLevels.Intergalactic).withPercentDelta(7))
    .withTechLevels(techLevelsWithProbabilities)
    .getTechLevelsWithProbabilities();
