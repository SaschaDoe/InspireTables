import {Table} from "../../table";

const sportSubGenres = [
    "arena",
    "underdog",
    "comeback",
];

export const PerformanceSubGenreName = "Sport sub genres";

export class PerformanceSubGenreTable extends Table {
    constructor() {
        super();
        this.title = PerformanceSubGenreName;
        this.addEntriesFromList(sportSubGenres);
    }
}