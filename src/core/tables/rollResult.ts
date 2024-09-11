import {Entry} from "./core/entry/entry";
import {ComparisonResult} from "./comparisonResult";
import type {CreationResult} from "../entities/creationResult";
import {IntervalResult} from "./intervalResult";
import type {Dice} from "./dice";
import type {RandomResult} from "./randomResult";

export class RollResult {
    entry: Entry = new Entry();
    results: RollResult[] = [];
    creationResults: CreationResult[] = [];
    rolledIndex = -1;
    comparison: ComparisonResult | null = null;
    randomResult: RandomResult | null = null;
    intervalResult: IntervalResult | null = null;

    withEntry(entry: Entry){
        this.entry = entry;
        return this;
    }

    public withRandomResult(randomResult: RandomResult): RollResult{
        this.randomResult = randomResult;
        return this;
    }

    public withComparisonResult(comparisonResult: ComparisonResult): RollResult {
        this.comparison = comparisonResult;
        return this;
    }

    public withIntervalResult(intervalResult: IntervalResult): RollResult {
        this.intervalResult = intervalResult;
        return this;
    }

    public withInterval(min: number, max: number, description: string, result: number): RollResult {
        let numberOfThemesResult = new IntervalResult()
            .withMin(min)
            .withMax(max)
            .withDescription(description)
            .withResult(result);
        return this.withIntervalResult(numberOfThemesResult);
    }

    addCreationResult(creationResults: CreationResult){
        this.creationResults.push(creationResults);
    }

    get combinedString(): string {
        if (this.comparison) {
            return this.comparison.toString();
        }

        if(this.randomResult){
            return this.randomResult.toString();
        }

        const parts: string[] = [];
        let resultIndex = 0;

        for (const part of this.entry.parts) {
            let input = part.input;
            if (typeof input === 'string') {
                parts.push(input);
            } else {
                const nestedResult = this.results[resultIndex++];
                if (nestedResult) {
                    parts.push(nestedResult.combinedString);
                }
            }
        }

        return parts.join('').trim();
    }

    withRolledIndex(result: number) {
        this.rolledIndex = result;
        return this;
    }
}