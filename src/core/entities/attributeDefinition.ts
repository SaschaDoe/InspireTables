import {Table} from "../tables/table";

export class AttributeDefinition{
    name = "";
    table = new Table();
    current = "";
    weight = 1;

    withName(name: string){
        this.name = name;
        return this;
    }

    withTable(table: Table){
        this.table = table;
        return this;
    }

    withWeight(weight: number){
        this.weight = weight;
        return this;
    }

    withCurrentValue(current: string){
        this.current = current;
        return this;
    }

    static fromDefinition(definition: AttributeDefinition){
        return new AttributeDefinition()
            .withName(definition.name)
            .withTable(definition.table)
            .withWeight(definition.weight)
            .withCurrentValue(definition.current);
    }
}