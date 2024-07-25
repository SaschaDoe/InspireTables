<script lang="ts">
    import EntityList from "$lib/EntityComponents/EntityList.svelte";
    import {allStores, characterStore, idGenerator, illnessStore} from "../../core/entities/persist/stores";
    import CharacterComponent from "$lib/EntityComponents/entitySpecificComponents/CharacterComponent.svelte";
    import { CharacterCreator } from "../../core/entities/character/characterCreator";
    import { writable } from 'svelte/store';
    import CategoryIndex from "$lib/TableComponents/CategoryIndex.svelte";
    import IndexBaseComponent from "$lib/IndexBaseComponent.svelte";
    import IllnessComponent from "$lib/EntityComponents/entitySpecificComponents/IllnessComponent.svelte";
    import {IllnessCreator} from "../../core/entities/status/illnessCreator";

    const refreshTrigger = writable(0);

    async function clear() {
        try {
            for (let store of allStores) {
                console.log("try to clear", store);
                await store.clear();
            }
            await idGenerator.clear();
            refreshTrigger.update(n => n + 1);
        } catch (error) {
            console.error('Error clearing:', error);
        }
    }
</script>

<div class="flex h-screen overflow-hidden">

    <IndexBaseComponent >
        <p>bla</p>
    </IndexBaseComponent>

    <main class="flex-1 overflow-hidden flex flex-col">
        <div class="flex justify-between items-center p-4">
            <h1 class="text-2xl font-bold text-primary-500">Entities</h1>
            <button class="btn variant-filled-secondary" on:click={clear}>Clear All</button>
        </div>

        <div class="flex-1 overflow-y-auto space-y-8">
            {#key $refreshTrigger}
                <EntityList
                        title="Characters"
                        store={characterStore}
                        EntityComponent={CharacterComponent}
                        creator={new CharacterCreator()}
                />
                <EntityList
                        title="Illnesses"
                        store={illnessStore}
                        EntityComponent={IllnessComponent}
                        creator={new IllnessCreator()}
                />
            {/key}
        </div>
    </main>
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
</style>