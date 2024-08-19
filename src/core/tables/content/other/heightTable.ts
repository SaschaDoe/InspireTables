import {Table} from "../../table";

export const heights = [
    "tiny",
    "small",
    "low",
    "mid",
    "tall",
    "high",
    "colossal"
];

export class HeightTable extends Table{
    constructor() {
        super();
        this.title = "Height"
        this.addEntriesFromList(heights);
    }
}