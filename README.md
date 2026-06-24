# Doctor Agenda Demo

Monorepo demo: backoffice web (SvelteKit) + app mobile (Expo) con lógica compartida en `@repo/shared`.

```
                    ┌─────────────────────┐
                    │   @repo/shared      │
                    │  tipos + mock +     │
                    │  formatters (TS)    │
                    └─────────┬───────────┘
                              │
              ┌───────────────┴───────────────┐
              │                               │
    ┌─────────▼─────────┐         ┌───────────▼──────────┐
    │    apps/web       │         │    apps/mobile       │
    │  SvelteKit 2      │         │  Expo SDK 52+        │
    │  Svelte 5 runes   │         │  expo-router         │
    │  AG Grid + DaisyUI│         │  FlatList + cards    │
    └───────────────────┘         └──────────────────────┘
```

## Requisitos

- [Bun](https://bun.sh) 1.1+ (workspaces)
- Node.js 20+ (para Expo CLI)
- Para mobile: emulador Android/iOS o dispositivo con Expo Go / dev build

## Instalación

```bash
# Desde la raíz del monorepo
bun install
```

## Desarrollo

### Web (SvelteKit)

```bash
bun run dev:web
```

Abre http://localhost:5173 — panel con dos cards (Turnos de hoy + Pacientes recientes) y grillas AG Grid theme quartz.

### Mobile (Expo)

```bash
bun run dev:mobile
# o desde apps/mobile:
# npx expo start
```

Escaneá el QR con Expo Go o presioná `a` (Android) / `i` (iOS) en el emulador.

## Scripts raíz

| Script | Descripción |
|--------|-------------|
| `bun run dev:web` | Servidor dev SvelteKit |
| `bun run dev:mobile` | `expo start` |
| `bun run build:web` | Build producción web |
| `bun run check:web` | `svelte-check` sin errores |
| `bun run lint` | Typecheck en todos los packages |

## Estructura

```
doctor-agenda-demo/
├── apps/
│   ├── web/          # SvelteKit + AG Grid + Tailwind v4 + DaisyUI v5
│   └── mobile/       # Expo + expo-router + FlatList
├── packages/
│   └── shared/       # @repo/shared — tipos, mock, formatFechaHM()
└── package.json      # Bun workspaces
```

## Comparativa Web vs Mobile

| | Web | Mobile |
|---|-----|--------|
| Framework | SvelteKit 2 + Svelte 5 | Expo SDK 52 + React Native |
| Routing | File-based (`src/routes`) | expo-router (`app/`) |
| Tablas / listas | AG Grid Community (theme quartz) | `FlatList` + cards nativas |
| UI | Tailwind v4 + DaisyUI v5 | **StyleSheet nativo** (sin NativeWind) |
| Código compartido | `@repo/shared` (tipos + mock) | idem |
| SSR | SvelteKit (AG Grid client-only) | N/A |

### Decisión UI mobile

Se eligió **StyleSheet nativo** de React Native (no NativeWind) para mantener cero dependencias de styling extra y componentes 100% RN sin WebView.

## `@repo/shared`

Exporta:

- `Turno`, `Paciente` — tipos TypeScript
- `MOCK_TURNOS`, `MOCK_PACIENTES` — datos demo
- `formatFechaHM()`, `formatFecha()` — formatters
- `getTurnoById()`, `getPacienteById()` — helpers para pantallas detalle

Sin dependencias de Svelte ni React — TypeScript puro.

## Patrones técnicos

1. **Web**: AG Grid cargado solo en cliente (`browser` guard + dynamic import de `ag-grid-svelte5`).
2. **Mobile**: listas con `FlatList`, navegación a `app/turno/[id].tsx` y `app/paciente/[id].tsx`.
3. **Monorepo**: Bun workspaces; cada app declara `"@repo/shared": "workspace:*"`.

## Fuera de alcance

Backend, auth, gRPC, Capacitor, AG Grid en mobile.
