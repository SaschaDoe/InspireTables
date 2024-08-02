<script lang="ts">
    export let attributeName = "";
    export let attribute = "";
    export let attributeColor = "";

    export let known = ""
    export let knownColor = ""

    export let internalKnown = ""
    export let internalKnownColor = ""

    export let handlingKnown = ""
    export let handlingKnownColor = ""

    export let detailLevel = 0;
</script>

<div>
    <div class="${attributeColor}"><span class="font-bold">{attributeName}:</span> {attribute}</div>
    {#if detailLevel === 2}
        <div class="ml-4 text-sm text-gray-600">
            <div class="${knownColor}">{attributeName} Known: {known}</div>
            <div class="${internalKnownColor}">{attributeName} Internal Known: {internalKnown}</div>
            <div class="${handlingKnownColor}">{attributeName} Handling Known: {handlingKnown}</div>
        </div>
    {/if}
</div>