import {invoke} from '@tauri-apps/api/tauri';
import type {StorageStrategy} from "./storageStrategy";

export class TauriStorageStrategy implements StorageStrategy {
    private basePath: string | null = null;

    constructor() {
        this.initBasePath();
    }

    private async initBasePath() {
        try {
            this.basePath = await invoke('get_exe_dir') as string; //await join(execPath, 'values');
        } catch (error) {
            console.error('Failed to get executable directory:', error);
            throw error;
        }
    }

    private async getFullPath(relativePath: string): Promise<string> {
        if (!this.basePath) {
            await this.initBasePath();
        }
        return `${this.basePath}/${relativePath}`;
    }

    async loadFileFromExactPath(path: string): Promise<string> {
        try {
            return await invoke('load_file', {path: path}) as string;
        } catch (error) {
            console.error('Error loading file:', error);
            throw error;
        }
    }

    async loadFile(path: string): Promise<string> {
        try {
            const fullPath = await this.getFullPath(path);
            return await invoke('load_file', {path: fullPath}) as string;
        } catch (error) {
            console.error('Error loading file:', error);
            throw error;
        }
    }

    async saveFile(path: string, contents: string): Promise<void> {
        try {
            const fullPath = await this.getFullPath(path);
            await invoke('save_file', { path: fullPath, contents });
        } catch (error) {
            console.error('Error saving file:', error);
            throw error;
        }
    }

    async createDirectory(path: string): Promise<void> {
        try {
            const fullPath = await this.getFullPath(path);
            await invoke('create_directory', { path: fullPath });
        } catch (error) {
            console.error('Error creating directory:', error);
            throw error;
        }
    }

    async doesDirectoryExists(path: string): Promise<boolean> {
        try {
            const fullPath = await this.getFullPath(path);
            return await invoke('does_directory_exist', {path: fullPath}) as boolean;
        } catch (error) {
            console.error('Error checking if directory exists:', error);
            throw error;
        }
    }

    async loadAllFilesIn(path: string): Promise<string[]> {
        try {
            const fullPath = await this.getFullPath(path);
            return await invoke('load_all_files_in', {path: fullPath}) as string[];
        } catch (error) {
            console.error('Error loading files:', error);
            throw error;
        }
    }
}