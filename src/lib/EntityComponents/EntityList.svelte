<script lang="ts">
    import type { Entity } from "../../core/entities/entity";
    import { EntityStorageManager } from "../../core/entities/persist/entityStorageManager";
    import { onMount, onDestroy } from "svelte";
    import type { ComponentType } from "svelte";
    import { EntityStoreRegistry } from "../../core/entities/persist/entityStoreRegistry";
    import { clearEntityUpdates, entityUpdateStore, notifyEntityUpdates } from "$lib/EntityComponents/entityStore";
    import {IdGenerator} from "../../core/entities/persist/idGenerator";
    import type {BaseCreator} from "../../core/entities/baseCreator";

    export let store: EntityStorageManager<Entity>;
    export let EntityComponent: ComponentType;
    export let creator: BaseCreator;
    export let title = "No Title";
    export let entityName: string;

    let entities: Entity[] = [];
    let loading = true;
    let error: string | null = null;

    let unsubscribe: () => void;

    onMount(async () => {
        await loadEntities();

        unsubscribe = entityUpdateStore.subscribe(async (updatedEntityTypes) => {
            if (updatedEntityTypes.has(entityName)) {
                await loadEntities();
                clearEntityUpdates();
            }
        });
    });

    onDestroy(() => {
        if (unsubscribe) {
            unsubscribe();
        }
    });

    async function loadEntities() {
        try {
            entities = await store.getAllEntities();
        } catch (e) {
            error = e instanceof Error ? e.message : String(e);
        } finally {
            loading = false;
        }
    }

    async function createEntity() {
        try {
            const newEntities = creator.create();
            console.log("created new Entities in EntityList: ", newEntities);

            const registry = EntityStoreRegistry.getInstance();
            const updatedEntityTypes: string[] = [];

            for(let creationResult of newEntities.getCreationResults()){
                let entity = creationResult.getCreation();
                entity.id = await IdGenerator.generate();
                let typeString = creationResult.getType();
                const entityStore = registry.getStore(typeString);
                if (entityStore) {
                    await entityStore.saveEntity(entity);
                    console.log(`Entities of type ${typeString} saved successfully in ${entityStore}`);
                    updatedEntityTypes.push(typeString);
                }else {
                    console.error(`No store found for entity type: ${typeString}`);
                }
            }

            notifyEntityUpdates(updatedEntityTypes);
        } catch (error) {
            console.error('Error creating entity:', error);
        }
    }
</script>

<div class="container mx-auto p-4">
    <div class="bg-gray-100 rounded-lg shadow-lg p-6">
        <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl font-bold text-blue-700">{title}</h1>
            <button class="btn variant-filled-secondary" on:click={createEntity}>Add</button>
        </div>

        {#if loading}
            <div class="flex justify-center items-center py-8">
                <span class="loading loading-spinner loading-lg"></span>
            </div>
        {:else if error}
            <p class="alert variant-filled-error">{error}</p>
        {:else}
            <div class="overflow-x-auto">
                {#if entities.length === 0}
                    <p class="text-center text-gray-500 dark:text-gray-400 py-8">No entities found</p>
                {:else}
                    <table class="table w-full">
                        <thead>
                        <tr>
                            <th >ID</th>
                            <th >Entity</th>
                        </tr>
                        </thead>
                        <tbody>
                        {#each entities as entity (entity.id)}
                            <tr id="entity-{entity.id}" >
                                <td class="align-top">{entity.id}</td>
                                <td ><svelte:component this={EntityComponent} {entity} /></td>
                            </tr>
                        {/each}
                        </tbody>
                    </table>
                {/if}
            </div>
        {/if}
    </div>
</div>

<style>
    :global(.active) {
        @apply bg-blue-100;
    }

    .entity-row {
        display: grid;
        grid-template-columns: 1fr 3fr;
    }

    .entity-component-wrapper {
        position: relative;
        width: 250px;
    }
</style>