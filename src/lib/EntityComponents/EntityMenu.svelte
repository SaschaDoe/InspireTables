<script lang="ts">
    import EntityList from "$lib/EntityComponents/EntityList.svelte";
    import {allStores, characterStore, idGenerator} from "../../core/entities/persist/stores";
    import CharacterComponent from "$lib/EntityComponents/entitySpecificComponents/CharacterComponent.svelte";
    import { CharacterCreator } from "../../core/entities/character/characterCreator";
    import { writable } from 'svelte/store';
    import {IdGenerator} from "../../core/entities/persist/id/IdGenerator";

    // Create a writable store for the refresh trigger
    const refreshTrigger = writable(0);


    async function clear() {
        try {
            for (let store of allStores) {
                console.log("try to clear", store);
                await store.clear();
            }
            await idGenerator.clear();
            // Trigger a refresh after clearing
            refreshTrigger.update(n => n + 1);
        } catch (error) {
            console.error('Error clearing:', error);
        }
    }
</script>

<main>
    <h1>Entities</h1>
    <button class="btn variant-filled-secondary" on:click={clear}>Clear</button>

    {#key $refreshTrigger}
        <EntityList
                store={characterStore}
                EntityComponent={CharacterComponent}
                creator={new CharacterCreator()}
        />
    {/key}
</main>

<style>
    main {
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    li {
        margin: 0.5em 0;
        padding: 0.5em;
        background-color: #f0f0f0;
        border-radius: 4px;
    }

    button {
        background-color: #ff3e00;
        color: white;
        border: none;
        padding: 0.5em 1em;
        margin: 0.5em 0;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #ff6340;
    }
</style>