import {Table} from "../../table";

export const times = [
    "immediate",
    "seconds",
    "minutes",
    "hours",
    "days",
    "weeks",
    "months",
    "years",
    "centuries",
    "season",
    "generational",
    "infinite",
];

export const TimeTableName = "Time"

export class TimeTable extends Table{
    constructor() {
        super();
        this.title = "Time";
        this.addEntriesFromList(times);
    }
}