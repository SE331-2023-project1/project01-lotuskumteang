<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue'
import type { StudentItem } from '@/type'
import { ref, watchEffect, computed } from 'vue'
import type { Ref } from 'vue'
import StudentService from '@/services/StudentService'
import AddStudent from '@/components/AddStudent.vue'


const students: Ref<Array<StudentItem>> = ref([])
const totalEvent = ref<number>(0)

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
const limit = ref(props.limit)

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvent.value / 6)
  return props.page.valueOf() < totalPages
})

watchEffect(() => {
  StudentService.getStudents(6, props.page).then((response) => {
    students.value = response.data
    totalEvent.value = response.headers['x-total-count']
  })
})

console.log(hasNextPage)
</script>

<template>
  <main class="flex flex-col items-center justify-center h-screen">
    <div class="flex flex-col items-center">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <StudentCard v-for="student in students" :key="student.id" :student="student" class="w-full mb-4" />
      </div>

      <!-- Add student test -->
      <AddStudent/>
      <!-- Add student test -->

      <div class="pagination flex items-center -space-x-px h-10 mt-4">
    <RouterLink
      :to="{ name: 'student-list', query: { page: page - 1, limit: limit } }"
      rel="prev"
      v-if="page != 1 && students.length > 0"
      id="page-prev"
      class="pagination-button"
    >
      Prev Page
    </RouterLink>
    <RouterLink
      :to="{ name: 'student-list', query: { page: page + 1, limit: limit } }"
      rel="next"
      v-if="hasNextPage && students.length > 0"
      id="page-next"
      class="pagination-button"
    >
      Next Page
    </RouterLink>
  </div>
  </div>
</main>
</template>

<style scoped>
.pagination-button {
  padding: 0.5rem 1rem;
  background-color: #8D7B68;
  color: white;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease-in-out;
  text-align: center;
  display: inline-block;
  white-space: nowrap;
}

.pagination-button:hover {
  background-color: #65451F;
}

@media (max-width: 767px) {
  .pagination {
    flex-direction: column;
  }
  .pagination-button {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}
</style>