import { invoke } from '@tauri-apps/api/tauri';
import type {StorageStrategy} from "./storageStrategy";

export class TauriStorageStrategy implements StorageStrategy {
    async loadFile(path: string): Promise<string> {
        return await invoke('load_file', { path }) as string;
    }

    async saveFile(path: string, contents: string): Promise<void> {
        await invoke('save_file', { path, contents });
    }
}