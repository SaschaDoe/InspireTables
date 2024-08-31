<script lang="ts">
    import { Campaign } from "../../core/entities/campaign/campaign";
    import { onMount } from "svelte";
    import { TableManager } from "../../core/entities/persist/tableManager";
    import { FunctionFactory } from "../../core/tables/core/entry/functionFactory";
    import { CampaignCreator } from "../../core/entities/campaign/campaignCreator";
    import { NarrativeMediumTypes } from "../../core/entities/campaign/narrativeMediumTypes";
    import { writable } from 'svelte/store';
    import {getStorageStrategy, getStore, selectedCampaign} from "../../core/entities/persist/stores";

    let campaigns: Campaign[] = [];
    let currentCampaign: Campaign;

    function nothing(tabIndex: number){
        console.log("not overloaded");
    }
    // Create a function to change the active tab
    export let changeTab: (tabIndex: number) => void = nothing;

    onMount(async () => {
        let storageStrategy = await getStorageStrategy();
        let tableManager = await TableManager.getInstance(storageStrategy, new FunctionFactory());
        let campaignStore = await getStore('campaignStore');
        campaigns = await campaignStore.getAllEntities() as Campaign[];

        if (campaigns.length === 0) {
            let campaign = new CampaignCreator(tableManager)
                .withNarrativeMedium(NarrativeMediumTypes.Book)
                .create()
                .getCreation() as Campaign;
            campaigns.push(campaign);
        }

        selectedCampaign.set(campaigns[0]);
    });

    function viewCampaignDetails(campaign: Campaign) {
        selectedCampaign.set(campaigns[0]);
        changeTab(1);
        console.log("profile view details clicked")
    }
</script>

<div class="p-4 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-gray-800">Campaigns</h1>
    {#if campaigns.length > 0}
        <ul class="space-y-4">
            {#each campaigns as campaign, index}
                <li class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
                    <h2 class="text-xl font-semibold text-gray-700">{campaign.name || `Campaign ${index + 1}`}</h2>
                    <p class="text-gray-600 mt-2">Narrative Medium: {campaign.settings.narrativeMediumType}</p>
                    <button
                            on:click={() => viewCampaignDetails(campaign)}
                            class="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
                    >
                        View Details
                    </button>
                </li>
            {/each}
        </ul>
    {:else}
        <p class="text-gray-600">No campaigns available.</p>
    {/if}
</div>