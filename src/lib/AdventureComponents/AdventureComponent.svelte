<script lang="ts">
    import {Adventure} from "../../core/entities/adventure/adventure";
    import {onMount} from "svelte";
    import {getStorageStrategy, selectedAdventure} from "../../core/entities/persist/stores";
    import {TableManager} from "../../core/entities/persist/tableManager";
    import {FunctionFactory} from "../../core/tables/core/entry/functionFactory";


    let tableManager: TableManager;
    let adventure = new Adventure();
    let adventureName = "";

    onMount(async () => {
        let storageStrategy = await getStorageStrategy();
        tableManager = await TableManager.getInstance(storageStrategy, new FunctionFactory());
        console.log("Adventure Component on Mount");
        selectedAdventure.subscribe(value => {
            console.log("Adventure subscribe");
            if(value !== null){
                console.log("adventure loaded", adventure);
                adventure = value;
                adventureName = adventure.name;
            }
        });
    });
</script>

<div class="p-4 bg-gray-100 min-h-screen">
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-gray-800">Adventure: {adventure.id}</h1>
    </div>
</div>