<script>
  import { selection } from './editor-bridge.js';
  import GenericComponent from "./GenericComponent.svelte";
  export let data;
  export let value;

  let sub;

  let showSettings = false;

  // TODO
  function onEdit() {
    const ret = prompt("Milyen komponens?", "");
    if (ret) {
      data = {
        component: ret
      }
    }
  }

  function onProperties() {
    const componentClass = sub.getCurrentComponentClass()
    if (componentClass && componentClass.propertiesConfig) {
      const configData = componentClass.propertiesConfig(data);
  
      selection.changed(configData, function(editedValues) {
        data = componentClass.mutateData(data, editedValues);
      })
    }
  }
</script>

<style>
  .component-wrapper {
    position: relative;
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid;
  }
  .component-wrapper>:global(*) {
    width: 100%;
  }
  .settings-panel {
    position: absolute;
    top: 0;
    left: 0;
    background-color: red;
    color: white;
    padding: 2px;
    cursor: pointer;
    width: 130px;
  }
</style>

<div class="component-wrapper" on:mouseover|stopPropagation={() => showSettings = true} on:mouseout={() => showSettings = false}>
  {#if data && data.component}
  <GenericComponent {data} bind:value bind:this={sub} ></GenericComponent>
  <div class="settings-panel" style="display: {showSettings ? 'flex' : 'none'}" >
    <div on:click={onProperties}>Properties</div>
    &nbsp;&nbsp;|&nbsp;&nbsp;
    <div on:click={onEdit}>Edit</div>
  </div>
  {:else}
    <div class="empty">Nincs itt semmi :( ... <span on:click={onEdit}><i>Megadás</i></span></div>
  {/if}
</div>