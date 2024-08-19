import {Table} from "../../table";

export const intensityLevels = [
    "extreme",
    "very high",
    "high",
    "moderate",
    "low",
    "very low",
    "none"
];

export class IntensityTable extends Table{
    constructor() {
        super();
        this.title = "Intensity";
        this.addEntriesFromList(intensityLevels);
    }
}