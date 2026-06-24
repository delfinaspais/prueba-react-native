import type { ColDef } from '@ag-grid-community/core';
import { formatFecha, estadoPacienteLabel } from '@repo/shared';

export const pacientesColumnDefs: ColDef[] = [
  {
    field: 'nombre',
    headerName: 'Nombre',
    flex: 1.5
  },
  {
    field: 'documento',
    headerName: 'Documento'
  },
  {
    field: 'telefono',
    headerName: 'Teléfono'
  },
  {
    field: 'ultimaVisita',
    headerName: 'Última visita',
    valueFormatter: (p) => formatFecha(p.value)
  },
  {
    field: 'estado',
    headerName: 'Estado',
    cellRenderer: (p: { value: string }) => {
      const cls = p.value === 'activo' ? 'badge-success' : 'badge-ghost';
      return `<span class="badge ${cls} badge-sm">${estadoPacienteLabel(p.value)}</span>`;
    },
    flex: 0.7
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
