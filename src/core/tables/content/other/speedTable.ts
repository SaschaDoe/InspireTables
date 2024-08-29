import {Table} from "../../table";

export const speeds = [
    "immobile",
    "very slow",
    "slow",
    "moderate",
    "fast",
    "very fast",
    "near impossible",
];

export const SpeedTableName = "Speed";

export class SpeedTable extends Table{
    constructor() {
        super();
        this.title = SpeedTableName;
        this.addEntriesFromList(speeds);
    }
}