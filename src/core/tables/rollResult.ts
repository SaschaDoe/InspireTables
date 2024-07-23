import type {Entry} from "./entry";
import {Table} from "./table";

export class RollResult {
    entry: Entry;
    results: RollResult[] = [];

    get combinedString(): string {
        const parts: string[] = [];
        let resultIndex = 0;

        for (const part of this.entry.parts) {
            if (typeof part === 'string') {
                parts.push(part);
            } else {
                const nestedResult = this.results[resultIndex++];
                if (nestedResult) {
                    parts.push(nestedResult.combinedString);
                }
            }
        }

        return parts.join('').trim();
    }

    constructor(entry: Entry) {
        this.entry = entry;
    }
}