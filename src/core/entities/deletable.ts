import {Entity} from "./entity";

export interface Deletable {
    prepareForDeletion(): Promise<(Entity & Deletable)[]>;
    readonly entityType: string;
}

export abstract class AutoDeletableEntity extends Entity implements Deletable {
    get entityType(): string {
        return this.constructor.name;
    }

    async prepareForDeletion(): Promise<(Entity & Deletable)[]> {
        const entitiesToDelete: (Entity & Deletable)[] = [];

        for (const [key, value] of Object.entries(this)) {
            if (value instanceof AutoDeletableEntity) {
                entitiesToDelete.push(value);
                entitiesToDelete.push(...await value.prepareForDeletion());
            } else if (Array.isArray(value)) {
                for (const item of value) {
                    if (item instanceof AutoDeletableEntity) {
                        entitiesToDelete.push(item);
                        entitiesToDelete.push(...await item.prepareForDeletion());
                    }
                }
            }
        }

        return entitiesToDelete;
    }
}
