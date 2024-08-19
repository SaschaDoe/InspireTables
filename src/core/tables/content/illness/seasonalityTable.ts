import {Table} from "../../table";

export const seasonalityPatterns = [
    "no discernible seasonal pattern",
    "mild increase during specific months",
    "strong peak in one season",
    "bi-annual peaks (e.g., spring and fall)",
    "active in all but one season",
    "inversely related to temperature",
    "correlated with specific weather events (e.g., heavy rainfall)"
];

export class SeasonalityTable extends Table {
    constructor() {
        super();
        this.title = "Seasonality";
        this.addEntriesFromList(seasonalityPatterns);
    }
}