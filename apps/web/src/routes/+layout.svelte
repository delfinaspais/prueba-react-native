<script lang="ts">
  import '../app.css';
</script>

<div class="navbar bg-primary text-primary-content shadow-lg">
  <div class="flex-1">
    <span class="text-xl font-bold px-4">Agenda Demo</span>
    <span class="badge badge-ghost badge-sm">Backoffice</span>
  </div>
  <div class="flex-none px-4">
    <span class="text-sm opacity-80">SvelteKit + AG Grid</span>
  </div>
</div>

<main class="container mx-auto p-6 max-w-7xl">
  <slot />
</main>
