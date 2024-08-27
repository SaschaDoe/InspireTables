import type { StorageStrategy } from "./storageStrategy";

type Subscriber<T> = (value: T) => void;

export class ValueStorageManager<T> {
    private key: string;
    private value: T | null = null;
    private initialized: boolean = false;
    private storageStrategy: StorageStrategy;
    private subscribers: Set<Subscriber<T>> = new Set();

    constructor(key: string, storageStrategy: StorageStrategy) {
        this.key = key;
        this.storageStrategy = storageStrategy;
    }

    async clear(): Promise<void> {
        await this.initializeStorage();
        this.value = null;
        await this.saveValue();
        console.log(`Cleared value for ${this.key}`);
        this.notifySubscribers();
    }

    private async initializeStorage(): Promise<void> {
        if (this.initialized) return;
        try {
            await this.loadValue();
            console.log(`Storage initialized for ${this.key}`);
            this.initialized = true;
        } catch (error) {
            console.warn('Error initializing storage:', error);
            console.log('Initializing with null value.');
            this.value = null;
            await this.saveValue();
            this.initialized = true;
        }
    }

    private getFilePath(): string {
        return `values/${this.key}.json`;
    }

    private async loadValue(): Promise<void> {
        const filePath = this.getFilePath();
        let jsonString = await this.storageStrategy.loadFile(filePath);
        if (jsonString.trim() === '') {
            this.value = null;
        } else {
            this.value = JSON.parse(jsonString);
        }
        console.log(`Loaded value for ${this.key}`);
        this.notifySubscribers();
    }

    private async saveValue(): Promise<void> {
        const filePath = this.getFilePath();
        const jsonString = JSON.stringify(this.value);
        await this.storageStrategy.saveFile(filePath, jsonString);
        console.log(`Saved value for ${this.key}`);
        this.notifySubscribers();
    }

    async getValue(): Promise<T | null> {
        await this.initializeStorage();
        return this.value;
    }

    async setValue(value: T): Promise<void> {
        await this.initializeStorage();
        this.value = value;
        await this.saveValue();
    }

    subscribe(callback: Subscriber<T>): () => void {
        this.subscribers.add(callback);
        return () => this.subscribers.delete(callback);
    }

    private notifySubscribers(): void {
        if (this.value !== null) {
            this.subscribers.forEach(subscriber => subscriber(this.value as T));
        }
    }
}