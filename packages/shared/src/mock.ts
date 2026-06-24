import type { Paciente, Turno } from './types';

export const MOCK_TURNOS: Turno[] = [
  {
    id: 't1',
    pacienteId: 'p1',
    pacienteNombre: 'María García',
    fecha: '2026-06-24',
    hora: '09:00',
    especialidad: 'Cardiología',
    estado: 'confirmado',
    notas: 'Control anual'
  },
  {
    id: 't2',
    pacienteId: 'p2',
    pacienteNombre: 'Juan Pérez',
    fecha: '2026-06-24',
    hora: '10:30',
    especialidad: 'Dermatología',
    estado: 'pendiente'
  },
  {
    id: 't3',
    pacienteId: 'p3',
    pacienteNombre: 'Ana López',
    fecha: '2026-06-24',
    hora: '11:00',
    especialidad: 'Pediatría',
    estado: 'atendido'
  },
  {
    id: 't4',
    pacienteId: 'p4',
    pacienteNombre: 'Carlos Ruiz',
    fecha: '2026-06-24',
    hora: '14:00',
    especialidad: 'Traumatología',
    estado: 'cancelado',
    notas: 'Reprogramar'
  },
  {
    id: 't5',
    pacienteId: 'p5',
    pacienteNombre: 'Laura Martínez',
    fecha: '2026-06-24',
    hora: '15:30',
    especialidad: 'Ginecología',
    estado: 'confirmado'
  }
];

export const MOCK_PACIENTES: Paciente[] = [
  {
    id: 'p1',
    nombre: 'María García',
    documento: '30.123.456',
    telefono: '+54 11 5555-0101',
    email: 'maria.garcia@email.com',
    ultimaVisita: '2026-06-10',
    estado: 'activo'
  },
  {
    id: 'p2',
    nombre: 'Juan Pérez',
    documento: '28.987.654',
    telefono: '+54 11 5555-0202',
    email: 'juan.perez@email.com',
    ultimaVisita: '2026-06-18',
    estado: 'activo'
  },
  {
    id: 'p3',
    nombre: 'Ana López',
    documento: '35.456.789',
    telefono: '+54 11 5555-0303',
    email: 'ana.lopez@email.com',
    ultimaVisita: '2026-06-20',
    estado: 'activo'
  },
  {
    id: 'p4',
    nombre: 'Carlos Ruiz',
    documento: '32.111.222',
    telefono: '+54 11 5555-0404',
    email: 'carlos.ruiz@email.com',
    ultimaVisita: '2026-05-15',
    estado: 'inactivo'
  },
  {
    id: 'p5',
    nombre: 'Laura Martínez',
    documento: '29.333.444',
    telefono: '+54 11 5555-0505',
    email: 'laura.martinez@email.com',
    ultimaVisita: '2026-06-22',
    estado: 'activo'
  }
];

export function getTurnoById(id: string): Turno | undefined {
  return MOCK_TURNOS.find((t) => t.id === id);
}

export function getPacienteById(id: string): Paciente | undefined {
  return MOCK_PACIENTES.find((p) => p.id === id);
}
