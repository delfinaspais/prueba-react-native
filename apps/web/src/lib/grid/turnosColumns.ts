import type { ColDef } from '@ag-grid-community/core';
import { formatFechaHM, estadoTurnoLabel } from '@repo/shared';

export const turnosColumnDefs: ColDef[] = [
  {
    field: 'pacienteNombre',
    headerName: 'Paciente',
    flex: 1.5
  },
  {
    field: 'fecha',
    headerName: 'Fecha / Hora',
    valueFormatter: (p) => formatFechaHM(p.data.fecha, p.data.hora),
    flex: 1.2
  },
  {
    field: 'especialidad',
    headerName: 'Especialidad'
  },
  {
    field: 'estado',
    headerName: 'Estado',
    cellRenderer: (p: { value: string }) => {
      const badgeClass: Record<string, string> = {
        pendiente: 'badge-warning',
        confirmado: 'badge-info',
        cancelado: 'badge-error',
        atendido: 'badge-success'
      };
      const cls = badgeClass[p.value] ?? 'badge-ghost';
      return `<span class="badge ${cls} badge-sm">${estadoTurnoLabel(p.value)}</span>`;
    },
    flex: 0.8
  },
  {
    headerName: 'Acciones',
    sortable: false,
    filter: false,
    flex: 1,
    cellRenderer: () =>
      `<div class="flex gap-1">
        <button class="btn btn-xs btn-ghost" data-action="ver">Ver</button>
        <button class="btn btn-xs btn-primary" data-action="editar">Editar</button>
      </div>`
  }
];
