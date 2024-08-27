export interface StorageStrategy {
    loadFile(path: string): Promise<string>;
    loadFileFromExactPath(path: string): Promise<string>;
    saveFile(path: string, contents: string): Promise<void>;
    loadAllFilesIn(path: string): Promise<string[]>;
    createDirectory(path: string): Promise<void>;
    doesDirectoryExists(path: string): Promise<boolean>;
}