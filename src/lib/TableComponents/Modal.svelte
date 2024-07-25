<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let showModal: boolean = false;
    export let hasEntities: boolean = false;

    const dispatch = createEventDispatcher<{
        close: void;
        button1Click: void;
        button2Click: void;
        button3Click: void;
    }>();

    function closeModal(): void {
        showModal = false;
        dispatch('close');
    }

    function handleBackgroundClick(event: MouseEvent): void {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    }

    function rollClick(): void {
        dispatch('button1Click');
    }

    function closeClick(): void {
        dispatch('button2Click');
    }

    function persistClick(): void {
        dispatch('button3Click');
    }
</script>

{#if showModal}
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" on:click={handleBackgroundClick}>
        <div class="bg-white p-6 rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto">
            <slot></slot>
            <div class="flex justify-around mt-6">
                <button on:click={rollClick} class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                    Reroll
                </button>
                <button on:click={closeClick} class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
                    Close
                </button>
                <button
                        on:click={persistClick}
                        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                        disabled={!hasEntities}
                        class:opacity-50={!hasEntities}
                        class:cursor-not-allowed={!hasEntities}
                >
                    Persist
                </button>
            </div>
        </div>
    </div>
{/if}