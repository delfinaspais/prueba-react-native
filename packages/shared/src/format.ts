export function formatFechaHM(fecha: string, hora?: string): string {
  const date = new Date(fecha + (hora ? `T${hora}:00` : 'T12:00:00'));
  const fechaStr = date.toLocaleDateString('es-AR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
  if (!hora) return fechaStr;
  return `${fechaStr} ${hora}`;
}

export function formatFecha(fecha: string): string {
  const date = new Date(fecha + 'T12:00:00');
  return date.toLocaleDateString('es-AR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}

export function estadoTurnoLabel(estado: string): string {
  const labels: Record<string, string> = {
    pendiente: 'Pendiente',
    confirmado: 'Confirmado',
    cancelado: 'Cancelado',
    atendido: 'Atendido'
  };
  return labels[estado] ?? estado;
}

export function estadoPacienteLabel(estado: string): string {
  return estado === 'activo' ? 'Activo' : 'Inactivo';
}
