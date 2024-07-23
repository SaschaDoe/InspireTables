import { IdGenerator } from "./IdGenerator";

export abstract class Entity {
    private _id: number;

    constructor() {
        this._id = 0;  // Initialize with a temporary ID
        this.initializeId();
    }

    private async initializeId(): Promise<void> {
        try {
            this._id = await IdGenerator.getInstance().generateId();
        } catch (error) {
            console.error('Failed to generate ID:', error);
            // You might want to handle this error more gracefully
        }
    }

    get id(): number {
        return this._id;
    }
}