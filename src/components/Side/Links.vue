<script setup>
import links from "../../composables/Links";
</script>

<template>
  <div class="px-4 py-3">
    <h2 class="text-xl text-[#E57D4C] pb-2">Znajdziesz mnie</h2>
    <ul class="flex flex-col gap-1">
      <li v-for="link in links" :key="link.slug">
        <a :href="link.url" :title="link.title" target="_blink"
          ><FontAwesomeIcon class="w-6" :icon="link.faIcon" />{{ link.text }}</a
        >
      </li>
    </ul>
  </div>
</template>
