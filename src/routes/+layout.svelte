<script lang="ts">
    import { initializeStores, Modal } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
    import {onMount} from "svelte";
    initializeStores();

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

    onMount(async () => {

    });
</script>
<Modal />
<slot />
