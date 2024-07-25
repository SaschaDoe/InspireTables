import type {IdStorageStrategy} from "./idStorageStrategy";

export class IdGenerator {
    private static instance: IdGenerator;
    private counter: number;
    private readonly fileName = 'last_id.txt';
    private initialized: boolean = false;
    private idStorageStrategy: IdStorageStrategy;

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

    public async initialize(): Promise<void> {
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
        if (!this.initialized) {
            await this.initialize();
        }

        this.counter++;
        await this.idStorageStrategy.saveLastId(this.fileName, this.counter);
        return this.counter;
    }

    public async clear(): Promise<void>{
        this.counter = 0;
    }
}