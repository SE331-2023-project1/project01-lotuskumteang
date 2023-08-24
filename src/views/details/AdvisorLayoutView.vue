<script setup lang="ts">
import { useAdvisorStore } from '@/stores/advisor';
import type { Advisor } from '@/type';
import { storeToRefs } from 'pinia';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import AdvisorService from '@/services/AdvisorService';


const storeAdvisor = useAdvisorStore()
const advisor = storeToRefs(storeAdvisor).advisor
const event = ref<Advisor | null>(null)
const props = defineProps({
  id: String
})

const router = useRouter()
    AdvisorService.getAdvisorById(Number(props.id)).then((response) => {
    event.value = response.data
    }).catch(error => {
        console.log(error)
            if(error.response && error.response.status === 404) {
                router.push({ name: '404-resource', params: { resource: 'event'} })
            }else {
                router.push({ name: 'network-error' })
            }
    })
</script>

<template>
  <div v-if="advisor" class="pt-12">
    <router-view :advisor="advisor"></router-view>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}
.nav a.router-link-exact-active {
  @apply text-green-500 font-bold;
}

.nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.nav a {
  @apply inline-block px-2 py-1 text-gray-700;
}
</style>

