import { RollResult } from "../tables/rollResult";
import { Entry } from "../tables/core/entry/entry";
import { Table } from "../tables/table";
import type {Dice} from "../tables/dice";

interface AttributeDefinition {
    name: string;
    table: Table;
    weight: number;
}

function AlwaysZero<T>(): [number, T] {
    return [1, undefined as T];
}

export class Experiment<T> {
    private func: () => [number, T] = AlwaysZero;
    private numberOfTries = 1;
    private results: [number, T][] = [];
    private wasChanged = false;
    private dice: Dice;

    constructor(dice: Dice) {
        this.dice = dice;
    }

    withNumberOfTries(numberOfTries: number) {
        this.numberOfTries = numberOfTries;
        this.wasChanged = true;
        return this;
    }

    withFunc(func: () => [number, T]) {
        this.func = func;
        this.wasChanged = true;
        return this;
    }

    getResults(): [number, T][] {
        if (this.numberOfTries < 1) {
            throw new Error(`Number of tries is ${this.numberOfTries}.`);
        }
        if (this.wasChanged) {
            this.wasChanged = false;
            this.results = [];
            for (let i = 0; i < this.numberOfTries; i++) {
                this.results.push(this.func());
            }
        }
        return this.results;
    }

    getNearestResult(desiredIndex: number): [number, T] {
        let results = this.getResults();

        if (results.length === 0) {
            throw new Error("No results available.");
        }

        return results.reduce((nearest, current) => {
            const [nearestIndex] = nearest;
            const [currentIndex] = current;
            return Math.abs(currentIndex - desiredIndex) < Math.abs(nearestIndex - desiredIndex) ? current : nearest;
        });
    }

    generateMatchingInstance(
        attributeDefinitions: AttributeDefinition[],
        targetIndex: number,
        resultLength: number,
        createInstance: () => T
    ): [number, T] {
        this.withFunc(() => {
            let instance = createInstance();

            for (let definition of attributeDefinitions) {
                const value = definition.table.withDice(this.dice).roll().combinedString;
                this.setPropertySafely(instance, definition.name, value);
            }

            let calculatedIndex = this.calculateIndex(instance, attributeDefinitions, resultLength);

            return [calculatedIndex, instance];
        });

        return this.getNearestResult(targetIndex);
    }

    private calculateIndex(instance: T, definitions: AttributeDefinition[], resultLength: number): number {
        let totalIndex = 0;
        let totalWeight = 0;

        for (const definition of definitions) {
            const value = this.getPropertySafely(instance, definition.name);

            if (typeof value === 'string') {
                const index = definition.table.entries.findIndex(entry => entry.descriptionText === value);
                if (index !== -1) {
                    totalIndex += (index / (definition.table.entries.length - 1)) * definition.weight;
                    totalWeight += definition.weight;
                }
            }
        }

        if (totalWeight === 0) return 0;
        const averageIndex = totalIndex / totalWeight;
        return Math.min(Math.floor(averageIndex * (resultLength - 1)), resultLength - 1);
    }

    private setPropertySafely(obj: T, prop: string, value: any): void {
        try {
            (obj as any)[prop] = value;
        } catch (error) {
            console.warn(`Unable to set property ${prop} on instance. This may be expected for some types.`);
        }
    }

    private getPropertySafely(obj: T, prop: string): any {
        try {
            return (obj as any)[prop];
        } catch (error) {
            console.warn(`Unable to get property ${prop} from instance. This may be expected for some types.`);
            return undefined;
        }
    }
}