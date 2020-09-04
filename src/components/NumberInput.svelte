<script>
	export let label;
	export let defaultValue;
	export let value;

	value = defaultValue || 0; // TODO
</script>

<label for="inp">{label}</label>
<input name="inp" type="number" bind:value />
