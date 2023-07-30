<script setup>
import { useRoute } from 'vue-router';
import Header from '../components/Header.vue';
import Body from '../components/Body.vue';
</script>

<template>
    <div class="grid grid-rows-[max-content_max-content_auto] h-full px-5 py-4">
        <header>
            <h1 class="text-3xl mb-4">Błąd 404</h1>
        </header>
        <p>Strona nie została znaleziona.</p>
    </div>
</template>