import type {EntityStorageManager} from "./entityStorageManager";
import type {Entity} from "../entity";

export class EntityStoreRegistry {
    private static instance: EntityStoreRegistry;
    private storeMap: Map<string, EntityStorageManager<any>>;

    private constructor() {
        this.storeMap = new Map();
    }

    public static getInstance(): EntityStoreRegistry {
        if (!EntityStoreRegistry.instance) {
            EntityStoreRegistry.instance = new EntityStoreRegistry();
        }
        return EntityStoreRegistry.instance;
    }

    public registerStore<T extends Entity>(entityType: string, store: EntityStorageManager<T>): void {
        this.storeMap.set(entityType, store);
    }

    public getStore<T extends Entity>(entityType: string): EntityStorageManager<T> | undefined {
        return this.storeMap.get(entityType) as EntityStorageManager<T> | undefined;
    }

    public getAllStores(): EntityStorageManager<any>[] {
        return Array.from(this.storeMap.values());
    }
}