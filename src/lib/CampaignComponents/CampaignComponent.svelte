<script lang="ts">
    import { onMount } from "svelte";
    import {getStorageStrategy, getStore, selectedCampaign,} from "../../core/entities/persist/stores";
    import { TableManager } from "../../core/entities/persist/tableManager";
    import { FunctionFactory } from "../../core/tables/core/entry/functionFactory";
    import type { Adventure } from "../../core/entities/adventure/adventure";
    import { AdventureCreator } from "../../core/entities/adventure/adventureCreator";
    import type {Campaign} from "../../core/entities/campaign/campaign";

    let adventures: Adventure[] = [];
    let currentAdventure: Adventure | null = null;
    let campaign: Campaign | null;

    selectedCampaign.subscribe(value => {
        campaign = value;
        if (campaign) {
            adventures = campaign.adventures;
        }
    });

    onMount(async () => {
        let storageStrategy = await getStorageStrategy();
        let tableManager = await TableManager.getInstance(storageStrategy, new FunctionFactory());
        let adventureStore = await getStore('adventureStore');
        let allAdventures = await adventureStore.getAllEntities() as Adventure[];
        /*
        selectedCampaign.subscribe(value => {
            currentCampaign = value;
        });
        */

        if(campaign){
            for (const adventure of allAdventures) {
                for(const campaignAdventure of campaign.adventures){
                    if(adventure.id === campaignAdventure.id){
                        adventures.push(adventure);
                    }
                }
            }

            if (adventures.length > 0) {
                currentAdventure = adventures[0];
            }
        }

    });

    function updateAdventureName(event: Event) {
        const input = event.target as HTMLInputElement;
        if (currentAdventure) {
            currentAdventure.name = input.value;
        }
    }

    async function addAdventure() {
        let storageStrategy = await getStorageStrategy();
        let tableManager = await TableManager.getInstance(storageStrategy, new FunctionFactory());
        let newAdventure = new AdventureCreator(tableManager).create().getCreation() as Adventure;
        adventures = [...adventures, newAdventure];
        currentAdventure = newAdventure;
    }
</script>

{#if campaign}

    <div class="p-4 bg-gray-100 min-h-screen">
        <h1 class="text-3xl font-bold mb-6 text-gray-800">Adventures</h1>

        {#if adventures.length === 0}
            <p class="text-gray-600 mb-4">No Adventures Yet</p>
        {:else}
            <ul class="space-y-4 mb-6">
                {#each adventures as adventure (adventure.id)}
                    <li class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
                        <h2 class="text-xl font-semibold text-gray-700">{adventure.name || 'Unnamed Adventure'}</h2>
                        <button class="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200 text-sm">
                            View Details
                        </button>
                    </li>
                {/each}
            </ul>
        {/if}

        <button
                on:click={addAdventure}
                class="mb-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200 shadow-md"
        >
            Add Adventure
        </button>

        {#if currentAdventure}
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 class="text-2xl font-bold mb-4 text-gray-800">Adventure Details</h2>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="adventureName">
                        Adventure Name
                    </label>
                    <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="adventureName"
                            type="text"
                            bind:value={currentAdventure.name}
                            on:input={updateAdventureName}
                    />
                </div>
            </div>
        {/if}
    </div>

{:else}
    <p>No campaign selected</p>
{/if}
