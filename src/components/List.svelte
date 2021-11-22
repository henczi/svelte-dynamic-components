<script context="module">
	// TODO
	export function propertiesConfig(odata) {
		return {
			data: {
				component: "List",
				children: [
					{ component: "NumberInput", label: "Sor" }
				]
			},
			value: [
				odata?.children?.length ?? 0
			]
		}
	};

	// TODO: object/key based model
	export function mutateData(odata, value) {
		odata.children = odata.children || [];
		if (!value) return odata;
		let sor = parseInt(value && value[0]) || 0;
		if (sor < 0) sor = 0;
		odata.children.length = sor;
		return odata;
	};
</script>

<script>
	export let GenericComponent;
	export let children = [];
	export let value = [];

	// TODO: ??
	// $: if (children && value && value.length != children.length) value.length = children.length; // value length sync
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
	.center {
		text-align: center;
	}
</style>

<div class="list">
	{#if children.length}
		{#each children as item, i (i)}
			<div class="list-item">
				<!-- TODO: bind data prop in every component to edit, OR? -->
				<GenericComponent bind:data={item} bind:value={value[i]}></GenericComponent>
			</div>
		{/each}
	{:else}
		<div class="center">&lt;&lt;Üres lista&gt;&gt;</div>
	{/if}
</div>
