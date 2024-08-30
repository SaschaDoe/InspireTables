<script lang="ts">
    import EntityList from "$lib/EntityComponents/EntityList.svelte";
    import CharacterComponent from "$lib/EntityComponents/entitySpecificComponents/CharacterComponent.svelte";
    import { CharacterCreator } from "../../core/entities/character/characterCreator";
    import { writable } from 'svelte/store';
    import IndexBaseComponent from "$lib/IndexBaseComponent.svelte";
    import EntityIndex from "$lib/EntityComponents/EntityIndex.svelte";
    import { onMount } from "svelte";
    import IllnessComponent from "$lib/EntityComponents/entitySpecificComponents/IllnessComponent.svelte";
    import { IllnessCreator } from "../../core/entities/status/IllnessCreator";
    import {getStorageStrategy, getStore, getStores} from "../../core/entities/persist/stores";
    import type { EntityStorageManager } from "../../core/entities/persist/entityStorageManager";
    import type { Entity } from "../../core/entities/entity";
    import {TableManager} from "../../core/entities/persist/tableManager";
    import {FunctionFactory} from "../../core/tables/core/entry/functionFactory";

    let characterStore: EntityStorageManager<Entity>;
    let illnessStore: EntityStorageManager<Entity>;

    const refreshTrigger = writable(0);

    let activeType = "";
    let activeEntityId = -1;
    let scrollContainer: HTMLDivElement;
    let showScrollToTop = writable(false);
    let characterCreator: CharacterCreator;
    let illnessCreator: IllnessCreator;

    onMount(async () => {
        let storageStrategy = await getStorageStrategy();
        let tableManager = await TableManager.getInstance(storageStrategy,new FunctionFactory());
        characterCreator = new CharacterCreator(tableManager);
        illnessCreator = new IllnessCreator(tableManager);
        characterStore = await getStore('characterStore');
        illnessStore = await getStore('illnessStore');
        activeType = "Character";
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', updateActiveEntityFromScroll);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', updateActiveEntityFromScroll);
            }
        };
    });

    function scrollToTop() {
        if (scrollContainer) {
            scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    async function clear() {
        try {
            let allEntityStores = (await getStores()).allEntityStores;
            for (let store of allEntityStores) {
                console.log("try to clear", store);
                await store.clear();
            }
            let lastIdStore = await getStore('lastIdStore');
            await lastIdStore.clear();
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
        let fullTypeDivId = `entitylist-${typeName}`;
        console.log("scroll to type activated for ", fullTypeDivId);
        const typeElement = document.getElementById(fullTypeDivId);
        console.log("found: ", typeElement);
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
            console.error(`Could not find element with id: entity-${entityId}`);
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
        showScrollToTop.set(scrollContainer.scrollTop > 100);
        if (!scrollContainer) return;

        const scrollTop = scrollContainer.scrollTop;
        const clientHeight = scrollContainer.clientHeight;
        const scrollBottom = scrollTop + clientHeight;

        const entityContainers = scrollContainer.querySelectorAll('[id^="entitylist-"]');
        console.log("Found entity containers:", entityContainers.length);

        let currentType = "";
        let currentEntityId = -1;

        for (let i = 0; i < entityContainers.length; i++) {
            const container = entityContainers[i];
            const rect = container.getBoundingClientRect();
            const containerTop = rect.top + scrollTop - scrollContainer.offsetTop;
            const containerBottom = rect.bottom + scrollTop - scrollContainer.offsetTop;

            if (containerTop <= scrollBottom && containerBottom >= scrollTop) {
                currentType = container.id.replace('entitylist-', '');

                const entityElements = container.querySelectorAll('[id^="entity-"]');

                for (let j = 0; j < entityElements.length; j++) {
                    const entity = entityElements[j];
                    const entityRect = entity.getBoundingClientRect();
                    const entityTop = entityRect.top + scrollTop - scrollContainer.offsetTop;
                    const entityBottom = entityRect.bottom + scrollTop - scrollContainer.offsetTop;

                    if (entityTop <= scrollBottom && entityBottom >= scrollTop) {
                        currentEntityId = parseInt(entity.id.split('-')[1]);
                        break;
                    }
                }

                if (currentEntityId === -1 && i === entityContainers.length - 1) {
                    const lastEntity = entityElements[entityElements.length - 1];
                    if (lastEntity) {
                        currentEntityId = parseInt(lastEntity.id.split('-')[1]);
                    }
                }
                break;
            }
        }
        if (currentType !== activeType || currentEntityId !== activeEntityId) {
            activeType = currentType;
            activeEntityId = currentEntityId;
        }
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
            <h1 class="text-2xl font-bold text-blue-700">Entities</h1>
            <button class="btn variant-filled-secondary" on:click={clear}>Clear All</button>
        </div>

        <div bind:this={scrollContainer} class="flex-1 overflow-y-auto space-y-8" id="entity-list-container">
            {#key $refreshTrigger}
                <div class="space-y-6">
                    {#if characterStore}
                        <div id="entitylist-Character">
                            <EntityList
                                    title="Characters"
                                    entityName="Character"
                                    store={characterStore}
                                    EntityComponent={CharacterComponent}
                                    creator={characterCreator}
                            />
                        </div>
                    {/if}
                    {#if illnessStore}
                        <div id="entitylist-Illness">
                            <EntityList
                                    title="Illnesses"
                                    entityName="Illness"
                                    store={illnessStore}
                                    EntityComponent={IllnessComponent}
                                    creator={illnessCreator}
                            />
                        </div>
                    {/if}
                </div>
            {/key}
        </div>
    </main>
</div>

{#if $showScrollToTop}
    <button
            on:click={scrollToTop}
            class="fixed bottom-5 left-2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200 z-50"
    >
        ↑
    </button>
{/if}

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
</style>