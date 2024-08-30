<script lang="ts">
    import {onMount} from "svelte";
    import {getStorageStrategy, getStore} from "../../core/entities/persist/stores";
    import {TableManager} from "../../core/entities/persist/tableManager";
    import {FunctionFactory} from "../../core/tables/core/entry/functionFactory";
    import {Campaign} from "../../core/entities/campaign/campaign";
    import {Settings} from "../../core/entities/campaign/settings";
    import {NarrativeMediumTypes} from "../../core/entities/campaign/narrativeMediumTypes";
    import {CampaignCreator} from "../../core/entities/campaign/campaignCreator";

    let campaigns: Campaign[] = [];
    let currentCampaign: Campaign;

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

        currentCampaign = campaigns[0];
    });

    function updateCampaignName(event: Event) {
        const input = event.target as HTMLInputElement;
        currentCampaign.name = input.value;
    }

    function updateNarrativeMedium(event: Event) {
        const select = event.target as HTMLSelectElement;
        currentCampaign.settings.narrativeMediumType = select.value as NarrativeMediumTypes;
    }
</script>

{#if currentCampaign}
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Campaign Card</h2>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="campaignName">
                Campaign Name
            </label>
            <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="campaignName"
                    type="text"
                    bind:value={currentCampaign.name}
                    on:input={updateCampaignName}
            />
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="narrativeMedium">
                Narrative Medium
            </label>
            <select
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="narrativeMedium"
                    bind:value={currentCampaign.settings.narrativeMediumType}
                    on:change={updateNarrativeMedium}
            >
                {#each Object.values(NarrativeMediumTypes) as medium}
                    <option value={medium}>{medium}</option>
                {/each}
            </select>
        </div>
    </div>
{/if}

<style>
    :global(*) {
        @apply text-gray-900;
    }
</style>