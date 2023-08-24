<template>
  <RouterLink class="advisor-link hover:scale-105 transform transition-transform duration-300 hover:shadow-md"
    :to="{ name: 'advisor-detail', params: { id: advisor?.id } }">
    <article class="w-full bg-white rounded-lg overflow-hidden hover:shadow-md">
      <div class="p-2 space-y-2">
        <div class="w-full h-48 bg-cover bg-center"
          :style="'background-image: url(' + advisor?.image + ');'" title="Student Image">
        </div>
        <div class="p-2">
          <p class="text-xs text-gray-500 mb-1">
            Student
          </p>
          <div class="text-gray-800 font-bold text-lg mb-1">{{ advisor?.name }} {{ advisor?.surname }}</div>
          <p class="text-gray-700 text-sm mb-1">ID: {{ advisor?.id }}</p>
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