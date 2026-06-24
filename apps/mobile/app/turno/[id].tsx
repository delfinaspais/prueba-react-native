import { StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { getTurnoById, formatFechaHM, estadoTurnoLabel } from '@repo/shared';
import { colors } from '@/constants/theme';

export default function TurnoDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const turno = getTurnoById(id);

  if (!turno) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Turno no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{turno.pacienteNombre}</Text>
        <Row label="Fecha / Hora" value={formatFechaHM(turno.fecha, turno.hora)} />
        <Row label="Especialidad" value={turno.especialidad} />
        <Row label="Estado" value={estadoTurnoLabel(turno.estado)} />
        {turno.notas ? <Row label="Notas" value={turno.notas} /> : null}
        <Row label="ID paciente" value={turno.pacienteId} />
      </View>
    </View>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 20
  },
  row: {
    marginBottom: 14
  },
  label: {
    fontSize: 12,
    color: colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4
  },
  value: {
    fontSize: 16,
    color: colors.text
  },
  error: {
    fontSize: 16,
    color: colors.error,
    textAlign: 'center',
    marginTop: 40
  }
});
