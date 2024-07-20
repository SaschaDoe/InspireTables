import type {Table} from "./table";

export class Category{
    name = "";
    tables:Table[] = [];
    isOpen = false;
    withTable(table: Table){
        this.tables.push(table);
        return this;
    }
    withName(name: string){
        this.name = name;
        return this;
    }

}