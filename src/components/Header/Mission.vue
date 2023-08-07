<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  mission: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>

<template>
  <div v-if="loading" class="px-5 py-3 border-b">
    <p
      v-for="key in [1, 2, 3]"
      :key="key"
      style="width: 100%"
      class="mb-3 last-of-type:mb-0 animated-bg"
    ></p>
  </div>
  <div
    v-else-if="mission.length === 0"
    class="px-5 py-3 border-b text-justify text-slate-600"
  >
    <p>
      Ambitny i nastawiony na cel, gotowy do podjęcia wyzwań absolwent
      informatyki, który szuka pierwszej pracy jako inżynier oprogramowania.
    </p>
    <p>
      Wyróżnia mnie pracowitość i umiejętność pracy w zespole. Szybko zdobywam
      potrzebną mi wiedzę i potrafię ją dobrze wykorzystać. Przyjemność sprawia
      mi tworzenie web aplikacji. Jestem gotowy by rozwijać swoją wiedzę jak i
      karierę zawodową w tym kierunku.
    </p>
  </div>
  <div v-else class="px-5 py-3 border-b text-justify text-slate-600">
    <p v-for="(line, key) in mission" :key="key">{{ line }}</p>
  </div>
</template>
