<script lang="ts">
    import {onMount} from "svelte";
    import {
        getStorageStrategy,
        getStore,
        clearAllStores,
        selectedProfileStore, selectedGlobalStore
    } from "../../core/entities/persist/stores";
    import {TableManager} from "../../core/entities/persist/tableManager";
    import {FunctionFactory} from "../../core/tables/core/entry/functionFactory";
    import {Profile} from "../../core/entities/profile/profile";
    import {ProfileCreator} from "../../core/entities/profile/profileCreator";
    import type {EntityStorageManager} from "../../core/entities/persist/entityStorageManager";
    import type {Entity} from "../../core/entities/entity";
    import type {Deletable} from "../../core/entities/deletable";
    import {get, type Stores} from "svelte/store";
    import type {GlobalEntity} from "../../core/entities/profile/globalEntity";

    function nothing(tabIndex: number){
        console.log("not overloaded");
    }
    export let changeTab: (tabIndex: number) => void = nothing;
    let profiles: Profile[] = [];
    let tableManager: TableManager;
    let globalEntity: GlobalEntity;

    onMount(async () => {
        let globalTmp = get(selectedGlobalStore);
        if(globalTmp !== null){
            globalEntity = globalTmp;
        }else{
            let globalStore = await getStore('globalStore');
            let globals = await globalStore.getAllEntities() as GlobalEntity[];
            let global = globals[0];
            selectedGlobalStore.set(global);
            globalEntity = global;
        }

        await loadProfiles();
    });

    async function loadProfiles() {
        let storageStrategy = await getStorageStrategy();
        tableManager = await TableManager.getInstance(storageStrategy, new FunctionFactory());
        let profileStore = await getStore('profileStore');
        profiles = await profileStore.getAllEntities() as Profile[];
        if(profiles.length === 0){
            await addNewProfile();
        }
    }

    async function select(profile: Profile) {
        globalEntity.currentProfile = profile;
        let globalStore = await getStore('globalStore');
        await globalStore.saveEntity(globalEntity);
        changeTab(1);
    }

    async function addNewProfile() {
        let newProfileCreation = await new ProfileCreator(tableManager)
            .create();
        let newProfile = newProfileCreation.getCreation() as Profile;
        let profileStore = await getStore('profileStore');
        await profileStore.saveEntity(newProfile);
        await loadProfiles();
    }

    async function deleteProfile(profile: Profile) {
        if (confirm(`Are you sure you want to delete the profile "${profile.id || 'Unnamed Profile'}"? This will also delete all related entities.`)) {
            try {
                const profileStore = await getStore('profileStore') as unknown as EntityStorageManager<Profile>;
                if(globalEntity.currentProfile === profile){
                    globalEntity.currentProfile = null;
                    selectedProfileStore.set(null);
                    let globalStore = await getStore('globalStore');
                    await globalStore.saveEntity(globalEntity);
                }
                const getTypedStore = (storeName: string): Promise<EntityStorageManager<Entity & Deletable>> =>
                    getStore(storeName as keyof Stores) as Promise<EntityStorageManager<Entity & Deletable>>;

                if (typeof profile.prepareForDeletion === 'function') {
                    await profileStore.cascadeDelete(profile, getTypedStore);
                } else {
                    const newProfile = Object.assign(new Profile(), profile);
                    await profileStore.cascadeDelete(newProfile, getTypedStore);
                }

                profiles = profiles.filter(p => p.id !== profile.id);
            } catch (error) {
                console.error('Error deleting profile:', error);
                alert('An error occurred while deleting the profile. Please check the console for more details.');
            }
        }
    }

    async function handleClearAll() {
        if (confirm("Are you sure you want to clear all profiles? This action cannot be undone.")) {
            try {
                let globalStore = await getStore('globalStore');
                let globals = await globalStore.getAllEntities();
                for (const global of globals) {
                    await globalStore.deleteEntity(global.id);
                }
                let profileStore = await getStore('profileStore');
                let allProfiles = await profileStore.getAllEntities() as Profile[];
                console.log("have ", allProfiles);
                for (const curProfile of allProfiles) {
                    console.log("delted",curProfile.id);
                    await profileStore.deleteEntity(curProfile.id);
                }
                await clearAllStores();
                profiles = [];
                alert("All profiles have been cleared successfully.");
                await addNewProfile();
            } catch (error) {
                console.error('Error clearing all profiles:', error);
                alert('An error occurred while clearing all profiles. Please check the console for more details.');
            }
        }
    }
</script>

<div class="p-4 bg-gray-100 min-h-screen">
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-gray-800">Profiles</h1>
        <div class="space-x-2">
            <button
                    on:click={addNewProfile}
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
    {#if profiles.length > 0}
        <ul class="space-y-4">
            {#each profiles as profile, index}
                <li>
                    <button
                            class="w-full text-left bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200 focus:outline-none"
                            on:click={() => select(profile)}
                            on:keydown={(event) => event.key === 'Enter' || event.key === ' ' ? select(profile) : null}
                    >
                        <div class="flex justify-between items-start">
                            <h2 class="text-xl font-semibold text-gray-700">Profile ID: {profile.id}</h2>
                            <button
                                    on:click|stopPropagation={() => deleteProfile(profile)}
                                    class="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 text-sm font-bold"
                            >
                                -
                            </button>
                        </div>
                    </button>
                </li>
            {/each}
        </ul>
    {:else}
        <p class="text-gray-600">No profiles available.</p>
    {/if}
</div>
