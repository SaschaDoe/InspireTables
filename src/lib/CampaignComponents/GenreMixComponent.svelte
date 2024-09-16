<script lang="ts">
    import { onMount } from 'svelte';
    import { GenreMix } from "../../core/entities/genre/genreMix";
    import GenreComponent from "$lib/CampaignComponents/GenreComponent.svelte";
    import { getSelectedCampaign, getSelectedProfile, getStorageStrategy, saveSelectedCampaign } from "../../core/entities/persist/stores";
    import { Profile } from "../../core/entities/profile/profile";
    import { Campaign } from "../../core/entities/campaign/campaign";
    import { GenreMixCreator } from "../../core/entities/genre/genreMixCreator";
    import { TableManager } from "../../core/entities/persist/tableManager";
    import { FunctionFactory } from "../../core/tables/core/entry/functionFactory";
    import { RefreshCcw } from 'lucide-svelte';
    import {getGenreFullName} from "../../core/entities/genre/genre";

    export let genreMix: GenreMix = new GenreMix();
    let campaign = new Campaign();
    let profile = new Profile();
    let primaryWeight = 100;
    let subGenreWeights: { genre: string, weight: number }[] = [];

    // Function to update weights and genre components
    function updateWeights(genreMix: GenreMix) {
        console.log("Full genreWeights object:", genreMix.genreWeights);
        console.log("Primary genre: ", genreMix.primaryGenre);
        let fullName = getGenreFullName(genreMix.primaryGenre.name, genreMix.primaryGenre.subGenreName);
        console.log("Primary genre full name:", fullName);
        primaryWeight = genreMix.genreWeights[fullName] as number;
        console.log("Primary weight:", primaryWeight);
        subGenreWeights = genreMix.subGenres
            .map((genre) => ({
                genre: getGenreFullName(genre.name, genre.subGenreName),
                weight: genreMix.genreWeights[getGenreFullName(genre.name, genre.subGenreName)] as number,
            }))
            .sort((a, b) => b.weight - a.weight);
    }

    // Set up genre mix from the existing one
    async function setupExistingGenreMix() {
        // Fetch the selected profile
        let tmpProfile = await getSelectedProfile();
        if (tmpProfile !== null) {
            profile = tmpProfile;
        }

        // Fetch the selected campaign
        let tmpCampaign = await getSelectedCampaign();
        if (tmpCampaign !== null) {
            campaign = tmpCampaign;
        }

        // Update weights if genreMix exists
        if (campaign.genreMix) {
            genreMix = campaign.genreMix;
            updateWeights(genreMix);
        }

        console.log("Campaign:", campaign)
    }

    // Generate a new genre mix
    async function generateNewGenreMix() {
        let tmpProfile = await getSelectedProfile();
        if (tmpProfile !== null) {
            profile = tmpProfile;
        }

        let tmpCampaign = await getSelectedCampaign();
        if (tmpCampaign !== null) {
            campaign = tmpCampaign;
        }

        let storageStrategy = await getStorageStrategy();
        let tableManager = await TableManager.getInstance(storageStrategy, new FunctionFactory());

        const newGenreMix = (await new GenreMixCreator(tableManager)
            .withNarrativeMedium(profile.narrativeMediumType)
            .create()).getCreation() as GenreMix;

        campaign.genreMix = newGenreMix;
        await saveSelectedCampaign(campaign);

        genreMix = newGenreMix;
        updateWeights(genreMix);
    }

    // On component mount, set up using the existing GenreMix
    onMount(async () => {
        await setupExistingGenreMix();
    });

    async function rollAgain() {
        await generateNewGenreMix();
    }
</script>

<!-- Genre Mix Layout -->
<div class="p-4 bg-gray-100 rounded-lg shadow-md ">
    <div class="flex items-center justify-between">
        <h2 class="text-lg font-bold text-black">Genre Mix</h2>
        <button
                on:click={rollAgain}
                class="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-full transition duration-300 ease-in-out">
            <RefreshCcw class="w-4 h-4" />
        </button>
    </div>

    <section class="mt-4">
        <header class="text-xl font-semibold text-gray-700 mb-2">Primary Genre</header>
        <div class="bg-white p-2 rounded-lg shadow">
            <GenreComponent genre={genreMix.primaryGenre} weight={primaryWeight}></GenreComponent>
        </div>
    </section>

    {#if subGenreWeights.length > 0}
        <!-- Sub-genres Section -->
        <section class="mt-4">
            <header class="text-xl font-semibold text-gray-700 mb-2">Sub Genres</header>
            <div class="space-y-2">
                {#each subGenreWeights as {genre, weight}}
                    <div class="bg-white p-2 rounded-lg shadow">
                        <GenreComponent genre={genreMix.subGenres.find(subGenre => getGenreFullName(subGenre.name, subGenre.subGenreName) === genre)} weight={weight}></GenreComponent>
                    </div>
                {/each}
            </div>
        </section>
    {/if}

    <!-- Themes Section -->
    {#if genreMix.themes && genreMix.themes.length > 0}
        <section class="mt-4">
            <header class="text-xl font-semibold text-gray-700 mb-2">Themes</header>
            <div class="space-y-2 text-black">
                {#each genreMix.themes as theme}
                    <li class="bg-white p-2 rounded-lg shadow">{theme}</li>
                {/each}
            </div>
        </section>
    {/if}

    <!-- Theme Statements Section -->
    {#if genreMix.themeStatements && genreMix.themeStatements.length > 0}
        <section class="mt-4">
            <header class="text-xl font-semibold text-gray-700 mb-2">Theme Statements</header>
            <div class="space-y-2 text-black">
                {#each genreMix.themeStatements as statement}
                    <li class="bg-white p-2 rounded-lg shadow">{statement}</li>
                {/each}
            </div>
        </section>
    {/if}
</div>
