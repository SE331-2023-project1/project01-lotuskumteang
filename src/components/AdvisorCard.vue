<template>
  <RouterLink class="advisor-link hover:scale-105 transform transition-transform duration-300 hover:shadow-md"
    :to="{ name: 'advisor-detail', params: { id: advisor?.id } }"
  >
    <article>
      <div class="card-wrapper p-5 w-72 h-72 border border-gray-600 rounded-lg overflow-hidden">
        <div class="card-body">
          <div class="card-image h-36 overflow-hidden">
            <img class="w-full h-full object-cover" :src="advisor?.image" alt="student image" />
          </div>
          <h2 class="mt-3 text-2xl font-bold">
            {{ advisor?.name }} {{ advisor?.surname }}
            <span>ID: {{ advisor?.id }}</span>
          </h2>
        </div>
      </div>
    </article>
  </RouterLink>
</template>

<script setup lang="ts">
import type { Advisor } from '@/type'
import type { PropType } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  advisor: {
    type: Object as PropType<Advisor>,
    require: true
  }
})
</script>

