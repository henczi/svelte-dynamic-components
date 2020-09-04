<script>
	import GenericComponent from "../base/GenericComponent.svelte";

	export let children = [];
	export let value = [];
</script>

<style>
	.list {
		display: flex;
		flex-direction: column;
	}
	.list-item>:global(*){
		width: 100%;
		height: 100%;
	}
</style>

<div class="list">
	{#each children as item, i (i)}
		<div class="list-item">
			<GenericComponent data={item} bind:value={value[i]}></GenericComponent>
		</div>
	{/each}
</div>
