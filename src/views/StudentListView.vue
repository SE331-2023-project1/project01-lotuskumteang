<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue'
import type { StudentItem } from '@/type'
import { ref, watchEffect, computed } from 'vue'
import type { Ref } from 'vue'
import StudentService from '@/services/StudentService'


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

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvent.value / 2)
  return props.page.valueOf() < totalPages
})

const limit = ref(props.limit)

watchEffect(() => {
  StudentService.getStudents(2, props.page).then((response) => {
    students.value = response.data
    totalEvent.value = response.headers['x-total-count']
  })
})

</script>

<template>
  <main class="mt-12 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-x-16 gap-y-16">
    <StudentCard  v-for="student in students"
      :key="student.id"
      :student="student"/>
      <div class="pagination">
      <RouterLink :to="{ name: 'student-list', query: { page: page - 1, limit: limit } }" rel="prev" v-if="page != 1"
        id="page-prev"> Prev
        Page
      </RouterLink>
      <RouterLink :to="{ name: 'student-list', query: { page: page + 1, limit: limit } }" rel="next" v-if="hasNextPage"
        id="page-next">
        Next Page
      </RouterLink>
    </div>
  </main>
  
</template>


<style scoped>
</style>
