<script setup>
import { computed } from "vue";

const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    default: "conact@kamilcraft.com",
  },
  tel: {
    type: Object,
    default() {
      return {
        hasPhoneNumber: false,
      };
    },
  },
  locations: {
    type: Array,
    default() {
      return [];
    },
  },
});

const location = computed(() => {
  return props.locations.join(" / ");
});
</script>

<template>
  <ul v-if="loading">
    <li class="animated-bg"></li>
    <li class="animated-bg"></li>
    <li class="animated-bg"></li>
  </ul>
  <ul v-else>
    <li>
      <FontAwesomeIcon class="w-5" :icon="['fas', 'envelope']" />
      <a :href="`mailto:${email}`">{{ email }}</a>
    </li>
    <li v-if="tel.hasPhoneNumber">
      <FontAwesomeIcon class="w-5" :icon="['fas', 'mobile-screen-button']" /><a
        :href="`tel:${tel.phoneNumber}`"
        >{{ tel.formattedPhoneNumber }}</a
      >
    </li>
    <li>
      <FontAwesomeIcon class="w-5" :icon="['fas', 'location-dot']" />{{
        location
      }}
    </li>
  </ul>
</template>
