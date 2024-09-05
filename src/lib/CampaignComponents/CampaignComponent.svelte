<script lang="ts">
    import { onMount } from "svelte";
    import { Adventure } from "../../core/entities/adventure/adventure";
    import { TableManager } from "../../core/entities/persist/tableManager";
    import { FunctionFactory } from "../../core/tables/core/entry/functionFactory";
    import { AdventureCreator } from "../../core/entities/adventure/adventureCreator";
    import {
        getSelectedProfile,
        getStorageStrategy,
        getStore, selectedGlobalStore, selectedProfileStore,
    } from "../../core/entities/persist/stores";
    import type { EntityStorageManager } from "../../core/entities/persist/entityStorageManager";
    import type { Entity } from "../../core/entities/entity";
    import type { Deletable } from "../../core/entities/deletable";
    import {get, type Stores} from "svelte/store";
    import { Campaign } from "../../core/entities/campaign/campaign";
    import {NarrativeMediumTypes} from "../../core/entities/campaign/narrativeMediumTypes";
    import {ListBox, ListBoxItem,popup, type PopupSettings} from "@skeletonlabs/skeleton";
    import ButtonComponent from "$lib/Shared/ButtonComponent.svelte";
    import {CampaignCreator} from "../../core/entities/campaign/campaignCreator";
    import type {GlobalEntity} from "../../core/entities/profile/globalEntity";
    import type {Profile} from "../../core/entities/profile/profile";
    import GenreMixComponent from "$lib/CampaignComponents/GenreMixComponent.svelte";

    let globalEntity: GlobalEntity;
    let adventures: Adventure[] = [];
    let tableManager: TableManager;
    let campaign: Campaign = new Campaign();
    let campaignName = "";
    let campaignDescription = "";
    let narrativeMediumType: NarrativeMediumTypes = NarrativeMediumTypes.Book;  // Initialize with a default value
    let profile: Profile;
    $: worldGenerated = campaign.world.id > -1;

    async function generateWorld() {
        let campaignCreator = new CampaignCreator(tableManager)
            .withNarrativeMedium(campaign.settings.narrativeMediumType);
        await campaignCreator.generateWorld(campaign);
        console.log("Campaign in Profile: ", get(selectedProfileStore));
        console.log("World in campaign here: ", campaign)

        let campaignStore = await getStore('campaignStore');
        await campaignStore.saveEntity(campaign);

        console.log("Campaign in store: ", campaign);

        //await saveCampaign(campaign);
        campaign = { ...campaign };
    }

    async function saveCampaign(campaign: Campaign){
        let profile = get(selectedProfileStore);
        if(profile){
            await profile.saveCampaign(campaign);
        }
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
        let storageStrategy = await getStorageStrategy();
        tableManager = await TableManager.getInstance(storageStrategy, new FunctionFactory());

        let tmpGlobal = get(selectedGlobalStore);
        if(tmpGlobal !== null){
            globalEntity = tmpGlobal;
        }
        let campaignStore = await getStore('campaignStore');

        if(globalEntity.currentCampaign !== null){
            campaign = await campaignStore.getEntity(globalEntity.currentCampaignId) as Campaign;
        }
        adventures = campaign.adventures;
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

    }

    async function viewAdventureDetails(updatedAdventure: Adventure) {
        let adventureStore = await getStore("adventureStore");
        for (const adventure of adventures) {
            adventure.isSelected = false;
            await adventureStore.saveEntity(adventure);
        }
        updatedAdventure.isSelected = true;
        await adventureStore.saveEntity(updatedAdventure);
        changeTab(3);
        console.log("adventure view details clicked", updatedAdventure);
    }

    async function addNewAdventure() {
        if (!campaign) return;

        let newAdventure = new AdventureCreator(tableManager)
            .create()
            .getCreation() as Adventure;
        adventures = [...adventures, newAdventure ];
        campaign.adventures = adventures;
        let adventureStore = await getStore('adventureStore');
        await adventureStore.saveEntity(newAdventure);
        let campaignStore = await getStore('campaignStore');
        await campaignStore.saveEntity(campaign);
        adventures = [...adventures ];
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
            } catch (error) {
                console.error('Error deleting adventure:', error);
                alert('An error occurred while deleting the adventure. Please check the console for more details.');
            }
        }
    }

    function gotoProfile(){
        changeTab(1);
    }

    let showTooltip = false;

    function toggleTooltip(show: boolean) {
        showTooltip = show;
    }
</script>

{#if campaign.id < 0}
    <div class="p-4 bg-gray-100 min-h-screen">
        <div class="mb-6">
    <p class="text-gray-600">No campaign is set.</p>
    <button class="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200" on:click={gotoProfile}>Goto Profile</button>
        </div>
    </div>
{:else}
    <div class="p-4 bg-gray-100 min-h-screen">
        <div class="mb-6">
            <h1 class="text-3xl font-bold text-gray-800 mb-4 flex items-center relative">
                Campaign: {campaign.id}
                <button
                        class="ml-2 text-gray-600 hover:text-gray-800 relative"
                        on:mouseover={() => toggleTooltip(true)}
                        on:mouseleave={() => toggleTooltip(false)}
                        on:focus={() => toggleTooltip(true)}
                        on:blur={() => toggleTooltip(false)}
                        aria-label="Campaign ID Info"
                >
                    ?
                </button>
                {#if showTooltip}
                    <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white text-xs rounded p-2 shadow-lg z-50">
                        Campaign is not the same as a role play campaign. It is more of
                        a long term bundle of adventures. The genre, setting and theme are
                        just connected but not the same out of these adventures.
                        Adventures with same genre, setting and/or theme could be set when adding
                        them.
                    </div>
                {/if}
            </h1>

            <div class="bg-white shadow-md rounded-lg p-4">
                <div class="mb-4">
                    <GenreMixComponent genreMix={campaign.genreMix}></GenreMixComponent>
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
            {#if !worldGenerated}
                <button
                        on:click={generateWorld}
                        class="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 text-lg font-bold mx-2"
                >
                    World gen
                </button>
            {:else}
                <button
                        on:click={() => changeTab(4)}
                        class="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200 text-lg font-bold mx-2"
                >
                    Goto Entities
                </button>
            {/if}
            <ButtonComponent
                    text="+"
                    onClick={addNewAdventure}
                    enabled={worldGenerated}
            />
        </div>
        {#if adventures.length > 0}
            <ul class="space-y-4">
                {#each adventures as adventure}
                    <li>
                        <button
                                class="w-full text-left bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200 focus:outline-none"
                                on:click={() => viewAdventureDetails(adventure)}
                                on:keydown={(event) => event.key === 'Enter' || event.key === ' ' ? viewAdventureDetails(adventure) : null}
                        >
                        <span class="flex justify-between items-start">
                            <span class="flex flex-col">
                                <strong class="text-xl font-semibold text-gray-700 block">{adventure.name || `Adventure ${adventure.id}`}</strong>
                            </span>
                            <button
                                    on:click|stopPropagation={() => deleteAdventure(adventure)}
                                    class="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 text-sm font-bold"
                            >
                                -
                            </button>
                        </span>
                        </button>
                    </li>
                {/each}
            </ul>
        {:else}
            <p class="text-gray-600">No adventures available for this campaign.</p>
        {/if}
    </div>
{/if}
