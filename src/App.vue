<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isErrorPage = computed(() => route.name === "NotFound");

function print() {
  window.print();
}
</script>

<template>
  <div v-if="!isErrorPage" class="print-section">
    <button
      class="px-4 py-2 w-full sm:w-80 font-semibold text-sm bg-orange-300 text-orange-700 rounded-full shadow-sm"
      @click="print"
    >
      Drukuj CV
    </button>
  </div>
  <main class="main bg-white">
    <router-view />
  </main>
</template>

<style lang="css">
.print-section {
  @apply text-center pt-5 pb-6;
}

@media print {
  .print-section {
    @apply hidden;
  }
}
</style>
