import {type CreatedEntities, FunctionType, Nothing} from "./functionType";
import type {FunctionFactory} from "./functionFactory";

export class FunctionEntry {
    costumeFunction: (input: any) => CreatedEntities = Nothing;
    description = "";
    functionType: FunctionType = FunctionType.Nothing;

    constructor(private functionFactory: FunctionFactory) {}

    withFunction(type: FunctionType) {
        this.costumeFunction = this.functionFactory.getFunction(type);
        this.functionType = type;
        return this;
    }

    toJSON() {
        return {
            functionType: this.functionType,
            description: this.description
        };
    }

    static fromJSON(json: any, functionFactory: FunctionFactory): FunctionEntry {
        const functionEntry = new FunctionEntry(functionFactory);
        functionEntry.description = json.description;
        functionEntry.withFunction(json.functionType);
        return functionEntry;
    }
}