<script setup lang="ts">
import AdvisorCard from '@/components/AdvisorCard.vue'
import type { Advisor } from '@/type'
import { ref, watchEffect } from 'vue'
import type { Ref } from 'vue'
import AdvisorService from '@/services/AdvisorService'

const advisors: Ref<Array<Advisor>> = ref([])

const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

watchEffect(() => {
  AdvisorService.getAdvisors(6, props.page).then((response) => {
    advisors.value = response.data
  })
})
</script>

<template>
  <main class="mt-12 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-x-16 gap-y-16">
    <AdvisorCard v-for="advisor in advisors" :key="advisor.id" :advisor="advisor"></AdvisorCard>
  </main>
</template>

<style scoped>

</style>
