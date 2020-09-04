<script context="module">
	// TODO
	export function propertiesConfig(odata) {
		return {
			component: "List",
			children: [
				{ component: "NumberInput", label: "Sor", defaultValue: odata.children.length }
			]
		}
	};
	export function mutateData(odata, value) {
		if (!value || !value[0]) return odata; 
		let sor = value && value[0];
		sor = +sor || 1;
		if (sor < 1) sor = 1;
		if (sor < odata.children.length) {
			odata.children = odata.children.slice(0, sor);
		} else {
			while(sor > odata.children.length) {
				odata.children.push(undefined);
			}
		}
		return odata;
	};
</script>

<script>
	export let GenericComponent;

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
