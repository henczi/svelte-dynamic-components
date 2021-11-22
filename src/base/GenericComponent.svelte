<script>
  import { getContext } from "svelte";
  export let data;
  export let value;
  
  let GenericComponent = getContext('GenericComponent');
  
  let componentName;
  let imported;

  $: componentName = data && data.component;
  function getComponent(componentName) {
    return import(`/components/${componentName}.js`).then(x => (imported = x).default);
  }

  export function getCurrentComponentClass() {
    return imported;
  }

</script>

<style>
  .empty {
    padding: 10px;
    text-align: center;
  }
</style>

{#if componentName}
  {#await getComponent(componentName, data)} <!-- TODO: data? -->
    Betöltés ...
  {:then component}
    <svelte:component this={component} {GenericComponent} {...data} bind:value></svelte:component>
  {:catch ex}
    A komponens nem található a könyvtárban ({componentName})
  {/await}
{:else}
  <div class="empty">Nincs itt semmi :(</div>
{/if}