<template>
  <RouterLink class="student-link hover:scale-105 transform transition-transform duration-300 hover:shadow-md"
    :to="{ name: 'student-detail', params: { id: student?.id } }"
  >
    <article>
      <div class="card-wrapper p-5 w-72 h-72 border border-gray-600 rounded-lg overflow-hidden">
        <div class="card-body">
          <div class="card-image h-36 overflow-hidden">
            <img class="w-full h-full object-cover" :src="student?.image" alt="student image" />
          </div>
          <h2 class="mt-3 text-2xl font-bold">
            {{ student?.name }} {{ student?.surname }}
            <span>ID: {{ student?.id }}</span>
          </h2>
        </div>
      </div>
    </article>
  </RouterLink>
</template>

<script setup lang="ts">
import type { StudentItem } from '@/type'
import type { PropType } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  student: {
    type: Object as PropType<StudentItem>,
    require: true
  }
})
</script>

