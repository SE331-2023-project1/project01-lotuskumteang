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
    <div class="card-wrapper">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">{{ student?.name }} {{ student?.surname }}</h2>
        <p class="text-gray-600"><span class="font-semibold">ID:</span> {{ student?.id }}</p>
        <img :src="student?.image" alt="" class="mt-4 rounded-lg shadow-md">
        <CommentForm class="mt-4" :studentId="student?.id"></CommentForm>
        <CommentList class="mt-4" :studentId="student?.id"></CommentList>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #f7fafc;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.card-body {
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
}

span {
  font-weight: bold;
}

img {
  max-width: 100%;
  height: auto;
}
</style>

