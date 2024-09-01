<script lang="ts">
    export let text: string = "+";
    export let onClick: () => void;
    export let enabled: boolean = true;

    const enabledButtonClasses = "px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200 text-xl font-bold";
    const disabledButtonClasses = "px-3 py-1 bg-gray-400 text-white rounded-md cursor-not-allowed text-xl font-bold";

    function handleClick() {
        if (enabled && typeof onClick === 'function') {
            onClick();
        }
    }
</script>

<button
        on:click={handleClick}
        class={enabled ? enabledButtonClasses : disabledButtonClasses}
        disabled={!enabled}
>
    {text}
</button>