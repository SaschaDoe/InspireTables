<script lang="ts">
    import type { Entity } from "../../core/entities/entity";
    import { EntityStorageManager } from "../../core/entities/persist/entityStorageManager";
    import { onMount, onDestroy } from "svelte";
    import type { ComponentType } from "svelte";
    import { Creator, type CreatedEntities } from "../../core/entities/creator";
    import { idGenerator } from "../../core/entities/persist/stores";
    import { EntityStoreRegistry } from "../../core/entities/persist/entityStoreRegistry";
    import { clearEntityUpdates, entityUpdateStore, notifyEntityUpdates } from "$lib/EntityComponents/entityStore";

    export let store: EntityStorageManager<Entity>;
    export let EntityComponent: ComponentType;
    export let creator: Creator;
    export let title = "No Title";
    export let entityName: string;  // New prop for the singular entity name
    export let activeEntityId = -1;
    export let activeType = "";

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
            const newEntities: CreatedEntities = creator.create();
            console.log("created new Entities in EntityList: ", newEntities);

            const registry = EntityStoreRegistry.getInstance();
            const updatedEntityTypes: string[] = [];

            for (const [entityType, entityArray] of Object.entries(newEntities)) {
                await Promise.all(entityArray.map(async (entity) => {
                    entity.id = await idGenerator.generateId();
                }));

                const entityStore = registry.getStore(entityType);
                if (entityStore) {
                    await entityStore.saveSpecificEntities(entityArray);
                    console.log(`Entities of type ${entityType} saved successfully in ${entityStore}`);
                    updatedEntityTypes.push(entityType);
                } else {
                    console.error(`No store found for entity type: ${entityType}`);
                }
            }

            notifyEntityUpdates(updatedEntityTypes);
        } catch (error) {
            console.error('Error creating entity:', error);
        }
    }
</script>

<div class="w-full flex flex-col">
    <div class=" bg-gray-100 rounded-lg shadow-lg p-6 flex-grow overflow-hidden flex flex-col {activeType === entityName ? 'border-blue-500 border-2' : ''}">
        <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl font-bold {activeType === entityName ? 'text-blue-700' : 'text-gray-700'}">{title}</h1>
            <button class="btn variant-filled-secondary" on:click={createEntity}>Add</button>
        </div>

        {#if loading}
            <div class="flex justify-center items-center py-8 flex-grow">
                <span class="loading loading-spinner loading-lg"></span>
            </div>
        {:else if error}
            <p class="alert variant-filled-error">{error}</p>
        {:else}
            <div class="overflow-auto flex-grow">
                {#if entities.length === 0}
                    <p class="text-center text-gray-500 dark:text-gray-400 py-8">No entities found</p>
                {:else}
                    <table class="table table-hover w-full">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Entity</th>
                        </tr>
                        </thead>
                        <tbody>
                        {#each entities as entity (entity.id)}
                            <tr
                                    id="entity-{entity.id}"
                                    class="transition-colors duration-200 ease-in-out hover:bg-surface-200"
                                    class:active={entity.id === activeEntityId && activeType === entityName}
                            >
                                <td>{entity.id}</td>
                                <td>
                                    <svelte:component this={EntityComponent} {entity} />
                                </td>
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
    /* Ensure the component takes up full width and height of its container */
    div {
        min-height: 0; /* This is crucial for nested flex containers */
    }

    .active {
        @apply bg-blue-100 dark:bg-blue-900;
    }
</style>