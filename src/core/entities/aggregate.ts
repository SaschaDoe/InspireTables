import { Table } from "../tables/table";
import { Entry } from "../tables/entry";
import type {AttributeDefinition} from "./attributeDefinition"; // Assuming Entry is defined in this file

export class Aggregate<T> {
    private func: (input: T, definitions: AttributeDefinition[]) => number = this.defaultFunc;
    private input: T = {} as T;
    private resultLength: number = 0;
    private definitions: AttributeDefinition[] = [];

    withFunc(func: (input: T, definitions: AttributeDefinition[]) => number) {
        this.func = func;
        return this;
    }

    withResultLength(resultLength: number) {
        this.resultLength = resultLength;
        return this;
    }

    withDefinitions(definitions: AttributeDefinition[]) {
        this.definitions = definitions;
        return this;
    }

    with(input: T) {
        this.input = input;
        return this;
    }

    calc() {
        const rawResult = this.func(this.input, this.definitions);
        return Math.min(Math.floor(rawResult * (this.resultLength - 1)), this.resultLength - 1);
    }

    private defaultFunc(input: T, definitions: AttributeDefinition[]): number {
        let totalIndex = 0;
        let totalWeight = 0;

        for (const definition of definitions) {
            const attributeName = definition.name as keyof T;
            const value = input[attributeName];

            if (typeof value === 'string') {
                const index = definition.table.entries.findIndex(entry => entry.name === value);
                if (index !== -1) {
                    totalIndex += (index / (definition.table.entries.length - 1)) * definition.weight;
                    totalWeight += definition.weight;
                }
            }
        }

        if (totalWeight === 0) return 0;
        return totalIndex / totalWeight;
    }
}
