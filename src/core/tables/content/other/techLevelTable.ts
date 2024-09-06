import { Table } from "../../table";

export const techLevelsWithProbabilities: [string, number][] = [
    ["stone age", 3],
    ["bronze age", 4],
    ["iron age", 6],
    ["classical", 8],
    ["medieval", 16],
    ["renaissance", 7],
    ["early modern", 9],
    ["industrial", 10],
    ["modern", 15],
    ["atomic age", 7],
    ["information age", 14],
    ["cyber", 11],
    ["space travel", 5],
    ["interstellar", 2],
    ["intergalactic", 1],
];

export const TechLevelTableName = "Tech Level"

export class TechLevelTable extends Table {
    constructor() {
        super();
        this.title = TechLevelTableName;
        this.addProbabilityList(techLevelsWithProbabilities);
    }
}
