import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Paciente } from '@repo/shared';
import { formatFecha, estadoPacienteLabel } from '@repo/shared';
import { colors } from '@/constants/theme';

interface Props {
  paciente: Paciente;
  onPress: () => void;
}

export function PacienteCard({ paciente, onPress }: Props) {
  const isActivo = paciente.estado === 'activo';

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      accessibilityRole="button"
      accessibilityLabel={`Paciente ${paciente.nombre}`}
    >
      <View style={styles.header}>
        <Text style={styles.nombre}>{paciente.nombre}</Text>
        <View style={[styles.estadoBadge, { backgroundColor: isActivo ? '#dcfce7' : colors.border }]}>
          <Text style={[styles.estadoText, { color: isActivo ? colors.success : colors.textSecondary }]}>
            {estadoPacienteLabel(paciente.estado)}
          </Text>
        </View>
      </View>
      <Text style={styles.meta}>Doc: {paciente.documento}</Text>
      <Text style={styles.meta}>{paciente.telefono}</Text>
      <Text style={styles.meta}>Última visita: {formatFecha(paciente.ultimaVisita)}</Text>
      <Text style={styles.cta}>Ver detalle →</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    minHeight: 44
  },
  cardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }]
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
    gap: 8
  },
  nombre: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    flex: 1
  },
  estadoBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8
  },
  estadoText: {
    fontSize: 11,
    fontWeight: '600'
  },
  meta: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 2
  },
  cta: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: '600',
    marginTop: 10,
    minHeight: 44,
    lineHeight: 44
  }
});
