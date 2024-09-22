<script>
    export let text = '';
    let hasBeenShown = false;
    let showTooltip = false;

    function handleMouseEnter() {
        if (!hasBeenShown) {
            showTooltip = true;
        }
    }

    function handleMouseLeave() {
        if (!hasBeenShown) {
            hasBeenShown = true;
            showTooltip = false;
        }
    }
</script>

<div class="relative" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
    <slot></slot>
    {#if showTooltip}
        <div class="absolute z-10 w-max p-2 bg-gray-800 text-white text-sm rounded-lg opacity-100 transition-opacity duration-300 bottom-full left-1/2 transform -translate-x-1/2 mb-2">
            {text}
        </div>
    {/if}
</div>
