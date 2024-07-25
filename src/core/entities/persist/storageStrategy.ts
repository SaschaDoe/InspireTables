export interface StorageStrategy {
    loadFile(path: string): Promise<string>;
    saveFile(path: string, contents: string): Promise<void>;
}
