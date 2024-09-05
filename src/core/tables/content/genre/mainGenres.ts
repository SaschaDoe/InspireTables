import { Table } from "../../table";

export const mainGenresWithProbabilities: [string, number][] = [
    ["fantasy", 20],
    ["action", 10],
    ["adventure", 10],
    ["sciFi", 10], //50%
    ["myth", 9],
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
    ["performance", 1]
];

export const MainGenreTableName = "Main Genre";

export class MainGenreTable extends Table {
    constructor() {
        super();
        this.title = MainGenreTableName;
        this.addProbabilityList(mainGenresWithProbabilities);
        this.subTables.push(new MainGenreBooksTable());
    }
}

export const mainGenresWithProbabilitiesForBooks: [string, number][] = [
    ["fantasy", 15],
    ["action", 8],
    ["adventure", 8],
    ["sciFi", 8],
    ["mystery", 9],
    ["love", 20],
    ["thriller", 7],
    ["crime", 6],
    ["drama", 5],
    ["horror", 4],
    ["comedy", 3],
    ["war", 2],
    ["western", 1],
    ["myth", 2],
    ["explorer", 1],
    ["performance", 1],
];

export const MainGenreBooksTableName = "Main Genre - Books";

export class MainGenreBooksTable extends Table {
    constructor() {
        super();
        this.title = MainGenreBooksTableName;
        this.addProbabilityList(mainGenresWithProbabilitiesForBooks);
        this.altTables.push(new MainGenreBooksAlt1Table());
    }
}

export const mainGenresWithProbabilitiesForBooksAlt1: [string, number][] = [
    ["fantasy", 10],
    ["action", 8],
    ["adventure", 8],
    ["sciFi", 8],
    ["mystery", 9],
    ["love", 25],
    ["thriller", 7],
    ["crime", 6],
    ["drama", 5],
    ["horror", 4],
    ["comedy", 3],
    ["war", 2],
    ["western", 1],
    ["myth", 2],
    ["explorer", 1],
    ["performance", 1],
];

export const MainGenreBooksAlt1TableName = "Main Genre - Books - Alt - V1";

export class MainGenreBooksAlt1Table extends Table {
    constructor() {
        super();
        this.title = MainGenreBooksAlt1TableName;
        this.addProbabilityList(mainGenresWithProbabilitiesForBooksAlt1);
    }
}