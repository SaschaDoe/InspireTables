<script lang="ts">
    import {onMount} from "svelte";
    import {getStorageStrategy, getStore, selectedProfile, clearAllStores} from "../../core/entities/persist/stores";
    import {TableManager} from "../../core/entities/persist/tableManager";
    import {FunctionFactory} from "../../core/tables/core/entry/functionFactory";
    import {Profile} from "../../core/entities/profile/profile";
    import {ProfileCreator} from "../../core/entities/profile/profileCreator";
    import type {EntityStorageManager} from "../../core/entities/persist/entityStorageManager";
    import type {Entity} from "../../core/entities/entity";
    import type {Deletable} from "../../core/entities/deletable";
    import type {Stores} from "svelte/store";

    function nothing(tabIndex: number){
        console.log("not overloaded");
    }
    export let changeTab: (tabIndex: number) => void = nothing;
    let profiles: Profile[] = [];
    let tableManager: TableManager;

    onMount(async () => {
        await loadProfiles();
    });

    async function loadProfiles() {
        let storageStrategy = await getStorageStrategy();
        tableManager = await TableManager.getInstance(storageStrategy, new FunctionFactory());
        let profileStore = await getStore('profileStore');
        profiles = await profileStore.getAllEntities() as Profile[];

        if (profiles.length !== 0) {
            selectedProfile.set(profiles[0]);
        } else {
            selectedProfile.set(null);
        }
    }

    function viewProfileDetails(profile: Profile) {
        selectedProfile.set(profile);
        changeTab(1);
        console.log("profile view details clicked");
    }

    async function addNewProfile() {
        let newProfile = new ProfileCreator(tableManager)
            .create()
            .getCreation() as Profile;
        let profileStore = await getStore('profileStore');
        await profileStore.saveEntity(newProfile);
        await loadProfiles();
    }

    async function deleteProfile(profile: Profile) {
        if (confirm(`Are you sure you want to delete the profile "${profile.id || 'Unnamed Profile'}"? This will also delete all related entities.`)) {
            try {
                const profileStore = await getStore('profileStore') as unknown as EntityStorageManager<Profile>;

                const getTypedStore = (storeName: string): Promise<EntityStorageManager<Entity & Deletable>> =>
                    getStore(storeName as keyof Stores) as Promise<EntityStorageManager<Entity & Deletable>>;

                if (typeof profile.prepareForDeletion === 'function') {
                    await profileStore.cascadeDelete(profile, getTypedStore);
                } else {
                    const newProfile = Object.assign(new Profile(), profile);
                    await profileStore.cascadeDelete(newProfile, getTypedStore);
                }

                profiles = profiles.filter(p => p.id !== profile.id);

                if (profiles.length > 0) {
                    selectedProfile.set(profiles[0]);
                } else {
                    selectedProfile.set(null);
                }
            } catch (error) {
                console.error('Error deleting profile:', error);
                alert('An error occurred while deleting the profile. Please check the console for more details.');
            }
        }
    }

    async function handleClearAll() {
        if (confirm("Are you sure you want to clear all profiles? This action cannot be undone.")) {
            try {
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
                <li class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
                    <div class="flex justify-between items-start">
                        <div>
                            <h2 class="text-xl font-semibold text-gray-700">Profile ID: {profile.id}</h2>
                        </div>
                        <button
                                on:click={() => deleteProfile(profile)}
                                class="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 text-sm font-bold"
                        >
                            -
                        </button>
                    </div>
                    <button
                            on:click={() => viewProfileDetails(profile)}
                            class="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
                    >
                        Set as current
                    </button>
                </li>
            {/each}
        </ul>
    {:else}
        <p class="text-gray-600">No profiles available.</p>
    {/if}
</div>
