<script lang="ts">
  import { MOCK_TURNOS, MOCK_PACIENTES } from '@repo/shared';
  import AgGridClient from '$lib/components/AgGridClient.svelte';
  import { turnosColumnDefs } from '$lib/grid/turnosColumns';
  import { pacientesColumnDefs } from '$lib/grid/pacientesColumns';

  function handleMockAction(tipo: string, accion: string) {
    alert(`[Mock] ${accion} ${tipo} — sin backend`);
  }
</script>

<svelte:head>
  <title>Agenda Demo — Inicio</title>
</svelte:head>

<div class="flex flex-col gap-6">
  <div>
    <h1 class="text-2xl font-bold text-neutral">Panel principal</h1>
    <p class="text-secondary mt-1">Turnos y pacientes — datos mock compartidos con mobile</p>
  </div>

  <div class="card bg-base-100 shadow-md">
    <div class="card-body">
      <div class="flex items-center justify-between">
        <h2 class="card-title text-lg">Turnos de hoy</h2>
        <span class="badge badge-primary">{MOCK_TURNOS.length} turnos</span>
      </div>
      <AgGridClient rowData={MOCK_TURNOS} columnDefs={turnosColumnDefs} height="300px" />
      <div class="card-actions justify-end mt-2">
        <button class="btn btn-sm btn-ghost" onclick={() => handleMockAction('turno', 'Ver todos')}>
          Ver todos
        </button>
      </div>
    </div>
  </div>

  <div class="card bg-base-100 shadow-md">
    <div class="card-body">
      <div class="flex items-center justify-between">
        <h2 class="card-title text-lg">Pacientes recientes</h2>
        <span class="badge badge-secondary">{MOCK_PACIENTES.length} pacientes</span>
      </div>
      <AgGridClient rowData={MOCK_PACIENTES} columnDefs={pacientesColumnDefs} height="300px" />
      <div class="card-actions justify-end mt-2">
        <button class="btn btn-sm btn-ghost" onclick={() => handleMockAction('paciente', 'Ver todos')}>
          Ver todos
        </button>
      </div>
    </div>
  </div>
</div>
