import type {StorageStrategy} from "./storageStrategy";

export class BrowserStorageStrategy implements StorageStrategy {
    loadFileFromExactPath(path: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    async doesDirectoryExists(path: string): Promise<boolean> {
        return Promise.resolve(true);
    }
    async loadFile(path: string): Promise<string> {
        const data = localStorage.getItem(path);
        return data || '';
    }

    async saveFile(path: string, contents: string): Promise<void> {
        localStorage.setItem(path, contents);
    }

    async loadAllFilesIn(path: string): Promise<string[]> {
        const filePaths: string[] = [];
        const prefix = path.endsWith('/') ? path : path + '/';

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(prefix)) {
                filePaths.push(key);
            }
        }

        return filePaths;
    }

    async createDirectory(path: string): Promise<void> {
        // In localStorage, we don't actually need to create directories
        // This method is here for compatibility with file system-based strategies
    }
}