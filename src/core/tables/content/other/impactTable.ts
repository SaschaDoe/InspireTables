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
export const ImpactTableName = "Impact"
export class ImpactTable extends Table{
    constructor(){
        super();
        this.title = ImpactTableName;
        this.addEntriesFromList(impacts);

    }
}