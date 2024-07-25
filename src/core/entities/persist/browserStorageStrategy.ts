import type {StorageStrategy} from "./storageStrategy";

export class BrowserStorageStrategy implements StorageStrategy {
    async loadFile(path: string): Promise<string> {
        const data = localStorage.getItem(path);
        return data || '';
    }

    async saveFile(path: string, contents: string): Promise<void> {
        localStorage.setItem(path, contents);
    }
}