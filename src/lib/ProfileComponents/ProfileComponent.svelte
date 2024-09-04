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
        clearAllStores, selectedGlobalStore, selectedCampaignStore,
    } from "../../core/entities/persist/stores";
    import type { EntityStorageManager } from "../../core/entities/persist/entityStorageManager";
    import type { Entity } from "../../core/entities/entity";
    import type { Deletable } from "../../core/entities/deletable";
    import {get, type Stores} from "svelte/store";
    import { ListBox, ListBoxItem } from "@skeletonlabs/skeleton";
    import { Profile } from "../../core/entities/profile/profile";
    import {GlobalEntity} from "../../core/entities/profile/globalEntity";

    let campaigns: Campaign[] = [];
    let globalEntity: GlobalEntity;
    let profile: Profile = new Profile();
    let tableManager: TableManager;
    let narrativeMediumType: NarrativeMediumTypes = NarrativeMediumTypes.RPG;
    const narrativeMediumOptions = Object.values(NarrativeMediumTypes);

    function nothing(tabIndex: number){
        console.log("not overloaded");
    }
    export let changeTab: (tabIndex: number) => void = nothing;

    onMount(async () => {
        let tmpGlobal = get(selectedGlobalStore);
        if(tmpGlobal !== null){
            globalEntity = tmpGlobal;
        }else{
            globalEntity = new GlobalEntity();
            selectedGlobalStore.set(globalEntity);
            await saveGlobal(globalEntity);
        }

        if(globalEntity.currentProfile !== null){
            profile = globalEntity.currentProfile;
            narrativeMediumType = profile.narrativeMediumType;
            console.log("narrative medium from onMount profile: ",narrativeMediumType)
        }
        await loadCampaigns();
    });

    async function loadCampaigns() {
        let storageStrategy = await getStorageStrategy();
        tableManager = await TableManager.getInstance(storageStrategy, new FunctionFactory());
        if(profile.campaigns){
            campaigns = profile.campaigns;
        }else{
            profile.campaigns = [];
            campaigns = [];
        }

        console.log("Campaigns in profile: ",campaigns);
    }

    async function saveGlobal(globalEntity: GlobalEntity) {
        let globalStore = await getStore('globalStore');
        await globalStore.saveEntity(globalEntity);
    }

    async function viewCampaignDetails(campaign: Campaign) {
        selectedCampaignStore.set(campaign);
        globalEntity.currentCampaign = campaign;
        await saveGlobal(globalEntity);
        changeTab(2);
        console.log("profile view details clicked", campaigns)
    }

    async function addNewCampaign() {
        console.log("create new campaign with ", profile);
        let newCampaign = await new CampaignCreator(tableManager)
            .withNarrativeMedium(profile.narrativeMediumType)
            .create()
        let nCampaign = newCampaign.getCreation() as Campaign;
        profile.campaigns.push(nCampaign);
        campaigns = profile.campaigns;

        await saveProfile(profile);
    }

    async function saveProfile(profile: Profile){
        let profileStore = await getStore('profileStore');
        await profileStore.saveEntity(profile);
    }

    async function deleteCampaign(campaign: Campaign) {
        if (confirm(`Are you sure you want to delete the campaign "${campaign.name || 'Unnamed Campaign'}"? This will also delete all related entities.`)) {
            try {
                let index = profile.campaigns.indexOf(campaign);
                if(index > -1){
                    profile.campaigns.splice(index);
                    await saveProfile(profile);
                }
                let selectedCampaignId = get(selectedCampaignStore)?.id;
                if(selectedCampaignId === campaign.id){
                    selectedCampaignStore.set(null);
                }

                if(globalEntity.currentCampaign?.id === campaign.id){
                    globalEntity.currentCampaign = null;
                    await saveGlobal(globalEntity);
                }

                campaigns = profile.campaigns;
            } catch (error) {
                console.error('Error deleting campaign:', error);
                alert('An error occurred while deleting the campaign. Please check the console for more details.');
            }
        }
    }

    async function handleClearAll() {
        if (confirm("Are you sure you want to clear all data? This action cannot be undone.")) {
            try {
                campaigns = [];
                profile.campaigns = []
                selectedCampaignStore.set(null);
                globalEntity.currentCampaign = null;
                console.log("global id in profile: ", globalEntity.id);
                await saveGlobal(globalEntity);
                await saveProfile(profile);
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
        await saveProfile(profile);
    }

    function gotoStart(){
        changeTab(0);
    }
</script>

{#if profile.id < 0}
    <div class="p-4 bg-gray-100 min-h-screen">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">No profile selected</h1>
        <button class="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200" on:click={gotoStart}>Goto Start</button>
    </div>
    {:else}
        <div class="p-4 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Profile: {profile?.id}</h1>

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
    {/if}