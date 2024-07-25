<script lang="ts">
    import type { Entity } from "../../core/entities/entity";
    import { EntityStorageManager } from "../../core/entities/persist/entityStorageManager";
    import { onMount } from "svelte";
    import type { ComponentType } from "svelte";
    import { Creator } from "../../core/entities/creator";
    import {idGenerator} from "../../core/entities/persist/stores";

    export let store: EntityStorageManager<Entity>;
    export let EntityComponent: ComponentType;
    export let creator: Creator;

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

            // Initialize IDs for new entities
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

<button class="btn variant-filled-secondary" on:click={createEntity}>Add</button>

{#if loading}
    <p>Loading entities...</p>
{:else if error}
    <p>Error: {error}</p>
{:else}
    <ul>
        {#if entities.length === 0}
            <p>No Entity</p>
        {:else}
            {#each entities as entity}
                <li>
                    <svelte:component this={EntityComponent} entity={entity} />
                </li>
            {/each}
        {/if}
    </ul>
{/if}