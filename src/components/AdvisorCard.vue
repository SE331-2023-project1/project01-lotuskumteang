<template>
  <RouterLink class="advisor-link hover:scale-105 transform transition-transform duration-300 hover:shadow-md"
    :to="{ name: 'advisor-detail', params: { id: advisor?.id } }"
  >
    <article>
      <!-- <div class="card-wrapper p-5 w-72 h-72 border border-gray-600 rounded-lg overflow-hidden">
        <div class="card-body">
          <div class="card-image h-36 overflow-hidden">
            <img class="w-full h-full object-cover" :src="advisor?.image" alt="student image" />
          </div>
          <h2 class="mt-3 text-2xl font-bold">
            {{ advisor?.name }} {{ advisor?.surname }}
            <span>ID: {{ advisor?.id }}</span>
          </h2>
        </div>
      </div> -->

      <div class="p-2 space-y-2">
    <div class="border bg-white flex">
        <div class="w-48 h-48 bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" :style="'background-image: url(' + advisor?.image + '); background-size: cover; background-position: center center;'" title="Student Image">
        </div>
        <div class="p-1 border-t lg:border-t-0 border-gray-400 bg-white flex-1 flex flex-col justify-between leading-normal">
            <div class="mb-2">
                <p class="text-xs text-gray-500 flex items-center">
                    Advisor
                </p>
                <div class="text-gray-800 font-bold text-lg mb-1">{{ advisor?.name }} {{ advisor?.surname }}</div>
                <p class="text-gray-700 text-sm">Class Enroll:</p>
                <p class="text-gray-700 text-sm">ID: {{ advisor?.id }}</p>
            </div>
            <div class="flex items-center">
            </div>
        </div>
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

