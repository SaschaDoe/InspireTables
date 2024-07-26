import type { Entity } from "../entity";
import { EntityStorageManager } from "./entityStorageManager";

type Subscriber<T> = (entities: T) => void;

export class EntityStoreRegistry {
    private static instance: EntityStoreRegistry;
    private stores: Map<string, EntityStorageManager<any>> = new Map();
    private subscribers: Set<Subscriber<Map<string, Entity[]>>> = new Set();

    private constructor() {}

    static getInstance(): EntityStoreRegistry {
        if (!EntityStoreRegistry.instance) {
            EntityStoreRegistry.instance = new EntityStoreRegistry();
        }
        return EntityStoreRegistry.instance;
    }

    registerStore(entityType: string, store: EntityStorageManager<any>): void {
        this.stores.set(entityType, store);
        store.subscribe(() => this.notifySubscribers());
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
        const entitiesByType = new Map<string, Entity[]>();

        for (const [entityType, store] of this.stores) {
            const entities = await store.getAllEntities();
            entitiesByType.set(entityType, entities);
        }

        return entitiesByType;
    }

    subscribe(callback: Subscriber<Map<string, Entity[]>>): () => void {
        this.subscribers.add(callback);
        return () => this.subscribers.delete(callback);
    }

    private async notifySubscribers(): Promise<void> {
        const entitiesByType = await this.getAllEntitiesByType();
        this.subscribers.forEach(subscriber => subscriber(entitiesByType));
    }
}