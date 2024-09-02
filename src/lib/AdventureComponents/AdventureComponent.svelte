<script lang="ts">
    import {Adventure} from "../../core/entities/adventure/adventure";
    import {onMount} from "svelte";
    import {getStorageStrategy, getStore} from "../../core/entities/persist/stores";
    import {TableManager} from "../../core/entities/persist/tableManager";
    import {FunctionFactory} from "../../core/tables/core/entry/functionFactory";


    let tableManager: TableManager;
    let adventure: Adventure;
    let adventureName = "";

    onMount(async () => {
        let storageStrategy = await getStorageStrategy();
        tableManager = await TableManager.getInstance(storageStrategy, new FunctionFactory());
        console.log("Adventure Component on Mount");
        let adventureStore = await getStore('adventureStore');
        let adventures = await adventureStore.getAllEntities() as Adventure[];

        for (const a of adventures) {
            if(a.isSelected){
                adventure = a;
                adventureName = a.name;
            }
        }
    });

    function nothing(tabIndex: number) {
        console.log("not overloaded");
    }
    export let changeTab: (tabIndex: number) => void = nothing;


    function gotoCampaign(){
        changeTab(2);
    }
</script>

<div class="p-4 bg-gray-100 min-h-screen">
    {#if adventure}
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-gray-800">Adventure: {adventure.id}</h1>
    </div>
    {:else}
        <p class="text-gray-600">No adventure is set.</p>
        <button class="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200" on:click={gotoCampaign}>Goto Campaign</button>
    {/if}
</div>