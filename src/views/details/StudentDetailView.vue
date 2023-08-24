<script setup lang="ts">
import CommentForm from '@/components/CommentForm.vue'
import CommentList from '@/components/CommentList.vue'
import type { StudentItem } from '@/type'
import { type PropType } from 'vue'
defineProps({
  student: {
    type: Object as PropType<StudentItem>,
    require: true
  }
})
</script>

<template>
  <div v-if="student" class="flex justify-center items-center min-h-screen">
    <div class="max-w-2xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <div class="text-center">
        <h2 class="text-2xl font-semibold mb-2">{{ student?.name }} {{ student?.surname }}</h2>
        <p class="text-gray-600"><span class="font-semibold">ID:</span> {{ student?.id }}</p>
        <p class="text-gray-600"><span class="font-semibold">Enrolled Courses: </span> 
          <ul>
            <li v-for="courseId in student?.courseId" :key="courseId">{{ courseId }}</li>
          </ul>
        </p>
        <img :src="student?.image" alt="" class="mt-4 rounded-lg shadow-md max-w-full h-auto">
      </div>
      <CommentForm class="mt-4" :studentId="student?.id"></CommentForm>
      <CommentList class="mt-4" :studentId="student?.id" :key="student?.id"></CommentList>
    </div>
  </div>
</template>

<style>

</style>


