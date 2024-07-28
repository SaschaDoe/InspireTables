import {Table} from "../table";

export const impact = [
    "no",
    "minimal",
    "mild",
    "moderate",
    "significant",
    "severe",
    "extreme",
];

export class ImpactTable extends Table{
    constructor(){
        super();
        this.title = "Impact"
        this.withEntriesFromList(impact);

    }
}