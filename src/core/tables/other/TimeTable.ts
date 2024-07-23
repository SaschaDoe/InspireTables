import {Table} from "../table";

const times = ["short", "mid", "long", "infinite"];

export class TimeTable extends Table{
    constructor() {
        super();
        this.title = "Time";
        this.withEntriesFromList(times);
    }
}