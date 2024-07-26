<script lang="ts">
    import EntityList from "$lib/EntityComponents/EntityList.svelte";
    import { allStores, characterStore, idGenerator, illnessStore } from "../../core/entities/persist/stores";
    import CharacterComponent from "$lib/EntityComponents/entitySpecificComponents/CharacterComponent.svelte";
    import { CharacterCreator } from "../../core/entities/character/characterCreator";
    import { writable } from 'svelte/store';
    import IndexBaseComponent from "$lib/IndexBaseComponent.svelte";
    import IllnessComponent from "$lib/EntityComponents/entitySpecificComponents/IllnessComponent.svelte";
    import { IllnessCreator } from "../../core/entities/status/illnessCreator";
    import EntityIndex from "$lib/EntityComponents/EntityIndex.svelte";

    const refreshTrigger = writable(0);

    let activeType = "";
    let activeEntityId = -1;
    let scrollContainer: HTMLDivElement;

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

    function handleSetActiveType(event: CustomEvent<string>) {
        activeType = event.detail;
        console.log('Active Type:', activeType);
        // You can add logic here to update the view based on the active type
    }

    function handleSetActiveEntity(event: CustomEvent<{typeName: string, entityId: number}>) {
        const { typeName, entityId } = event.detail;
        activeType = typeName;
        activeEntityId = entityId;
        console.log('Active Type:', activeType, 'Active Entity ID:', activeEntityId);
        scrollToEntity(typeName, entityId);
    }

    function scrollToEntity(typeName: string, entityId: number) {
        const entityElement = document.getElementById(`entity-${typeName}-${entityId}`);
        if (entityElement && scrollContainer) {
            setTimeout(() => {
                const topOffset = entityElement.offsetTop - scrollContainer.offsetTop;
                scrollContainer.scrollTo({ top: topOffset, behavior: 'smooth' });
            }, 0);
        }
    }
</script>

<div class="flex h-screen overflow-hidden">
    <IndexBaseComponent>
        <EntityIndex
                on:setActiveType={handleSetActiveType}
                on:setActiveEntity={handleSetActiveEntity}
        />
    </IndexBaseComponent>

    <main class="flex-1 overflow-hidden flex flex-col">
        <div class="flex justify-between items-center p-4">
            <h1 class="text-2xl font-bold text-primary-500">Entities</h1>
            <button class="btn variant-filled-secondary" on:click={clear}>Clear All</button>
        </div>

        <div bind:this={scrollContainer} class="flex-1 overflow-y-auto space-y-8" id="entity-list-container">
            {#key $refreshTrigger}
                <EntityList
                        title="Characters"
                        store={characterStore}
                        EntityComponent={CharacterComponent}
                        creator={new CharacterCreator()}
                        {activeEntityId}
                />
                <EntityList
                        title="Illnesses"
                        store={illnessStore}
                        EntityComponent={IllnessComponent}
                        creator={new IllnessCreator()}
                        {activeEntityId}
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