<script setup>
import { ref } from 'vue';
import { skills as importSkills, otherSkills as importOtherSkills } from '../composables/Skills.js';

const skills = ref(importSkills);
const otherSkills = ref(importOtherSkills);
</script>

<style lang="css">
    .php {
        @apply text-[#777BB3];
    }
    .laravel {
        @apply text-[#F05340];
    }
    .js {
        @apply text-[#F0DB4F];
    }
    .vuejs {
        @apply text-[#41B883];
    }
    .html5 {
        @apply text-[#e34c26];
    }
    .css3-alt {
        @apply text-[#2965f1];
    }
    .git {
        @apply text-[#f1502f];
    }
    .linux {
        @apply text-black;
    }
</style>

<template>
    <div class="px-4 py-3">
        <h2 class="text-xl text-[#E57D4C] pb-2">Główne umiejętności</h2>
        <ul class="flex flex-row flex-wrap justify-center align-baseline gap-4 text-xl">
            <li
                v-for="(skill, key) in skills"
                :key="key"
                class="flex flex-col items-center gap-1"
            >
                <FontAwesomeIcon :class="skill.class" :title="skill.title" size="xl" :icon="skill.faIcon"/>
                <span class="text-xs">{{ skill.text }}</span>
            </li>
        </ul>
        <div class="mt-3">
            <h3 class="text-lg text-[#E57D4C] pb-1">Dodatkowo</h3>
            <ul class="flex flex-row flex-wrap align-baseline gap-1">
                <li v-for="(skill, key) in otherSkills" :key="key" class="border border-slate-200 rounded-md px-1.5 py-0.5 bg-white">{{ skill }}</li>
            </ul>
        </div>
    </div>    
</template>
