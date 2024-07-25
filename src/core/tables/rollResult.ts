import type {Entry} from "./entry";
import {Table} from "./table";
import type {Entity} from "../entities/entity";

export class RollResult {
    entry: Entry;
    results: RollResult[] = [];
    entities: Entity[] = [];

    constructor(entry: Entry) {
        this.entry = entry;
    }

    addEntity(entity: any) {
        if (Array.isArray(entity)) {
            this.entities.push(...entity.filter(e => e !== null && e !== undefined));
        } else if (entity !== null && entity !== undefined) {
            this.entities.push(entity);
        }
    }

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

}