import type { RollResult } from "../tables/rollResult";
import type { Entity } from "./entity";

export type ResultItem =
    | { type: 'roll', result: RollResult }
    | { type: 'creation', result: CreationResult };

export class CreationResult {
    private results: ResultItem[] = [];
    private creation: Entity| null = null;

    addRollResult(rollResult: RollResult) {
        this.results.push({ type: 'roll', result: rollResult });
    }

    //Adds creation result of other creation that came along the way
    addCreationResult(creationResult: CreationResult) {
        this.results.push({ type: 'creation', result: creationResult });
    }

    getOrderedResults(): ResultItem[] {
        return this.results;
    }

    getRollResults(): RollResult[] {
        return this.results
            .filter((item): item is { type: 'roll', result: RollResult } => item.type === 'roll')
            .map(item => item.result);
    }

    getCreationResults(): CreationResult[] {
        return this.results
            .filter((item): item is { type: 'creation', result: CreationResult } => item.type === 'creation')
            .map(item => item.result);
    }

    addCreation(entity: Entity) {
        this.creation = entity;
    }

    getCreation<T extends Entity>(): T {
        if(this.creation){
            return this.creation as T;
        }

        throw new Error(`This creation result created nothing`);
    }

}