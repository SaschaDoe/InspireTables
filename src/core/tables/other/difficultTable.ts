import { Table } from "../table";

export const difficultyLevels = [
    "trivially",
    "straightforward",
    "challenging",
    "moderately difficult",
    "complex",
    "challenging",
    "nearly impossible",
];

export class DifficultyLevelTable extends Table {
    constructor() {
        super();
        this.title = "Difficulty Level";
        this.withEntriesFromList(difficultyLevels);
    }
}