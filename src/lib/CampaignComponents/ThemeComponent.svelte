<script lang="ts">
    import OneTimeToolTip from "$lib/OneTimeToolTip.svelte";
    import { ThemeDto } from "../../core/entities/genre/themeDto";
    import {onMount} from "svelte";

    export let theme = new ThemeDto();
    export let addStatementFrom: (themeName: string) => void;
    export let addRealStatementFrom: (themeName: string) => void;

    onMount(() => {
        console.log(theme);
    })
</script>

<li class="bg-white p-2 rounded-lg shadow flex flex-col group">
    <div class="flex items-center justify-between w-full">
        <span class="font-semibold">{theme.name}</span>
        <div class="flex items-center">
            <div class="mr-2">
                <OneTimeToolTip text="statement from theme">
                    <button
                            on:click={() => addStatementFrom(theme.name)}
                            class="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center focus:outline-none"
                    >
                        <span class="text-lg leading-none">+</span>
                    </button>
                </OneTimeToolTip>
            </div>
            <div>
                <OneTimeToolTip text="real statement">
                    <button
                            on:click={() => addRealStatementFrom(theme.name)}
                            class="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center focus:outline-none"
                    >
                        <span class="text-lg leading-none">+</span>
                    </button>
                </OneTimeToolTip>
            </div>
        </div>
    </div>

    <div class="description-container h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:h-auto">
        {#if theme.description}
            <p class="text-sm text-gray-600 mt-2">{theme.description}</p>
        {/if}
        <p></p>
        {#if theme.sources && theme.sources.length > 0}
            <div class="mt-2 text-xs text-gray-500">
                <p class="font-semibold">Sources:</p>
                <ul class="list-disc list-inside">
                    {#each theme.sources as source}
                        <li class="mb-1">
                            <span class="font-medium">{source.name}</span>
                            {#if source.description}
                                <span class="text-gray-400"> - {source.description}</span>
                            {/if}
                            {#if source.link}
                                <br>
                                <a href={source.link} target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
                                    {source.link}
                                </a>
                            {/if}
                        </li>
                    {/each}
                </ul>
            </div>
        {/if}
    </div>
</li>

<style>
    .description-container {
        max-height: 0;
        opacity: 0;
        transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
    }

    .group:hover .description-container {
        max-height: 500px; /* Increased to accommodate additional content */
        opacity: 1;
    }
</style>