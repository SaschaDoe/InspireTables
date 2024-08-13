import {Table} from "../../table";

export let genders = ["male", "female"];

export class GenderTable extends Table{
    constructor(){
        super();
        this.title = "Gender"
        this.withEntriesFromList(genders);

    }
}