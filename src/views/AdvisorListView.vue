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
  AdvisorService.getAdvisors(10, props.page).then((response) => {
    advisors.value = response.data
  })
})
</script>

<template>
  <main class="container">
    <AdvisorCard v-for="advisor in advisors" :key="advisor.studentId" :advisor="advisor"></AdvisorCard>
  </main>
</template>

<style scoped>
.container {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  row-gap: 3rem;
  
}

@media (max-width: 1149px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 859px) {
  .container {
    grid-template-columns: 1fr;
    
  }
}
</style>
