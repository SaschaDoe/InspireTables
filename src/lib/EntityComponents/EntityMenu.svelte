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
        scrollToType(activeType);
    }

    function handleSetActiveEntity(event: CustomEvent<{typeName: string, entityId: number}>) {
        const { typeName, entityId } = event.detail;
        activeType = typeName;
        activeEntityId = entityId;
        console.log('Active Type:', activeType, 'Active Entity ID:', activeEntityId);
        scrollToEntity(typeName, entityId);
    }

    function scrollToType(typeName: string) {
        let fullTypeDivId = `entitylist-${typeName}`
        console.log("scroll to type activated for ",fullTypeDivId)
        const typeElement = document.getElementById(fullTypeDivId);
        console.log("found: ", typeElement)
        if (typeElement && scrollContainer) {
            setTimeout(() => {
                const topOffset = typeElement.offsetTop - scrollContainer.offsetTop;
                scrollContainer.scrollTo({ top: topOffset, behavior: 'smooth' });
            }, 0);
        }
    }

    function scrollToEntity(typeName: string, entityId: number) {
        const entityElement = document.getElementById(`entity-${entityId}`);
        if (!entityElement) {
            console.error(`Could not find element with id: entity-${typeName}-${entityId}`);
            return;
        }
        if (!scrollContainer) {
            console.error("Scroll container is not defined");
            return;
        }
        setTimeout(() => {
            const rect = entityElement.getBoundingClientRect();
            const scrollContainerRect = scrollContainer.getBoundingClientRect();
            const topOffset = rect.top - scrollContainerRect.top + scrollContainer.scrollTop;
            console.log(`Calculated topOffset: ${topOffset}`);
            scrollContainer.scrollTo({ top: topOffset, behavior: 'smooth' });
        }, 0);
    }
</script>

<div class="flex h-screen overflow-hidden">
    <IndexBaseComponent>
        <EntityIndex
                on:setActiveType={handleSetActiveType}
                on:setActiveEntity={handleSetActiveEntity}
                {activeType}
                {activeEntityId}
        />
    </IndexBaseComponent>

    <main class="flex-1 overflow-hidden flex flex-col">
        <div class="flex justify-between items-center p-4">
            <h1 class="text-2xl font-bold text-primary-500">Entities</h1>
            <button class="btn variant-filled-secondary" on:click={clear}>Clear All</button>
        </div>

        <div bind:this={scrollContainer} class="flex-1 overflow-y-auto space-y-8" id="entity-list-container">
            {#key $refreshTrigger}
                <div id="entitylist-Character">
                <EntityList
                        title="Characters"
                        store={characterStore}
                        EntityComponent={CharacterComponent}
                        creator={new CharacterCreator()}
                        {activeEntityId}
                        activeType={activeType}
                />
                </div>
                <div id="entitylist-Illness">
                <EntityList
                        title="Illnesses"
                        store={illnessStore}
                        EntityComponent={IllnessComponent}
                        creator={new IllnessCreator()}
                        {activeEntityId}
                        activeType={activeType}
                />
                </div>
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