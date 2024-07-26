import type { IdStorageStrategy } from "./idStorageStrategy";

export class IdGenerator {
    private static instance: IdGenerator;
    private counter: number;
    private readonly fileName = 'last_id.txt';
    private initialized: boolean = false;
    private idStorageStrategy: IdStorageStrategy;
    private initializationPromise: Promise<void> | null = null;
    private generateLock: Promise<void> = Promise.resolve();

    private constructor(idStorageStrategy: IdStorageStrategy) {
        this.counter = 0;
        this.idStorageStrategy = idStorageStrategy;
    }

    public static getInstance(idStorageStrategy: IdStorageStrategy): IdGenerator {
        if (!IdGenerator.instance) {
            IdGenerator.instance = new IdGenerator(idStorageStrategy);
        }
        return IdGenerator.instance;
    }

    public initialize(): Promise<void> {
        if (this.initializationPromise) {
            return this.initializationPromise;
        }

        this.initializationPromise = this._initialize();
        return this.initializationPromise;
    }

    private async _initialize(): Promise<void> {
        if (this.initialized) return;

        try {
            const lastId = await this.idStorageStrategy.loadLastId(this.fileName);
            this.counter = lastId;
            this.initialized = true;
        } catch (error) {
            console.error('Failed to initialize IdGenerator:', error);
            throw error;
        }
    }

    public async generateId(): Promise<number> {
        await this.initialize();

        // Use a lock to ensure only one generation happens at a time
        const release = await this.acquireLock();
        try {
            this.counter++;
            await this.idStorageStrategy.saveLastId(this.fileName, this.counter);
            return this.counter;
        } finally {
            release();
        }
    }

    private async acquireLock(): Promise<() => void> {
        let release: () => void;
        const newLock = new Promise<void>(resolve => {
            release = resolve;
        });

        const previousLock = this.generateLock;
        this.generateLock = newLock;

        await previousLock;
        return release!;
    }

    public async clear(): Promise<void> {
        const release = await this.acquireLock();
        try {
            this.counter = 0;
            await this.idStorageStrategy.saveLastId(this.fileName, this.counter);
        } finally {
            release();
        }
    }
}