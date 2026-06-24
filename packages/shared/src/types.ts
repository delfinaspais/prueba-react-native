export type TurnoEstado = 'pendiente' | 'confirmado' | 'cancelado' | 'atendido';

export interface Turno {
  id: string;
  pacienteId: string;
  pacienteNombre: string;
  fecha: string;
  hora: string;
  especialidad: string;
  estado: TurnoEstado;
  notas?: string;
}

export interface Paciente {
  id: string;
  nombre: string;
  documento: string;
  telefono: string;
  email: string;
  ultimaVisita: string;
  estado: 'activo' | 'inactivo';
}
