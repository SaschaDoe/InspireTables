import type { Entity } from "../entity";
import type { StorageStrategy } from "./storageStrategy";
import {IdGenerator} from "./idGenerator";
import {AutoDeletableEntity, type Deletable} from "../deletable";

type Subscriber<T> = (entities: T[]) => void;

export class EntityStorageManager<T extends Entity & Deletable> {
    private entityType: string;
    private entities: T[] = [];
    private initialized: boolean = false;
    private storageStrategy: StorageStrategy;
    private subscribers: Set<Subscriber<T>> = new Set();

    constructor(entityType: string, storageStrategy: StorageStrategy) {
        this.entityType = entityType;
        this.storageStrategy = storageStrategy;
    }

    async getEntityCount(): Promise<number> {
        await this.initializeStorage();
        return this.entities.length;
    }

    async clear(): Promise<void> {
        await this.initializeStorage();
        this.entities = [];
        await this.saveEntities();
        console.log(`Cleared all entities for ${this.entityType}`);
        this.notifySubscribers();
    }

    private async initializeStorage(): Promise<void> {
        if (this.initialized) return;

        try {
            await this.loadEntities();
            console.log(`Storage initialized for ${this.entityType}`);
            this.initialized = true;
        } catch (error) {
            console.warn('Error initializing storage:', error);
            console.log('Initializing with empty array.');
            this.entities = [];
            await this.saveEntities();
            this.initialized = true;
        }
    }

    private getFilePath(): string {
        return `entities/${this.entityType}s.json`;
    }

    private async loadEntities(): Promise<void> {
        const filePath = this.getFilePath();
        const jsonString = await this.storageStrategy.loadFile(filePath);
        if (jsonString.trim() === '') {
            this.entities = [];
        } else {
            this.entities = JSON.parse(jsonString) as T[];
        }
        console.log(`Loaded ${this.entities.length} entities from ${filePath}`);
        this.notifySubscribers();
    }

    private async saveEntities(): Promise<void> {
        const filePath = this.getFilePath();
        const jsonString = JSON.stringify(this.entities, null, 2);
        await this.storageStrategy.saveFile(filePath, jsonString);
        console.log(`Saved ${this.entities.length} entities to ${filePath}`);
        this.notifySubscribers();
    }

    async deleteEntity(id: number): Promise<void> {
        await this.initializeStorage();
        const index = this.entities.findIndex(e => e.id === id);
        if (index !== -1) {
            this.entities.splice(index, 1);
            console.log(`Deleted entity with id ${id}`);
            await this.saveEntities();
        } else {
            console.log(`Entity with id ${id} not found`);
        }
    }

    async cascadeDelete(entity: T, getStore: (storeName: string) => Promise<EntityStorageManager<Entity & Deletable>>): Promise<void> {
        const entitiesToDelete = await entity.prepareForDeletion();

        // Group entities by type
        const entitiesByType: { [key: string]: (Entity & Deletable)[] } = {};
        for (const entityToDelete of entitiesToDelete) {
            const type = entityToDelete.getEntityType();
            if (!entitiesByType[type]) {
                entitiesByType[type] = [];
            }
            entitiesByType[type].push(entityToDelete);
        }

        // Delete entities from each store
        for (const [type, entities] of Object.entries(entitiesByType)) {
            const typeStore = await getStore(type);
            for (const entityToDelete of entities) {
                await typeStore.deleteEntity(entityToDelete.id);
            }
        }

        // Finally, delete the main entity
        await this.deleteEntity(entity.id);
    }


    async getAllEntities(): Promise<T[]> {
        await this.initializeStorage();
        return this.entities || [];
    }

    async saveSpecificEntities(entities: T[]): Promise<void> {
        for (let entity of entities) {
            await this.saveEntity(entity);
        }
    }

    async saveEntity(entity: T): Promise<void> {
        await this.initializeStorage();
        if (entity.id === -1) {
            entity.id = await IdGenerator.generate();
        }
        const index = this.entities.findIndex(e => e.id === entity.id);
        if (index !== -1) {
            this.entities[index] = entity;
            console.log(`Updated entity with id ${entity.id}`);
        } else {
            this.entities.push(entity);
            console.log(`Added new entity with id ${entity.id}`);
        }
        await this.saveEntities();
    }

    subscribe(callback: Subscriber<T>): () => void {
        this.subscribers.add(callback);
        return () => this.subscribers.delete(callback);
    }

    private notifySubscribers(): void {
        this.subscribers.forEach(subscriber => subscriber(this.entities));
    }
}