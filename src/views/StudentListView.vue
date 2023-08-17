<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue'
import type { StudentItem } from '@/type'
import { ref, watchEffect } from 'vue'
import type { Ref } from 'vue'
import StudentService from '@/services/StudentService'
import Sidebar from '@/components/Sidebar.vue'

const Students: Ref<Array<StudentItem>> = ref([])

const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

watchEffect(() => {
  StudentService.getStudents(10, props.page).then((response) => {
    Students.value = response.data
  })
})
</script>

<template>
  <main class="container">
    <StudentCard
      v-for="Student in Students"
      :key="Student.studentId"
      :Student="Student"
    ></StudentCard>
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
