import { invoke } from '@tauri-apps/api/tauri';
import type {IdStorageStrategy} from "./idStorageStrategy";

export class TauriIdStorageStrategy implements IdStorageStrategy {
    async loadLastId(fileName: string): Promise<number> {
        try {
            const contents = await invoke('load_file', { path: fileName }) as string;
            return parseInt(contents, 10) || 0;
        } catch (error) {
            console.error('Failed to load last ID:', error);
            return 0;
        }
    }

    async saveLastId(fileName: string, id: number): Promise<void> {
        try {
            await invoke('save_file', { path: fileName, contents: id.toString() });
        } catch (error) {
            console.error('Failed to save last ID:', error);
            throw error;
        }
    }
}