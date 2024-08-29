import {Table} from "../../table";

export const geographicSpreadLevels = [
    "isolated to a single community",
    "limited to a specific region",
    "prevalent in multiple regions of a country",
    "widespread across a continent",
    "found on multiple continents",
    "global presence with varying intensity",
    "ubiquitous worldwide"
];

export const GeographicSpreadTableName = "Geographic Spread";

export class GeographicSpreadTable extends Table {
    constructor() {
        super();
        this.title = GeographicSpreadTableName;
        this.addEntriesFromList(geographicSpreadLevels);
    }
}