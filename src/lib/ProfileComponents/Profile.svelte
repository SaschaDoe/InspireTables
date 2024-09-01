<script lang="ts">
    import { Campaign } from "../../core/entities/campaign/campaign";
    import { onMount } from "svelte";
    import { TableManager } from "../../core/entities/persist/tableManager";
    import { FunctionFactory } from "../../core/tables/core/entry/functionFactory";
    import { CampaignCreator } from "../../core/entities/campaign/campaignCreator";
    import { NarrativeMediumTypes } from "../../core/entities/campaign/narrativeMediumTypes";
    import { getStorageStrategy, getStore, selectedCampaign, clearAllStores } from "../../core/entities/persist/stores";
    import type {EntityStorageManager} from "../../core/entities/persist/entityStorageManager";
    import type {Entity} from "../../core/entities/entity";
    import type {Deletable} from "../../core/entities/deletable";
    import type {Stores} from "svelte/store";

    let campaigns: Campaign[] = [];
    let tableManager: TableManager;

    function nothing(tabIndex: number){
        console.log("not overloaded");
    }
    // Create a function to change the active tab
    export let changeTab: (tabIndex: number) => void = nothing;

    onMount(async () => {
        await loadCampaigns();
    });

    async function loadCampaigns() {
        let storageStrategy = await getStorageStrategy();
        tableManager = await TableManager.getInstance(storageStrategy, new FunctionFactory());
        let campaignStore = await getStore('campaignStore');
        campaigns = await campaignStore.getAllEntities() as Campaign[];

        if (campaigns.length !== 0) {
            selectedCampaign.set(campaigns[0]);
        } else {
            selectedCampaign.set(null);
        }
    }

    function viewCampaignDetails(campaign: Campaign) {
        selectedCampaign.set(campaign);
        changeTab(1);
        console.log("profile view details clicked")
    }

    async function addNewCampaign() {
        let newCampaign = new CampaignCreator(tableManager)
            .withNarrativeMedium(NarrativeMediumTypes.Book)
            .create()
            .getCreation() as Campaign;
        campaigns = [...campaigns, newCampaign];
        let campaignStore = await getStore('campaignStore');
        await campaignStore.saveEntity(newCampaign);
    }

    async function deleteCampaign(campaign: Campaign) {
        if (confirm(`Are you sure you want to delete the campaign "${campaign.name || 'Unnamed Campaign'}"? This will also delete all related entities.`)) {
            try {
                const campaignStore = await getStore('campaignStore') as unknown as EntityStorageManager<Campaign>;

                const getTypedStore = (storeName: string): Promise<EntityStorageManager<Entity & Deletable>> =>
                    getStore(storeName as keyof Stores) as Promise<EntityStorageManager<Entity & Deletable>>;

                if (typeof campaign.prepareForDeletion === 'function') {
                    await campaignStore.cascadeDelete(campaign, getTypedStore);
                } else {
                    const newCampaign = Object.assign(new Campaign(), campaign);
                    await campaignStore.cascadeDelete(newCampaign, getTypedStore);
                }

                campaigns = campaigns.filter(c => c.id !== campaign.id);

                if (campaigns.length > 0) {
                    selectedCampaign.set(campaigns[0]);
                } else {
                    selectedCampaign.set(null);
                }
            } catch (error) {
                console.error('Error deleting campaign:', error);
                alert('An error occurred while deleting the campaign. Please check the console for more details.');
            }
        }
    }

    async function handleClearAll() {
        if (confirm("Are you sure you want to clear all data? This action cannot be undone.")) {
            try {
                await clearAllStores();
                campaigns = [];
                selectedCampaign.set(null);
                alert("All data has been cleared successfully.");
            } catch (error) {
                console.error('Error clearing all data:', error);
                alert('An error occurred while clearing all data. Please check the console for more details.');
            }
        }
    }
</script>

<div class="p-4 bg-gray-100 min-h-screen">
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-gray-800">Campaigns</h1>
        <div class="space-x-2">
            <button
                    on:click={addNewCampaign}
                    class="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200 text-xl font-bold"
            >
                +
            </button>
            <button
                    on:click={handleClearAll}
                    class="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 text-sm font-bold"
            >
                Clear All
            </button>
        </div>
    </div>
    {#if campaigns.length > 0}
        <ul class="space-y-4">
            {#each campaigns as campaign, index}
                <li class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
                    <div class="flex justify-between items-start">
                        <div>
                            <h2 class="text-xl font-semibold text-gray-700">{campaign.name || `Campaign`}:{campaign.id}</h2>
                            <p class="text-gray-600 mt-2">Narrative Medium: {campaign.settings.narrativeMediumType}</p>
                        </div>
                        <button
                                on:click={() => deleteCampaign(campaign)}
                                class="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 text-sm font-bold"
                        >
                            -
                        </button>
                    </div>
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