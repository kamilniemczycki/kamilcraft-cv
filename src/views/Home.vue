<script setup>
import { useRoute } from 'vue-router';
import Header from '../components/Header.vue';
import Body from '../components/Body.vue';
</script>

<template>
    <div class="grid grid-rows-[max-content_max-content_auto] h-full">
        <Header />
        <Body />
    </div>
</template>