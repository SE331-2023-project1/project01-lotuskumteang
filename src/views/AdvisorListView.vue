Advisor


<script setup lang="ts">
import AdvisorCard from '@/components/AdvisorCard.vue'
import type { Advisor } from '@/type'
import { ref, watchEffect, computed } from 'vue'
import type { Ref } from 'vue'
import AdvisorService from '@/services/AdvisorService'
import { useRouter } from 'vue-router'

const advisors: Ref<Array<Advisor>> = ref([])

const totalEvent = ref<number>(0)

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvent.value / 2)
  return props.page.valueOf() < totalPages
})

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  limit: {
    type: Number,
    required: true
  }
})

watchEffect(() => {
  AdvisorService.getAdvisors(6, props.page).then((response) => {
    advisors.value = response.data
    totalEvent.value = response.headers['x-total-count']
  })
})

const router = useRouter()

const limit = ref(props.limit)
</script>

<template>
    <main class="mt-12 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-x-16 gap-y-16">
    <AdvisorCard v-for="advisor in advisors" :key="advisor.id" :advisor="advisor"></AdvisorCard> 
  <div class="pagination mt-12 mx-auto text-center">
    <RouterLink
      :to="{ name: 'advisor-list', query: { page: page - 1, limit: limit } }"
      rel="prev"
      v-if="page != 1 && advisors.length > 0"
      id="page-prev"
      class="pagination-button"
    >
      Prev Page
    </RouterLink>
    <RouterLink
      :to="{ name: 'advisor-list', query: { page: page + 1, limit: limit } }"
      rel="next"
      v-if="hasNextPage && advisors.length > 0"
      id="page-next"
      class="pagination-button"
    >
      Next Page
    </RouterLink>
  </div>
</main>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
  padding-left: 70%;
}

.pagination-button {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
  padding: 0.5rem 1rem;
}

#page-prev {
  order: 1;
}

#page-next {
  order: 2;
}
</style>



