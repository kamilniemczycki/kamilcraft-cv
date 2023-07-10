<script setup>
import { defineProps, computed, ref } from 'vue';
import Education from './Body/Education.vue';
import MajorAchivments from './Body/MajorAchivments.vue';
import Skills from './Side/Skills.vue';
import Certificates from './Side/Certificates.vue';
import Links from './Side/Links.vue';

const props = defineProps({
    token: {
        default: null,
        type: [String, null],
    },
    rodo: {
        default: null,
        type: [String, null],
    },
    loading: {
        required: true,
        type: Boolean,
    },
});

const sourceCode = import.meta.env.VITE_SOURCE_CODE;

const qrCodeLink = computed(() => {
    const url = import.meta.env.VITE_CV_URL;
    if(props.token) {
        return `${url}/show/${props.token}`;
    }
    return url;
});
</script>

<template>
    <div class="flex flex-col-reverse print:flex-row print:gap-2 md:flex-row md:gap-2">
        <div class="relative print:w-2/3 print:flex-shrink-0 md:w-2/3 pb-3 md:flex-shrink-0 pt-1 px-4">
            <MajorAchivments />
            <Education />
            <div class="print:absolute bottom-5 left-0 w-full pt-3 print:pt-0 px-2 print:px-6 text-[.5rem] leading-3 l text-justify text-[#E57D4C]">
                <template v-if="!loading">
                    <template v-if="rodo">
                        {{ rodo }}
                    </template>
                    <template v-else>
                        Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb
                        niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z
                        dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018,
                        poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu
                        Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
                        ochrony osób fizycznych w związku z przetwarzaniem danych
                        osobowych i w sprawie swobodnego przepływu takich danych oraz
                        uchylenia dyrektywy 95/46/WE (RODO).
                    </template>
                </template>
            </div>
        </div>
        <div class="relative print:w-1/3 print:flex-shrink-1 md:w-1/3 md:flex-shrink-1 bg-[#fff0e9]">
            <Skills />
            <Certificates />
            <Links class="pb-8 md:pb-0" />
            <div class="hidden print:block print:absolute bottom-7 right-0 w-full">
                <a :href="qrCodeLink" title="Link do CV w wersji przeglądarkowej" target="_blink">
                    <QRCode
                        render-as="svg"
                        class="mx-auto mb-2"
                        :value="qrCodeLink"
                        :size="100"
                        level="L"
                        background="transparent" />
                </a>
                <div class="text-center">CV w wersji online</div>
            </div>
            <div class="absolute bottom-1.5 right-0 w-full px-5 text-right md:text-center text-xs">
                <a :href="sourceCode" target="_blank"><FontAwesomeIcon class="mr-1" :icon="['fab', 'github']"/>Kod źródłowy CV</a>
            </div>
        </div>
    </div>
</template>
