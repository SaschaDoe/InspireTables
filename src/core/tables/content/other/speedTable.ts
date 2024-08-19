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

export class SpeedTable extends Table{
    constructor() {
        super();
        this.title = "Speed";
        this.addEntriesFromList(speeds);
    }
}