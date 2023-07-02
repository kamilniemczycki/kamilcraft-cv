<script setup>
const certificates = [
    {
        faIcon: ['fas', 'star'],
        link: null,
        title: 'Konkurs „Mój pierwszy biznes”',
    },
    {
        faIcon: ['fas', 'certificate'],
        link: 'https://kamilcraft.com/download/certyfikat-laravel.pdf',
        title: 'Architektura aplikacji internetowych opartych o framework Laravel',
    },
];
</script>

<template>
    <div class="px-4 py-3">
        <h2 class="text-xl text-[#E57D4C] pb-2">Konkursy i Certyfikaty</h2>
        <ul class="flex flex-col gap-1">
            <li v-for="(certificate, key) in certificates"
                :key="key"
                class="flex gap-1 align-baseline">
                <FontAwesomeIcon class="text-[#ffd43b]" :icon="certificate.faIcon" />
                <span v-if="! certificate.link">{{ certificate.title }}</span>
                <a v-else
                    :href="certificate.link"
                    :title="certificate.title"
                    target="_blank">{{ certificate.title }}</a>
            </li>
        </ul>
    </div>
</template>
