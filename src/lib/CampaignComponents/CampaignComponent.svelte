<script lang="ts">
    import { onMount } from "svelte";
    import { Adventure } from "../../core/entities/adventure/adventure";
    import { TableManager } from "../../core/entities/persist/tableManager";
    import { FunctionFactory } from "../../core/tables/core/entry/functionFactory";
    import { AdventureCreator } from "../../core/entities/adventure/adventureCreator";
    import {
        getStorageStrategy,
        getStore,
        selectedAdventure,
        selectedCampaign
    } from "../../core/entities/persist/stores";
    import type { EntityStorageManager } from "../../core/entities/persist/entityStorageManager";
    import type { Entity } from "../../core/entities/entity";
    import type { Deletable } from "../../core/entities/deletable";
    import type { Stores } from "svelte/store";
    import type { Campaign } from "../../core/entities/campaign/campaign";

    let adventures: Adventure[] = [];
    let tableManager: TableManager;
    let campaign: Campaign | null = null;

    function nothing(tabIndex: number) {
        console.log("not overloaded");
    }
    export let changeTab: (tabIndex: number) => void = nothing;

    onMount(async () => {
        let storageStrategy = await getStorageStrategy();
        tableManager = await TableManager.getInstance(storageStrategy, new FunctionFactory());

        selectedCampaign.subscribe(value => {
            campaign = value;
            if (campaign) {
                adventures = campaign.adventures;
            }
        });

        if (adventures.length === 0) {
            await addNewAdventure();
        }
    });

    function viewAdventureDetails(updatedAdventure: Adventure) {
        selectedAdventure.update(adventure => {
            if (adventure) {
                adventure = updatedAdventure;
            }
            return adventure;
        });
        changeTab(2);
        console.log("adventure view details clicked");
    }

    async function addNewAdventure() {
        if (!campaign) return;

        let newAdventure = new AdventureCreator(tableManager)
            .create()
            .getCreation() as Adventure;
        adventures = [...adventures, newAdventure];
        campaign.adventures = adventures;
        let adventureStore = await getStore('adventureStore');
        await adventureStore.saveEntity(newAdventure);
        selectedCampaign.set(campaign);
    }

    async function deleteAdventure(adventure: Adventure) {
        if (!campaign) return;

        if (confirm(`Are you sure you want to delete the adventure "${adventure.name || 'Unnamed Adventure'}"? This action cannot be undone.`)) {
            try {
                const adventureStore = await getStore('adventureStore') as unknown as EntityStorageManager<Adventure>;

                const getTypedStore = (storeName: string): Promise<EntityStorageManager<Entity & Deletable>> =>
                    getStore(storeName as keyof Stores) as Promise<EntityStorageManager<Entity & Deletable>>;

                if (typeof adventure.prepareForDeletion === 'function') {
                    await adventureStore.cascadeDelete(adventure, getTypedStore);
                } else {
                    const newAdventure = Object.assign(new Adventure(), adventure);
                    await adventureStore.cascadeDelete(newAdventure, getTypedStore);
                }

                adventures = adventures.filter(a => a.id !== adventure.id);
                campaign.adventures = adventures;
                selectedCampaign.set(campaign);
            } catch (error) {
                console.error('Error deleting adventure:', error);
                alert('An error occurred while deleting the adventure. Please check the console for more details.');
            }
        }
    }
</script>

<div class="p-4 bg-gray-100 min-h-screen">
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-gray-800">Adventures</h1>
        <button
                on:click={addNewAdventure}
                class="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200 text-xl font-bold"
        >
            +
        </button>
    </div>
    {#if adventures.length > 0}
        <ul class="space-y-4">
            {#each adventures as adventure (adventure.id)}
                <li class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
                    <div class="flex justify-between items-start">
                        <div>
                            <h2 class="text-xl font-semibold text-gray-700">{adventure.name || `Adventure ${adventure.id}`}</h2>
                            <!-- Add more adventure details here if needed -->
                        </div>
                        <button
                                on:click={() => deleteAdventure(adventure)}
                                class="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 text-sm font-bold"
                        >
                            -
                        </button>
                    </div>
                    <button
                            on:click={() => viewAdventureDetails(adventure)}
                            class="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
                    >
                        View Details
                    </button>
                </li>
            {/each}
        </ul>
    {:else}
        <p class="text-gray-600">No adventures available for this campaign.</p>
    {/if}
</div>