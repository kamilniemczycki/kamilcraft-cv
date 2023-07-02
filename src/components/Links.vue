<script setup>
const links = [
    {
        slug: 'kamilcraft',
        faIcon: ['fas', 'link'],
        url: 'https://kamilcraft.com',
        title: 'Moja strona',
        text: 'kamilcraft.com',
    },
    {
        slug: 'linkedin',
        faIcon: ['fab', 'linkedin'],
        url: 'https://www.linkedin.com/in/kamilniemczycki/',
        title: 'Mój LinkedIn',
        text: '/in/kamilniemczycki',
    },
    {
        slug: 'github',
        faIcon: ['fab', 'github'],
        url: 'https://github.com/kamilniemczycki',
        title: 'Mój GitHub',
        text: '/kamilniemczycki',
    },
];
</script>

<template>
    <div class="px-4 py-3">
        <h2 class="text-xl text-[#E57D4C] pb-2">Znajdziesz mnie</h2>
        <ul class="flex flex-col gap-1">
            <li v-for="link in links" :key="link.slug"><a :href="link.url"
                    :title="link.title"
                    target="_blink"
                ><FontAwesomeIcon class="w-6" :icon="link.faIcon" />{{ link.text }}</a></li>
        </ul>
    </div>
</template>