import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Turno } from '@repo/shared';
import { formatFechaHM, estadoTurnoLabel } from '@repo/shared';
import { colors } from '@/constants/theme';

interface Props {
  turno: Turno;
  onPress: () => void;
}

const estadoColors: Record<string, { bg: string; text: string }> = {
  pendiente: { bg: '#fef3c7', text: colors.warning },
  confirmado: { bg: '#e0f2fe', text: colors.info },
  cancelado: { bg: '#fee2e2', text: colors.error },
  atendido: { bg: '#dcfce7', text: colors.success }
};

export function TurnoCard({ turno, onPress }: Props) {
  const estadoStyle = estadoColors[turno.estado] ?? { bg: colors.border, text: colors.textSecondary };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      accessibilityRole="button"
      accessibilityLabel={`Turno de ${turno.pacienteNombre}`}
    >
      <View style={styles.header}>
        <Text style={styles.nombre}>{turno.pacienteNombre}</Text>
        <View style={[styles.estadoBadge, { backgroundColor: estadoStyle.bg }]}>
          <Text style={[styles.estadoText, { color: estadoStyle.text }]}>
            {estadoTurnoLabel(turno.estado)}
          </Text>
        </View>
      </View>
      <Text style={styles.meta}>{formatFechaHM(turno.fecha, turno.hora)}</Text>
      <Text style={styles.meta}>{turno.especialidad}</Text>
      {turno.notas ? <Text style={styles.notas}>{turno.notas}</Text> : null}
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
  notas: {
    fontSize: 13,
    color: colors.textSecondary,
    fontStyle: 'italic',
    marginTop: 4
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
