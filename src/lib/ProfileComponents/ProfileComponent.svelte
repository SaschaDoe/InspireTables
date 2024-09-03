<script lang="ts">
    import { Campaign } from "../../core/entities/campaign/campaign";
    import { onMount } from "svelte";
    import { popup, type PopupSettings } from "@skeletonlabs/skeleton";
    import { TableManager } from "../../core/entities/persist/tableManager";
    import { FunctionFactory } from "../../core/tables/core/entry/functionFactory";
    import { CampaignCreator } from "../../core/entities/campaign/campaignCreator";
    import { NarrativeMediumTypes } from "../../core/entities/campaign/narrativeMediumTypes";
    import {
        getStorageStrategy,
        getStore,
        clearAllStores, selectedProfileStore,
    } from "../../core/entities/persist/stores";
    import type { EntityStorageManager } from "../../core/entities/persist/entityStorageManager";
    import type { Entity } from "../../core/entities/entity";
    import type { Deletable } from "../../core/entities/deletable";
    import type { Stores } from "svelte/store";
    import { ListBox, ListBoxItem } from "@skeletonlabs/skeleton";
    import { Profile } from "../../core/entities/profile/profile";

    let campaigns: Campaign[] = [];
    let profile: Profile = new Profile();
    let tableManager: TableManager;
    let narrativeMediumType: NarrativeMediumTypes = NarrativeMediumTypes.Book;
    const narrativeMediumOptions = Object.values(NarrativeMediumTypes);

    function nothing(tabIndex: number){
        console.log("not overloaded");
    }
    export let changeTab: (tabIndex: number) => void = nothing;

    onMount(async () => {
        console.log("profile on mount")
        let profileStore = await getStore('profileStore');
        let profiles = await profileStore.getAllEntities() as Profile[];

        if(profiles.length === 0) {
            return;
        }

        for (const p of profiles) {
            if(p.isSelected){
                profile = p;
                narrativeMediumType = p.narrativeMediumType || NarrativeMediumTypes.Book;
                console.log("selected profile found", profile);
                break;
            }
        }

        if(!profile){
            profile = profiles[0];
            profile.isSelected = true;
            selectedProfileStore.set(profile);
            narrativeMediumType = profile.narrativeMediumType || NarrativeMediumTypes.Book;
            console.log("Profile is selected because no was", profile);
        }

        await loadCampaigns();
    });

    async function loadCampaigns() {
        let storageStrategy = await getStorageStrategy();
        tableManager = await TableManager.getInstance(storageStrategy, new FunctionFactory());
        let campaignStore = await getStore('campaignStore');
        campaigns = await campaignStore.getAllEntities() as Campaign[];
    }

    async function viewCampaignDetails(campaign: Campaign) {
        let campaignStore = await getStore('campaignStore');
        let campaigns = await campaignStore.getAllEntities() as Campaign[];
        for (const c of campaigns) {
            c.isSelected = false;
            await campaignStore.saveEntity(c);
        }
        campaign.isSelected = true;
        await campaignStore.saveEntity(campaign);
        changeTab(2);
        console.log("profile view details clicked")
    }

    async function addNewCampaign() {
        console.log("create new campaign with ", profile)
        let newCampaign = new CampaignCreator(tableManager)
            .withNarrativeMedium(profile.narrativeMediumType)
            .create()
            .getCreation() as Campaign;
        let campaignStore = await getStore('campaignStore');
        await campaignStore.saveEntity(newCampaign);
        await loadCampaigns();
    }

    async function deleteCampaign(campaign: Campaign) {
        if (confirm(`Are you sure you want to delete the campaign "${campaign.name || 'Unnamed Campaign'}"? This will also delete all related entities.`)) {
            try {
                const campaignStore = await getStore('campaignStore') as unknown as EntityStorageManager<Campaign>;
                campaigns = await campaignStore.getAllEntities();
                let newSelection = false;
                if(campaign.isSelected && campaigns.length > 1){
                    newSelection = true;
                }
                const getTypedStore = async (storeName: string): Promise<EntityStorageManager<Entity & Deletable>> => {
                    return await getStore(storeName as keyof Stores) as EntityStorageManager<Entity & Deletable>;
                };
                if (typeof campaign.prepareForDeletion === 'function') {
                    await campaignStore.cascadeDelete(campaign, getTypedStore);
                } else {
                    const newCampaign = Object.assign(new Campaign(), campaign);
                    await campaignStore.cascadeDelete(newCampaign, getTypedStore);
                }

                console.log("filter out campaign with id", campaign.id);
                campaigns = await campaignStore.getAllEntities();
                console.log("campaigns after filtering",campaigns)
                if(newSelection){
                    let newSelectedCampaign = campaigns[0];
                    newSelectedCampaign.isSelected = true;
                    await campaignStore.saveEntity(newSelectedCampaign);
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
                let idStore = await getStore('lastIdStore');
                let lastId = await idStore.getValue();
                if(lastId != null){
                    await clearAllStores();
                    await idStore.setValue(lastId);
                }
                campaigns = [];
                alert("All data has been cleared successfully.");
            } catch (error) {
                console.error('Error clearing all data:', error);
                alert('An error occurred while clearing all data. Please check the console for more details.');
            }
        }
    }

    const popupCombobox: PopupSettings = {
        event: 'click',
        target: 'popupCombobox',
        placement: 'bottom',
        closeQuery: '.listbox-item'
    };

    async function handleNarrativeMediumChange(newType: NarrativeMediumTypes) {
        narrativeMediumType = newType;
        profile.narrativeMediumType = newType;

        let profileStore = await getStore('profileStore');
        await profileStore.saveEntity(profile);
    }
</script>

<div class="p-4 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Profile: {profile?.id || 'No Profile Selected'}</h1>

    <div class="mb-6">
        <label for="narrativeMediumType" class="block text-sm font-medium text-gray-700">Narrative Medium Type</label>
        <button class="btn variant-filled w-full justify-between" use:popup={popupCombobox}>
            <span class="capitalize">{narrativeMediumType}</span>
            <span>↓</span>
        </button>
        <div class="card w-32 shadow-xl" data-popup="popupCombobox">
            <ListBox rounded="rounded-none">
                {#each narrativeMediumOptions as option}
                    <ListBoxItem
                            bind:group={narrativeMediumType}
                            name="narrativeMedium"
                            value={option}
                            on:click={() => handleNarrativeMediumChange(option)}
                    >
                        {option}
                    </ListBoxItem>
                {/each}
            </ListBox>
            <div class="arrow bg-surface-100-800-token" />
        </div>
    </div>

    <!-- Campaigns Section -->
    <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Campaigns</h2>
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

    <!-- Campaigns List -->
    {#if campaigns.length > 0}
        <ul class="space-y-4">
            {#each campaigns as campaign, index}
                <li>
                    <button
                            class="w-full text-left bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200 focus:outline-none"
                            on:click={() => viewCampaignDetails(campaign)}
                            on:keydown={(event) => event.key === 'Enter' || event.key === ' ' ? viewCampaignDetails(campaign) : null}
                    >
                    <span class="flex justify-between items-start">
                        <span class="flex flex-col">
                            <strong class="text-xl font-semibold text-gray-700 block">{campaign.name || `Campaign`}: {campaign.id}</strong>
                            <small class="text-gray-600 mt-2 block">Narrative Medium: {campaign.settings.narrativeMediumType}</small>
                    </span>
                    <button
                            on:click|stopPropagation={() => deleteCampaign(campaign)}
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
        <p class="text-gray-600">No campaigns available.</p>
    {/if}
</div>
