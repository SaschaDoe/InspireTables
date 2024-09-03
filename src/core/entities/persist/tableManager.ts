import {Category, mapCategories} from "../../tables/category";
import {TableStorageManager} from "./tableStorageManager";
import type {FunctionFactory} from "../../tables/core/entry/functionFactory";
import type {StorageStrategy} from "./storageStrategy";
import {MainGenreTable} from "../../tables/content/genre/mainGenres";
import type {Table} from "../../tables/table";
import {selectedGlobalStore, selectedProfileStore} from "./stores";
import {get} from "svelte/store";

export class TableManager {
    private static instance: TableManager;
    private categories: Category[] = [];
    private tableStorageManager: TableStorageManager;
    private functionFactory: FunctionFactory;
    private tableMap: Map<string, Table> = new Map();

    private constructor(storageStrategy: StorageStrategy, functionFactory: FunctionFactory) {
        this.tableStorageManager = new TableStorageManager(storageStrategy);
        this.functionFactory = functionFactory;
    }

    static async getInstance(storageStrategy: StorageStrategy, functionFactory: FunctionFactory): Promise<TableManager> {
        if (!TableManager.instance) {
            TableManager.instance = new TableManager(storageStrategy, functionFactory);
            await TableManager.instance.initialize();
        }
        return TableManager.instance;
    }

    private async initialize(): Promise<void> {
        // Define your default categories and tables here
        const defaultCategories: Category[] = [
            new Category().withName("Genres").withTable(new MainGenreTable()),
            // Add other default categories and tables here
        ];

        // Load stored tables or use defaults
        const loadedTables = await this.tableStorageManager.getTablesWithThereSubTablesFrom('/tables/', defaultCategories);

        this.categories = mapCategories(defaultCategories, loadedTables);
        this.populateTableMap();
    }

    private populateTableMap(): void {
        for (const category of this.categories) {
            for (const table of category.tables) {
                this.tableMap.set(table.title, table);
                for (const subTable of table.subTables) {
                    this.tableMap.set(subTable.title, subTable);
                }
            }
        }
    }

    //get table from table map and look for selected alternative tables
     getTable(tableName: string): Table {
        const table = this.tableMap.get(tableName);
        if (!table) {
            throw new Error(`get Table: ${tableName} not found.`);
        }

        let profile = get(selectedProfileStore);
        if(profile !== null){
            for(const altTable of table.altTables) {
                if(profile.selectedAltTables.some(t => t.title === altTable.title)){
                    console.log("Alt table returned", altTable);
                    return altTable;
                }
            }

        }else{
            let global = get(selectedGlobalStore);
            if(global !== null){
                for(const altTable of table.altTables) {
                    if(global.selectedAltTables.some(t => t.title === altTable.title)){
                        return altTable;
                    }
                }
            }
        }

        return table;
    }

    getCategory(categoryName: string): Category | undefined {
        return this.categories.find(c => c.name === categoryName);
    }

    getAllCategories(): Category[] {
        return this.categories;
    }

    async saveAllTables(): Promise<void> {
        await this.tableStorageManager.saveAllCategoriesIn('/tables/', this.categories);
    }


}