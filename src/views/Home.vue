<script setup>
import { onMounted, ref, reactive } from 'vue';
import { useRoute } from 'vue-router';
import Header from '../components/Header.vue';
import Body from '../components/Body.vue';

const loading = ref(false);
const token = ref(null);
const email = ref('contact@kamilcraft.com');
const tel = reactive({
    hasPhoneNumber: false,
    phoneNumber: '',
    formattedPhoneNumber: '',
});

const locations = reactive([
    'Wrocław',
    'Legnica',
    'Remote',
]);

const position = ref(null);
const mission = reactive([]);
const rodo = ref(null);

onMounted(() => {
    const router = useRoute();
    token.value = router.params['token'] ?? null;

    if (token.value) {
        loading.value = true;
        const apiUrl = import.meta.env.VITE_API_URL;
        fetch(`${apiUrl}/v1/cv/${token.value}`, {
            method: 'GET',
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(response => (response.json().then(data => ({ status: response.status, data }))))
            .then(response => {
                setTimeout(() => showData(response), 1000);
            })
            .catch(() => {
                loading.value = false;
            });
    }
});

function showData(response) {
    if (response.status === 200) {
        const data = response.data;
        email.value = data.email;
        tel.hasPhoneNumber = true;
        tel.phoneNumber = data.phone.number;
        tel.formattedPhoneNumber = data.phone.formattedNumber;
        while(locations.length > 0) {
            locations.pop();
        }
        if (data.position) {
            position.value = data.position;
        }
        data.locations?.forEach(value => {
            locations.push(value);
        });
        data.mission?.forEach(value => {
            mission.push(value);
        });
        if (data.rodo) {
            rodo.value = data.rodo;
        }
        loading.value = false;
    }
}
</script>

<template>
    <div class="grid grid-rows-[max-content_max-content_auto] h-full">
        <Header :loading="loading"
                :email="email"
                :tel="tel"
                :locations="locations"
                :position="position"
                :mission="mission" />
        <Body :token="token" :rodo="rodo" :loading="loading" />
    </div>
</template>