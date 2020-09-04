<script>
  export let data;
  export let value;

  let componentName;

  $: if (data.component != componentName) { componentName = data.component; }

</script>

<style>
  .component-wrapper {
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid;
  }
  .component-wrapper>:global(*) {
    width: 100%;
  }
</style>

<div class="component-wrapper">
{#await import(`/components/${componentName}.js`)}
  Betöltés ...
{:then imported}
  <svelte:component this={imported.default} {...data} bind:value></svelte:component>
{:catch ex}
  A komponens nem található a könyvtárban ({componentName})
{/await}
</div>