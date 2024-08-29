import {Table} from "../tables/table";

export class AttributeDefinition{
    name = "";
    tableName = "";
    current = "";
    weight = 1;
    table: Table = new Table();

    withName(name: string){
        this.name = name;
        return this;
    }

    withTable(tableName: string){
        this.tableName = tableName;
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
            .withTable(definition.tableName)
            .withWeight(definition.weight)
            .withCurrentValue(definition.current);
    }
}