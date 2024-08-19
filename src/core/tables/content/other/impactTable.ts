import {Table} from "../../table";

export const impacts = [
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
        this.addEntriesFromList(impacts);

    }
}