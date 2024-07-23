import { invoke } from '@tauri-apps/api/tauri';

export class IdGenerator {
    private static instance: IdGenerator;
    private counter: number;
    private readonly fileName = 'last_id.txt';
    private initialized: boolean = false;

    private constructor() {
        this.counter = 0;
    }

    public static getInstance(): IdGenerator {
        if (!IdGenerator.instance) {
            IdGenerator.instance = new IdGenerator();
        }
        return IdGenerator.instance;
    }

    public async initialize(): Promise<void> {
        if (this.initialized) return;

        try {
            const lastId = await this.loadLastId();
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
        await this.saveLastId(this.counter);
        return this.counter;
    }

    private async loadLastId(): Promise<number> {
        try {
            const contents = await invoke('load_file', { path: this.fileName }) as string;
            return parseInt(contents, 10) || 0;
        } catch (error) {
            console.error('Failed to load last ID:', error);
            return 0;
        }
    }

    private async saveLastId(id: number): Promise<void> {
        try {
            await invoke('save_file', { path: this.fileName, contents: id.toString() });
        } catch (error) {
            console.error('Failed to save last ID:', error);
            throw error;
        }
    }
}