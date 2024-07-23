<script lang="ts">
    import { onMount } from 'svelte';
    import type { Illness } from "../../core/entities/illness";
    import { IllnessCreator } from "../../core/entities/illnessCreator";
    import { EntityStorageManager } from "../../core/entities/entityStorageManager";

    let illnesses: Illness[] = [];
    let illnessCreator = new IllnessCreator();
    let illnessStore = new EntityStorageManager<Illness>('illness');

    onMount(async () => {
        await loadIllnesses();
    });

    async function loadIllnesses() {
        try {
            illnesses = await illnessStore.getAllEntities();
            console.log('Loaded illnesses:', illnesses);
        } catch (error) {
            console.error('Error loading illnesses:', error);
            illnesses = [];
        }
    }

    async function createIllness() {
        try {
            const newIllness = await illnessCreator.createWithPersistence();
            await illnessStore.saveEntity(newIllness);
            illnesses = [...illnesses, newIllness];
        } catch (error) {
            console.error('Error creating illness:', error);
        }
    }

    async function removeIllness(id: number) {
        try {
            await illnessStore.removeEntity(id);
            illnesses = illnesses.filter(illness => illness.id !== id);
        } catch (error) {
            console.error('Error removing illness:', error);
        }
    }
</script>

<main>
    <h1>Illness Manager</h1>

    <button on:click={createIllness}>Create New Illness</button>

    <ul>
        {#each illnesses as illness (illness.id)}
            <li>
                {illness.type} - {illness.adjective}
                <button on:click={() => removeIllness(illness.id)}>Remove</button>
            </li>
        {/each}
    </ul>
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

    ul {
        list-style-type: none;
        padding: 0;
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