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
    import { Campaign } from "../../core/entities/campaign/campaign";
    import {NarrativeMediumTypes} from "../../core/entities/campaign/narrativeMediumTypes";
    import {ListBox, ListBoxItem,popup, type PopupSettings} from "@skeletonlabs/skeleton";
    import ButtonComponent from "$lib/Shared/ButtonComponent.svelte";
    import {CampaignCreator} from "../../core/entities/campaign/campaignCreator";


    let adventures: Adventure[] = [];
    let tableManager: TableManager;
    let campaign: Campaign = new Campaign();
    let campaignName = "";
    let campaignDescription = "";
    let narrativeMediumType: NarrativeMediumTypes = NarrativeMediumTypes.Book;  // Initialize with a default value

    function generateWorld() {
        let campaignCreator = new CampaignCreator(tableManager)
            .withNarrativeMedium(campaign.settings.narrativeMediumType);
        campaignCreator.generateWorld(campaign);
    }

    const popupCombobox: PopupSettings = {
        event: 'click',
        target: 'popupCombobox',
        placement: 'bottom',
        closeQuery: '.listbox-item'
    };

    const narrativeMediumOptions = Object.values(NarrativeMediumTypes);

    $: if (campaignName !== campaign.name || campaignDescription !== campaign.description || narrativeMediumType !== campaign.settings.narrativeMediumType) {
        updateCampaign();
    }

    function nothing(tabIndex: number) {
        console.log("not overloaded");
    }
    export let changeTab: (tabIndex: number) => void = nothing;

    onMount(async () => {
        console.log(narrativeMediumOptions);
        let storageStrategy = await getStorageStrategy();
        tableManager = await TableManager.getInstance(storageStrategy, new FunctionFactory());

        selectedCampaign.subscribe(value => {
            if(value !== null){
                campaign = value;
                adventures = campaign.adventures;
                campaignName = campaign.name;
                campaignDescription = campaign.description;
                narrativeMediumType = campaign.settings.narrativeMediumType || NarrativeMediumTypes.Book;
            }
        });


    });

    async function updateCampaign() {
        if(campaign.id < 0){
            return;
        }
        console.log("update campaign is triggered", campaign);
        campaign.name = campaignName;
        campaign.description = campaignDescription;
        campaign.settings.narrativeMediumType = narrativeMediumType;
        let campaignStore = await getStore('campaignStore');
        await campaignStore.saveEntity(campaign);
        selectedCampaign.set(campaign);
    }

    function viewAdventureDetails(updatedAdventure: Adventure) {
        selectedAdventure.set(updatedAdventure);
        changeTab(2);
        console.log("adventure view details clicked", updatedAdventure);
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

    $: let worldDefined = !!campaign.world;
</script>

<div class="p-4 bg-gray-100 min-h-screen">
    <div class="mb-6">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">Campaign: {campaign.id}</h1>
        <div class="bg-white shadow-md rounded-lg p-4">
            <div class="mb-4">
                <label for="campaignName" class="block text-sm font-medium text-gray-700">Campaign Name</label>
                <input
                        type="text"
                        id="campaignName"
                        bind:value={campaignName}
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                />
            </div>
            <div class="mb-4">
                <label for="campaignDescription" class="block text-sm font-medium text-gray-700">Campaign Description</label>
                <textarea
                        id="campaignDescription"
                        bind:value={campaignDescription}
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                        rows="3"
                ></textarea>
            </div>
            <div class="mb-4">
                <label for="narrativeMediumType" class="block text-sm font-medium text-gray-700">Narrative Medium Type</label>
                <button class="btn variant-filled w-full justify-between" use:popup={popupCombobox}>
                    <span class="capitalize">{narrativeMediumType}</span>
                    <span>↓</span>
                </button>
                <div class="card w-32 shadow-xl" data-popup="popupCombobox">
                    <ListBox rounded="rounded-none">
                        {#each narrativeMediumOptions as option}
                            <ListBoxItem bind:group={narrativeMediumType} name="narrativeMedium" value={option}>
                                {option}
                            </ListBoxItem>
                        {/each}
                    </ListBox>
                    <div class="arrow bg-surface-100-800-token" />
                </div>
            </div>
        </div>
    </div>

    <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Adventures</h2>
        <button
                on:click={generateWorld}
                class="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 text-xl font-bold"
        >
            Generate World
        </button>
        <ButtonComponent
                text="+"
                onClick={addNewAdventure}
                enabled={worldDefined}
        />
    </div>
    {#if adventures.length > 0}
        <ul class="space-y-4">
            {#each adventures as adventure (adventure.id)}
                <li class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
                    <div class="flex justify-between items-start">
                        <div>
                            <h2 class="text-xl font-semibold text-gray-700">{adventure.name || `Adventure ${adventure.id}`}</h2>
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
