<script setup lang="ts">
import { type Advisor } from '@/type'
import type { PropType } from 'vue'

defineProps({
    advisor: {
    type: Object as PropType<Advisor>,
    require: true
  }
})
</script>

<template>
  <div v-if="advisor" class="flex justify-center items-center min-h-screen">
    <div class="max-w-2xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <div class="text-center">
        <div class="mb-4">
          <img :src="advisor?.image" alt="advisor image" class="rounded-lg shadow-md">
        </div>
        <h2 class="text-2xl font-semibold mb-2">{{ advisor?.name }} {{ advisor?.surname }}</h2>
      </div>
    </div>
  </div>
</template>

<style>

</style>

