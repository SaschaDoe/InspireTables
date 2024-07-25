<script lang="ts">
    import { slide } from 'svelte/transition';

    export let title: string;
    export let id: number;
    export let isHidden: boolean = false;
    export let enableHidden: boolean = true;

    function toggleHidden() {
        isHidden = !isHidden;
    }
</script>

<div class="flex items-center space-x-2">
    {#if enableHidden}
        <button on:click={toggleHidden} class="mb-2 text-blue-700">
            {#if isHidden}
                ▼
            {:else}
                ▲
            {/if}
        </button>
    {/if}

    <h3 class="text-blue-700">{title}: {id}</h3>
</div>

{#if !isHidden}
    <div transition:slide>
        <slot></slot>
    </div>
{/if}

<style>
    button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.2em;
    }
</style>
