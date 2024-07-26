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
    import {onMount} from "svelte";

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

    function updateActiveEntityFromScroll() {
        if (!scrollContainer) return;

        const scrollTop = scrollContainer.scrollTop;
        const clientHeight = scrollContainer.clientHeight;
        const scrollCenter = scrollTop + (clientHeight / 2);

        console.log("Scroll update - scrollTop:", scrollTop, "clientHeight:", clientHeight, "scrollCenter:", scrollCenter);

        // Get all entity type containers
        const entityContainers = scrollContainer.querySelectorAll('[id^="entitylist-"]');
        console.log("Found entity containers:", entityContainers.length);

        let currentType = "";
        let currentEntityId = -1;

        // Iterate through entity type containers
        entityContainers.forEach((container) => {
            const rect = container.getBoundingClientRect();
            const containerTop = rect.top;
            const containerBottom = rect.bottom;

            console.log("Container:", container.id, "Top:", containerTop, "Bottom:", containerBottom);

            if (containerTop <= scrollCenter && containerBottom >= scrollCenter) {
                currentType = container.id.replace('entitylist-', '');
                console.log("Current type found:", currentType);

                const entityElements = container.querySelectorAll('[id^="entity-"]');
                console.log("Found entity elements:", entityElements.length);
                let closestDistance = Infinity;

                entityElements.forEach((entity) => {
                    const entityRect = entity.getBoundingClientRect();
                    const entityCenter = (entityRect.top + entityRect.bottom) / 2;
                    const distance = Math.abs(entityCenter - scrollCenter);

                    console.log("Entity:", entity.id, "Distance:", distance);

                    if (distance < closestDistance) {
                        closestDistance = distance;
                        currentEntityId = parseInt(entity.id.split('-')[1]);
                    }
                });
            }
        });

        // Update active type and entity if changed
        if (currentType !== activeType || currentEntityId !== activeEntityId) {
            activeType = currentType;
            activeEntityId = currentEntityId;
            console.log(`Active Type updated: ${activeType}, Active Entity ID: ${activeEntityId}`);
        } else {
            console.log(`No change in Active Type: ${activeType}, Active Entity ID: ${activeEntityId}`);
        }
    }

    onMount(() => {
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', updateActiveEntityFromScroll);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', updateActiveEntityFromScroll);
            }
        };
    });
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
                <div  class="space-y-6">
                    <div id="entitylist-Character">
                    <EntityList
                            title="Characters"
                            entityName="Character"
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
                            entityName="Illness"
                            store={illnessStore}
                            EntityComponent={IllnessComponent}
                            creator={new IllnessCreator()}
                            {activeEntityId}
                            activeType={activeType}
                    />
                        </div>
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