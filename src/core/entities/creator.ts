import type {Dice} from "../tables/dice";
import type {CreatedEntities} from "../tables/core/entry/functionType";

export interface Creator {
    /**
     * The dice used for random generation, if needed.
     */
    dice: Dice;

    /**
     * Create new entities without persisting them.
     */
    create(): CreatedEntities;

    /**
     * Persist the entities.
     * @param entities The entities to persist.
     */
    persist(entities: CreatedEntities): Promise<void>;

    /**
     * Get the entity type this creator is responsible for.
     */
    getEntityType(): string;
}