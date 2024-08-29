import {Table} from "../../table";

export let genders = ["male", "female"];

export const genderTableName = "Gender";
export class GenderTable extends Table{
    constructor(){
        super();
        this.title = genderTableName;
        this.addEntriesFromList(genders);
    }
}