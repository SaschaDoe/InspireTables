import {Entry} from "./core/entry/entry";
import {ComparisonResult} from "./comparisonResult";
import type {CreationResult} from "../entities/creationResult";

export class RollResult {
    entry: Entry = new Entry();
    results: RollResult[] = [];
    creationResults: CreationResult[] = [];
    rolledIndex = -1;
    comparison: ComparisonResult | null = null;

    withEntry(entry: Entry){
        this.entry = entry;
        return this;
    }

    public withComparisonResult(comparisonResult: ComparisonResult): RollResult {
        this.comparison = comparisonResult;
        return this;
    }

    addCreationResult(creationResults: CreationResult){
        this.creationResults.push(creationResults);
    }

    get combinedString(): string {
        if (this.comparison) {
            return this.comparison.toString();
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