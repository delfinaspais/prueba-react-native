import { FlatList, ScrollView, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { MOCK_TURNOS, MOCK_PACIENTES } from '@repo/shared';
import { TurnoCard } from '@/components/TurnoCard';
import { PacienteCard } from '@/components/PacienteCard';
import { theme } from '@/constants/theme';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={theme.container} contentContainerStyle={{ paddingVertical: 16 }}>
      <View style={theme.section}>
        <View style={theme.sectionHeader}>
          <Text style={theme.sectionTitle}>Turnos de hoy</Text>
          <View style={theme.badge}>
            <Text style={theme.badgeText}>{MOCK_TURNOS.length}</Text>
          </View>
        </View>
        <FlatList
          data={MOCK_TURNOS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TurnoCard turno={item} onPress={() => router.push(`/turno/${item.id}`)} />
          )}
          scrollEnabled={false}
        />
      </View>

      <View style={theme.section}>
        <View style={theme.sectionHeader}>
          <Text style={theme.sectionTitle}>Pacientes recientes</Text>
          <View style={[theme.badge, { backgroundColor: '#64748b' }]}>
            <Text style={theme.badgeText}>{MOCK_PACIENTES.length}</Text>
          </View>
        </View>
        <FlatList
          data={MOCK_PACIENTES}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PacienteCard
              paciente={item}
              onPress={() => router.push(`/paciente/${item.id}`)}
            />
          )}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
}
