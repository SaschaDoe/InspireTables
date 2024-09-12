import type {StorageStrategy} from "../../../entities/persist/storageStrategy";
import type {FunctionFactory} from "../../core/entry/functionFactory";
import {allCategories} from "../../allCategories";
import {mapCategories} from "../../category";
import {allThemes} from "./themes";
import type {Theme} from "./theme";

export class ThemeService{
    private static instance: ThemeService;
    private storageStrategy: StorageStrategy;
    private themes: Theme[] = [];

    constructor(storageStrategy: StorageStrategy) {
        this.storageStrategy = storageStrategy;
    }

    static async getInstance(storageStrategy: StorageStrategy): Promise<ThemeService> {
        if(!ThemeService.instance){
            ThemeService.instance = new ThemeService(storageStrategy);
            await ThemeService.instance.initialize();
        }

        return ThemeService.instance;
    }

    private async initialize(): Promise<void> {
        console.log("initialize")
        const defaultThemes = allThemes;
        // Load stored themes
        //const loadedTables = await this.tableStorageManager.getTablesWithThereSubTablesFrom('/tables/', defaultCategories);
        //this.categories = mapCategories(defaultCategories, loadedTables);
        this.themes = defaultThemes;
    }


}