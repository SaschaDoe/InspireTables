export interface IdStorageStrategy {
    loadLastId(fileName: string): Promise<number>;
    saveLastId(fileName: string, id: number): Promise<void>;
}