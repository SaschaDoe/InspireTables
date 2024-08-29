import { Table } from "../../table";

export const mainGenresWithProbabilities: [string, number][] = [
    ["fantasy", 20],
    ["action", 10],
    ["adventure", 10],
    ["sciFi", 10], //50%
    ["myth", 10],
    ["war", 8],
    ["horror", 7],
    ["crime", 7],
    ["mystery", 5],
    ["explorer", 4],
    ["western", 3],
    ["drama", 2],
    ["thriller", 2],
    ["love", 1],
    ["comedy", 1],
];

export const MainGenreTableName = "Main Genre";

export class MainGenreTable extends Table {
    constructor() {
        super();
        this.title = MainGenreTableName;
        this.addProbabilityList(mainGenresWithProbabilities);
    }
}