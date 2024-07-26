import { EntityStorageManager } from "./entityStorageManager";
import type {Entity} from "../entity";

//see stores for usage
export class EntityStoreRegistry {
    private static instance: EntityStoreRegistry;
    private stores: Map<string, EntityStorageManager<any>> = new Map();

    private constructor() {}

    static getInstance(): EntityStoreRegistry {
        if (!EntityStoreRegistry.instance) {
            EntityStoreRegistry.instance = new EntityStoreRegistry();
        }
        return EntityStoreRegistry.instance;
    }

    registerStore(entityType: string, store: EntityStorageManager<any>): void {
        this.stores.set(entityType, store);
    }

    getStore(entityType: string): EntityStorageManager<any> | undefined {
        return this.stores.get(entityType);
    }

    getAllStoreTypes(): string[] {
        return Array.from(this.stores.keys());
    }

    getAllStores(): Map<string, EntityStorageManager<any>> {
        return new Map(this.stores);
    }


    async getAllEntitiesByType(): Promise<Map<string, Entity[]>> {
        const registry = EntityStoreRegistry.getInstance();
        const allStores = registry.getAllStores();
        const entitiesByType = new Map<string, Entity[]>();

        for (const [entityType, store] of allStores) {
            const entities = await store.getAllEntities();
            entitiesByType.set(entityType, entities);
        }

        return entitiesByType;
    }
}