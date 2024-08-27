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

    private getFilePath(table: Table): string {
        return `tables/${table.title}.json`;
    }

    public async saveAllTablesIn(directoryPath: string, tables: Table[]): Promise<void> {
        try {
            if (this.storageStrategy.createDirectory) {
                await this.storageStrategy.createDirectory(directoryPath);
            }

            for (const table of tables) {
                const filePath = `${directoryPath}/${this.getFilePath(table)}`;
                const fileContent = JSON.stringify(table);
                await this.storageStrategy.saveFile(filePath, fileContent);
            }
            console.log(`Successfully saved ${tables.length} tables in ${directoryPath}`);
        } catch (error) {
            console.error('Error saving tables:', error);
            throw error;
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
        let allTables = await this.loadAllTablesIn(directoryPath, categories);
        console.log("getAllTables: ", allTables.length);
        let subTables: Table[] = [];
        for (let table of allTables) {


            const tableTitleSplit = table.title.split(' - ');
            if(tableTitleSplit.length > 1){
                if(table.isSelected){
                    console.log("Table was selected before: ", table.title);
                }
                subTables.push(table);
                console.log("found subtable: ", table);
            }else{
                mainTables.push(table);
            }

            tablesWithSub.push(table);
        }
        console.log("sub tables: ", subTables)
        console.log("main tables: ", mainTables)
        for(let mainTable of mainTables){
            let fittingSubTables: Table[] = [];
            for(let subTable of subTables){
                const tableTitleSplit = subTable.title.split(' - ');
                const mainTableTitle = tableTitleSplit[0];

                if(mainTableTitle === mainTable.title){
                    fittingSubTables.push(subTable);
                    console.log("found subtable: ", subTable, "for: ", mainTableTitle);
                }
            }
            for (let fittingSubTable of fittingSubTables){
                mainTable.subTables.push(fittingSubTable);
            }

        }


        return tablesWithSub;
    }

}