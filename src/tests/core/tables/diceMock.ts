import {Dice} from "../../../core/tables/dice";

export class DiceMock extends Dice{
    private results: number[] = [];

    withResults(results: number[]){
        this.results = results;
        return this;
    }

    override rollInterval(min: number, max: number): number {
        if (this.results.length === 0) {
            throw new Error("No more preset results available");
        }
        const result = this.results.pop();
        if (result === undefined) {
            throw new Error("Unexpected undefined result");
        }
        return result;
    }

    override rollIntervalFloat(min: number, max: number): number {
        if (this.results.length === 0) {
            throw new Error("No more preset results available");
        }
        const result = this.results.pop();
        if (result === undefined) {
            throw new Error("Unexpected undefined result");
        }
        return result;
    }

}