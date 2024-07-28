import {Table} from "../table";

export const times = ["immediately", "short", "mid", "long", "infinite"];

export class TimeTable extends Table{
    constructor() {
        super();
        this.title = "Time";
        this.withEntriesFromList(times);
    }
}