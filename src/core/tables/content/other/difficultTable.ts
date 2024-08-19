import { Table } from "../../table";

export const difficultyLevels = [
    "trivial",
    "easy",
    "simple",
    "moderate",
    "complex",
    "challenging",
    "impossible",
];

export class DifficultyLevelTable extends Table {
    constructor() {
        super();
        this.title = "Difficulty Level";
        this.addEntriesFromList(difficultyLevels);
    }
}