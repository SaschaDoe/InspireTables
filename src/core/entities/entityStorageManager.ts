import { invoke } from '@tauri-apps/api/tauri';
import type { Entity } from "./entity";

export class EntityStorageManager<T extends Entity> {
    private entityType: string;
    private entities: T[] = [];
    private initialized: boolean = false;

    constructor(entityType: string) {
        this.entityType = entityType;
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
        const jsonString = await invoke('load_file', { path: filePath }) as string;
        if (jsonString.trim() === '') {
            this.entities = [];
        } else {
            this.entities = JSON.parse(jsonString) as T[];
        }
        console.log(`Loaded ${this.entities.length} entities from ${filePath}`);
    }

    private async saveEntities(): Promise<void> {
        const filePath = this.getFilePath();
        const jsonString = JSON.stringify(this.entities, null, 2);
        await invoke('save_file', { path: filePath, contents: jsonString });
        console.log(`Saved ${this.entities.length} entities to ${filePath}`);
    }

    async getAllEntities(): Promise<T[]> {
        await this.initializeStorage();
        return this.entities;
    }

    async saveEntity(entity: T): Promise<void> {
        await this.initializeStorage();
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

    async removeEntity(id: number): Promise<void> {
        await this.initializeStorage();
        const initialLength = this.entities.length;
        this.entities = this.entities.filter(e => e.id !== id);
        if (this.entities.length === initialLength) {
            console.log(`No entity found with id ${id} to remove`);
        } else {
            console.log(`Removed entity with id ${id}`);
            await this.saveEntities();
        }
    }
}