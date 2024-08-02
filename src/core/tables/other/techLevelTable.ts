import {Table} from "../table";

export const techLevels: string[] = [
    "stone age",
    "copper age",
    "bronze age",
    "iron age",
    "classical antiquity",
    "medieval",
    "renaissance",
    "early modern",
    "industrial",
    "modern",
    "atomic age",
    "information age",
    "cyber",
    "space travel",
    "interstellar",
    "intergalactic"
];

export class TechLevelTable extends Table{
    constructor() {
        super();
        this.title = "Tech Level";
        this.withEntriesFromList(techLevels);
    }
}