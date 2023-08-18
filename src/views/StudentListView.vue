<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue'
import type { StudentItem } from '@/type'
import { ref, watchEffect } from 'vue'
import type { Ref } from 'vue'
import StudentService from '@/services/StudentService'

const students: Ref<Array<StudentItem>> = ref([])

const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

watchEffect(() => {
  StudentService.getStudents(6, props.page).then((response) => {
    students.value = response.data
    console.log(response.data);
  })
})
</script>

<template>
  
  <main class="mt-12 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-x-16 gap-y-16">
    <StudentCard  v-for="student in students"
      :key="student.id"
      :student="student"/>
  </main>
</template>

<style scoped>
</style>
