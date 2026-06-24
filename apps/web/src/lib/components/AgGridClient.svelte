<script lang="ts">
  import { browser } from '$app/environment';
  import type { ColDef, GridOptions, Module } from '@ag-grid-community/core';
  import { CommunityFeaturesModule } from '@ag-grid-community/core';
  import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
  import 'ag-grid-community/styles/ag-grid.css';
  import 'ag-grid-community/styles/ag-theme-quartz.css';

  interface Props {
    rowData: unknown[];
    columnDefs: ColDef[];
    height?: string;
  }

  let { rowData, columnDefs, height = '320px' }: Props = $props();

  let AgGridComponent = $state<typeof import('ag-grid-svelte5').default | null>(null);

  const modules: Module[] = [CommunityFeaturesModule, ClientSideRowModelModule];

  const gridOptions: GridOptions = $derived({
    rowData,
    columnDefs,
    defaultColDef: {
      sortable: true,
      filter: true,
      resizable: true,
      flex: 1,
      minWidth: 100
    },
    domLayout: 'normal',
    animateRows: true
  });

  $effect(() => {
    if (browser) {
      import('ag-grid-svelte5').then((mod) => {
        AgGridComponent = mod.default;
      });
    }
  });
</script>

{#if AgGridComponent}
  <div class="w-full rounded-lg overflow-hidden" style:height style:min-height={height}>
    <AgGridComponent
      {gridOptions}
      {rowData}
      {modules}
      gridClass="ag-theme-quartz w-full h-full"
    />
  </div>
{:else}
  <div class="skeleton w-full rounded-lg" style:height></div>
{/if}
