import { StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { getPacienteById, formatFecha, estadoPacienteLabel } from '@repo/shared';
import { colors } from '@/constants/theme';

export default function PacienteDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const paciente = getPacienteById(id);

  if (!paciente) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Paciente no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{paciente.nombre}</Text>
        <Row label="Documento" value={paciente.documento} />
        <Row label="Teléfono" value={paciente.telefono} />
        <Row label="Email" value={paciente.email} />
        <Row label="Última visita" value={formatFecha(paciente.ultimaVisita)} />
        <Row label="Estado" value={estadoPacienteLabel(paciente.estado)} />
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
