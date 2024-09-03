import {Category, mapCategories} from "../../tables/category";
import {TableStorageManager} from "./tableStorageManager";
import type {FunctionFactory} from "../../tables/core/entry/functionFactory";
import type {StorageStrategy} from "./storageStrategy";
import {MainGenreTable} from "../../tables/content/genre/mainGenres";
import type {Table} from "../../tables/table";

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

        // Map the loaded tables to categories
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


    //TODO: Fantasy / Tech / Culture / Genre?
    //TODO: Weight subtables for these
    //There are not all subtables for all tables.
    //There is a list of thinks you can weight on (more than one can be selected and a table could stand for)
    //When there is more that connects than that table is chosen when there is one contradicting than not
    //when more are possible than there is a random choice. That should be in the roll itself
    //so that it can be part of the creationResult
    //I have to get the settings
    //And this have to be updated
    getTable(tableName: string): Table {
        const table = this.tableMap.get(tableName);
        if (!table) {
            throw new Error(`get Table: ${tableName} not found.`);
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