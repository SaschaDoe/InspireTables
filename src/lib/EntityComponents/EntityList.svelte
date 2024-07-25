<script lang="ts">
    import type { Entity } from "../../core/entities/entity";
    import { EntityStorageManager } from "../../core/entities/persist/entityStorageManager";
    import { onMount } from "svelte";
    import type { ComponentType } from "svelte";
    import { Creator } from "../../core/entities/creator";
    import { idGenerator } from "../../core/entities/persist/stores";

    export let store: EntityStorageManager<Entity>;
    export let EntityComponent: ComponentType;
    export let creator: Creator;
    export let title = "No Title";

    let entities: Entity[] = [];
    let loading = true;
    let error: string | null = null;

    onMount(async () => {
        try {
            entities = await store.getAllEntities();
        } catch (e) {
            error = e instanceof Error ? e.message : String(e);
        } finally {
            loading = false;
        }
    });

    async function createEntity() {
        try {
            const newEntities = creator.create();
            console.log("created new Entity in EntityList: ", newEntities);

            await Promise.all(newEntities.map(async (entity) => {
                entity.id = await idGenerator.generateId();
            }));

            await store.saveSpecificEntities(newEntities);
            entities = await store.getAllEntities();
        } catch (error) {
            console.error('Error creating entity:', error);
        }
    }
</script>

<div class="w-full flex flex-col">
    <div class="bg-surface-100 border border-surface-300 rounded-lg shadow-lg p-6 flex-grow overflow-hidden flex flex-col">
        <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl font-bold text-blue-700">{title}</h1>
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
                            <tr>
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
</style>