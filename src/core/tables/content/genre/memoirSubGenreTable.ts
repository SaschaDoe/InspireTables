import {Table} from "../../table";

export const memoirSubGenres = [
    "family",
    "travel",
    "survival",
    "coming of age",
];

export const MemoirSubGenreTableName = "Memoir sub genres";

export class MemoirSubGenreTable extends Table{
    constructor() {
        super();
        this.title = MemoirSubGenreTableName;
        this.addEntriesFromList(memoirSubGenres);
    }
}