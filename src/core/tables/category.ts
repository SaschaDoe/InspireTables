import type {Table} from "./table";

export class Category{
    name = "";
    tables:Table[] = [];
    isOpen = false;
    withTable(table: Table){
        this.tables.push(table);
        return this;
    }
    withName(name: string){
        this.name = name;
        return this;
    }

}


export function mapCategories(categories: Category[], loadedTables: Table[]) {
    console.log("Try to map categories");
    const tableMap = new Map(loadedTables.map(table => [table.title, table]));

    // Update categories with real Table objects
    categories = categories.map(category => {
        const updatedCategory = new Category().withName(category.name);
        updatedCategory.isOpen = category.isOpen;

        category.tables.forEach(oldTable => {
            const realTable = tableMap.get(oldTable.title);
            if (realTable) {
                updatedCategory.withTable(realTable);
            } else {
                console.warn(`Table "${oldTable.title}" not found in loaded tables.`);
                updatedCategory.withTable(oldTable); // Keep the old table if not found
            }
        });

        return updatedCategory;
    });
    console.log("Mapped Categories: ", categories)
    return categories;
}
