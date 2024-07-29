import {Table} from "../table";

export const cureDuration = [
    "instant cure upon administration",
    "requires a full moon cycle to take effect",
    "gradual improvement over several months",
    "a year-long treatment regimen",
    "lifelong daily treatment",
    "short intense treatment followed by yearly boosters",
    "varies greatly from patient to patient",
    "multiple short treatments spread over time",
    "continuous treatment until symptoms disappear",
    "single dose, but effects only last for a limited time",
    "treatment length depends on severity and duration of illness",
    "requires treatment at specific intervals forever",
    "short treatment, but recovery period is very long",
    "quick cure, but requires lengthy preparation beforehand"
];

export class CureDurationTable extends Table {
    constructor() {
        super();
        this.title = "Cure Duration";
        this.withEntriesFromList(cureDuration);
    }
}