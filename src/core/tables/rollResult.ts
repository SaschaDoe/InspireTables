import type {Entry} from "./core/entry/entry";
import type {CreatedEntities} from "../entities/creator";

export class RollResult {
    entry: Entry;
    results: RollResult[] = [];
    entities: CreatedEntities = {};
    rolledIndex = -1;

    constructor(entry: Entry) {
        this.entry = entry;
    }

    addEntities(entities: CreatedEntities) {
        for (const [key, value] of Object.entries(entities)) {
            if (!this.entities[key]) {
                this.entities[key] = [];
            }
            this.entities[key].push(...value);
        }
    }

    get combinedString(): string {
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