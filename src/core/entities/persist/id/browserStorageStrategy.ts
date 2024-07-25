import type {IdStorageStrategy} from "./idStorageStrategy";

export class BrowserIdStorageStrategy implements IdStorageStrategy {
    async loadLastId(fileName: string): Promise<number> {
        const lastId = localStorage.getItem(fileName);
        return lastId ? parseInt(lastId, 10) : 0;
    }

    async saveLastId(fileName: string, id: number): Promise<void> {
        localStorage.setItem(fileName, id.toString());
    }
}
