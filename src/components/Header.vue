<script setup>
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';
import Mission from '../components/Mission.vue';
import ContactList from './ContactList.vue';

defineProps({
    loading: {
        tyle: Boolean,
    },
    email: {
        type: String,
    },
    tel: {
        type: Object,
    },
    locations: {
        type: Array,
    },
    position: {
        type: [String, null],
    },
    mission: {
        type: Array,
    },
});
</script>

<style lang="css">
.animated-bg {
  animation-duration: 10s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background-color: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #bbbbbb 18%, #eeeeee 33%);
  position: relative;
  width: 150px;
  height: 20px;
}

@keyframes placeHolderShimmer {
  0% {
    background-position: -800px 0
  }
  100% {
    background-position: 800px 0
  }
}
</style>

<template>
    <div class="flex justify-between mx-1 mt-1 print:border-b-2 md:border-b-2">
        <div class="flex-shrink-0 w-32 h-32">
            <img class="w-full h-full" alt="Profilowe" src="/me.webp" />
        </div>
        <div class="flex flex-col flex-shrink-1 justify-center gap-3 w-full px-4 py-3">
            <div>
                <h1 class="text-2xl pb-0.5">Kamil Niemczycki</h1>
                <p>{{ position ?? 'Inżynier oprogramowania' }}</p>
            </div>
            <ContactList
                :loading="loading"
                :email="email"
                :tel="tel"
                :locations="locations"
                class="hidden md:flex gap-1 sm:gap-2 md:gap-5 print:flex print:gap-5 flex-wrap flex-1 text-sm" />
        </div>
    </div>
    <ContactList
        :loading="loading"
        :email="email"
        :tel="tel"
        :locations="locations"
        class="md:hidden print:hidden flex flex-col gap-2 px-5 py-3 border-b text-sm" />
    <Mission :mission="mission" :loading="loading" />
</template>
