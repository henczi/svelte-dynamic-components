<script>
	import { tick } from "svelte";
	export let text;
	export let value;
	async function doclick() {
		value = true;
		await tick();
		value = false;
	}
</script>

<button on:click={doclick}>
	{text}
</button>
