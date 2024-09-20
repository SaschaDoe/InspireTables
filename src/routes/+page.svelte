<script lang="ts">
	import {Tab, TabGroup} from "@skeletonlabs/skeleton";
	import TableList from "$lib/TableComponents/TableList.svelte";
	import EntityMenu from "$lib/EntityComponents/EntityMenu.svelte";
	import CampaignComponent from "$lib/CampaignComponents/CampaignComponent.svelte";
	import { get, writable } from "svelte/store";
	import type { Writable } from "svelte/store";
	import type {Campaign} from "../core/entities/campaign/campaign";
	import AdventureComponent from "$lib/AdventureComponents/AdventureComponent.svelte";
	import type {Adventure} from "../core/entities/adventure/adventure";
	import StartComponent from "$lib/StartComponents/StartComponent.svelte";
	import {onMount} from "svelte";
	import {getStore, selectedGlobalStore, selectedProfileStore} from "../core/entities/persist/stores";
	import {GlobalEntity} from "../core/entities/profile/globalEntity";
	import type {Profile} from "../core/entities/profile/profile";
	import ProfileComponent from "$lib/ProfileComponents/ProfileComponent.svelte";
	let isDragging = false;
	let initialX: number;
	let initialWidthLeft: number;
	let tabSet: number = 0;

	export let selectedCampaign: Writable<Campaign | null> = writable(null);
	export let selectedAdventure: Writable<Adventure | null> = writable(null);

	onMount(async () => {
		let selectedGlobal = get(selectedGlobalStore);
		if(!selectedGlobal){
			console.log("no selected Global")
			let globalStore = await getStore('globalStore');
			let globals = await globalStore.getAllEntities() as GlobalEntity[];
			if(globals.length > 0){
				let global = globals[0];
				selectedGlobalStore.set(global);
				console.log("global from store set: ", global);
			}else{
				let newGlobal = new GlobalEntity();
				await globalStore.saveEntity(newGlobal);
				selectedGlobalStore.set(newGlobal);
				console.log("new global set: ", newGlobal);
			}
		}
		let selectedProfile = get(selectedProfileStore);
		if(!selectedProfile){
			let globalEntity = get(selectedGlobalStore);
			let profileStore = await getStore('profileStore');
			let profiles = await profileStore.getAllEntities() as Profile[];

			if(globalEntity && globalEntity.currentProfile){
				if(profiles.some(p => p.id === globalEntity.currentProfile?.id)){
					selectedProfileStore.set(globalEntity.currentProfile);
					console.log("globally defined profile selected: ", globalEntity.currentProfile);
				}
			}
		}else{
			console.log("selected profile: ", selectedProfile);
		}
	})

	function handleMouseDown(event: MouseEvent) {
		isDragging = true;
		initialX = event.clientX;
		const leftPanel = document.getElementById('left-panel');
		if (leftPanel) {
			initialWidthLeft = leftPanel.offsetWidth;
		}
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp);
	}

	function changeTab(newTabIndex: number) {
		tabSet = newTabIndex;
		activeTab = newTabIndex;  // Add this line
		console.log("overloaded");
	}

	function handleMouseMove(event: MouseEvent) {
		if (isDragging) {
			const delta = event.clientX - initialX;
			const newWidthLeft = initialWidthLeft + delta;
			document.getElementById('left-panel').style.width = `${newWidthLeft}px`;
		}
	}

	function handleMouseUp() {
		isDragging = false;
		window.removeEventListener('mousemove', handleMouseMove);
		window.removeEventListener('mouseup', handleMouseUp);
	}

	function handleKeyDown(event: KeyboardEvent) {
		const leftPanel = document.getElementById('left-panel');
		if (leftPanel) {
			const currentWidth = leftPanel.offsetWidth;
			const step = 10; // Adjust the step size as needed
			if (event.key === 'ArrowLeft') {
				leftPanel.style.width = `${currentWidth - step}px`;
			} else if (event.key === 'ArrowRight') {
				leftPanel.style.width = `${currentWidth + step}px`;
			}
		}
	}

	let activeTab = 0;
</script>



<div class="flex h-screen">
	<div id="left-panel" class="w-1/2 border-r border-gray-300">
		<TabGroup bind:selected={activeTab}>
			<Tab class="text-blue-500" bind:group={tabSet} name="tab3" value={4}>Entities</Tab>
			<Tab class="text-blue-500" bind:group={tabSet} name="tab4" value={5}>Tables</Tab>
		</TabGroup>
		<TabGroup bind:selected={activeTab}>
			<Tab class="text-blue-500" bind:group={tabSet} name="tab1" value={0}>Start</Tab>
			<Tab class="text-blue-500" bind:group={tabSet} name="tab1" value={1}>Profile</Tab>
			<Tab class="text-blue-500" bind:group={tabSet} name="tab2" value={2}>Campaign</Tab>
			<Tab class="text-blue-500" bind:group={tabSet} name="tab3" value={3}>Adventure</Tab>
			<svelte:fragment slot="panel">
				{#if tabSet === 0}
					<StartComponent {changeTab}></StartComponent>
				{:else if tabSet === 1}
					<ProfileComponent {changeTab}></ProfileComponent>
				{:else if tabSet === 2}
					<CampaignComponent {changeTab}></CampaignComponent>
				{:else if tabSet === 3}
					<AdventureComponent {changeTab}></AdventureComponent>
				{:else if tabSet === 4}
					<EntityMenu></EntityMenu>
				{:else if tabSet === 5}
					<TableList></TableList>
				{/if}
			</svelte:fragment>
		</TabGroup>

	</div>
	<button
			class="resizer"
			on:mousedown={handleMouseDown}
			on:keydown={handleKeyDown}
			tabindex="0"
	></button>
	<div id="right-panel" class="flex-1">
		<p>Right Panel</p>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		background-color: #f5f5f5;
		color: #333;
	}

	.flex {
		display: flex;
	}

	.h-screen {
		height: 100vh;
	}

	#left-panel {
		background-color: #ffffff;
		padding: 20px;
		overflow: auto;
	}

	#right-panel {
		background-color: #ffffff;
		padding: 20px;
		overflow: auto;
	}

	.resizer {
		cursor: col-resize;
		background-color: #4a90e2;
		width: 5px;
		height: 100%;
		border: none;
		padding: 0;
		outline: none;
	}

	.resizer:focus {
		box-shadow: 0 0 10px #4a90e2;
	}
</style>