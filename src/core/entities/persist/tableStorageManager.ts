import type {StorageStrategy} from "./storageStrategy";
import type {Table} from "../../tables/table";
import type {Category} from "../../tables/category";

export class TableStorageManager {
    private readonly storageStrategy: StorageStrategy;

    constructor(storageStrategy: StorageStrategy) {
        this.storageStrategy = storageStrategy;
        console.log('TableStorageManager initialized with strategy:', storageStrategy);
        console.log('loadAllFilesIn method exists:', 'loadAllFilesIn' in this.storageStrategy);
    }

    public async saveTable(directoryPath: string, category: string, table: Table): Promise<void> {
        try {
            let categoryPath = `${directoryPath}/${category}`;
            let doesDirectoryExists = await this.storageStrategy.doesDirectoryExists(categoryPath);
            if(!doesDirectoryExists){
                await this.storageStrategy.createDirectory(categoryPath);
            }
            let tablePath = `${categoryPath}/${table.title}.json`;
            let tableAsJson = JSON.stringify(table);
            await this.storageStrategy.saveFile(tablePath, tableAsJson);
            console.log(`Table ${table.title} saved successfully.`);
        } catch(error) {
            console.error(`Error saving table ${table.title}:`, error);
            throw error;
        }
    }


    public async saveAllCategoriesIn(directoryPath: string, categories: Category[]): Promise<void> {
        try {
            for (const category of categories) {
                let categoryPath = `${directoryPath}/${category.name}`;
                let doesDirectoryExists = await this.storageStrategy.doesDirectoryExists(categoryPath);
                if(!doesDirectoryExists){
                    await this.storageStrategy.createDirectory(categoryPath)
                }
                for (const table of category.tables) {
                    if(table.isSelected){
                        console.log("is selected before saving: ",table.title);
                    }
                    let tablePath = `${categoryPath}/${table.title}.json`;
                    let tableAsJson = JSON.stringify(table);
                    await this.storageStrategy.saveFile(tablePath,tableAsJson);
                }
            }
        }catch(error){
            console.log("error when saving tables ", error);
        }
    }

    public async loadAllTablesIn(directoryPath: string, categories: Category[]): Promise<Table[]> {
        console.log("loading all tables in ", directoryPath)
        let allTables: Table[] = [];
        try {
            for (const category of categories) {
                let categoryPath = `${directoryPath}/${category.name}`;
                const filePaths = await this.storageStrategy.loadAllFilesIn(categoryPath);
                for (const filePath of filePaths) {
                    if (filePath.endsWith('.json')) {
                        const fileContent = await this.storageStrategy.loadFileFromExactPath(filePath);
                        const table = JSON.parse(fileContent) as Table;

                        // Extract the file name without extension, handling potential undefined
                        table.title = filePath.split('\\').pop()?.replace(/\.[^/.]+$/, "") || "Untitled";
                        allTables.push(table);
                    }
                }
            }

        } catch (error) {
            console.error('Error loading tables:', error);
        }
        return allTables;
    }

    public async getTablesWithThereSubTablesFrom(directoryPath: string, categories: Category[]): Promise<Table[]> {
        let tablesWithSub: Table[] = [];
        let mainTables: Table[] = [];
        let subTables: Table[] = [];
        let alternativeTables: Table[] = [];

        let allTables = await this.loadAllTablesIn(directoryPath, categories);

        for (let table of allTables) {
            const tableTitleSplit = table.title.split(' - ');

            if(tableTitleSplit.length === 1){
                // This is a main table, e.g., "Time" or "Main Genre"
                mainTables.push(table);
            } else if(tableTitleSplit.length === 2){
                // This is a sub table, e.g., "Time - Mars" or "Main Genre - Books V2"
                subTables.push(table);
            } else if(tableTitleSplit.length >= 3){
                // This is an alternative table, e.g., "Main Genre - Book - Alt - V1" or "Main Genre - Book - Alt - V2"
                alternativeTables.push(table);
            }

            tablesWithSub.push(table);
        }

        console.log("sub tables: ", subTables);
        console.log("main tables: ", mainTables);
        console.log("alternative tables: ", alternativeTables);

        // Associating sub tables and alternative tables to the main tables
        for(let mainTable of mainTables){
            let fittingSubTables: Table[] = [];
            let fittingAltTables: Table[] = [];

            for(let subTable of subTables){
                const tableTitleSplit = subTable.title.split(' - ');
                const mainTableTitle = tableTitleSplit[0];

                if(mainTableTitle === mainTable.title){
                    fittingSubTables.push(subTable);
                    console.log("found subtable: ", subTable, "for: ", mainTableTitle);
                }
            }

            for(let altTable of alternativeTables){
                const tableTitleSplit = altTable.title.split(' - ');
                const mainTableTitle = tableTitleSplit[0];
                let isMatched = false;

                if(mainTableTitle === mainTable.title){
                    // Match directly to the main table
                    if(tableTitleSplit.length === 2) {
                        fittingAltTables.push(altTable);
                        isMatched = true;
                        console.log("found alt table: ", altTable, "for main table: ", mainTableTitle);
                    }

                    // Try to match it with a sub table
                    for(let subTable of fittingSubTables) {
                        if(tableTitleSplit.length === 3 && tableTitleSplit[1] === subTable.title.split(' - ')[1]) {
                            subTable.altTables.push(altTable);
                            isMatched = true;
                            console.log("found alt table: ", altTable, "for sub table: ", subTable.title);
                        }
                    }
                }

                if (!isMatched) {
                    throw new Error(`Unmatched alternative table found: ${altTable.title}`);
                }
            }

            mainTable.subTables.push(...fittingSubTables);
            mainTable.altTables.push(...fittingAltTables);
        }

        return tablesWithSub;
    }


}