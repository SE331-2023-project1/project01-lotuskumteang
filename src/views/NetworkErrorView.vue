<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
</script>
<template>
    <div class="flex flex-col items-center mt-20">
      <h1 class="text-4xl text-red-500 mb-4">Uh-oh!</h1>
      <h3 class="text-lg text-gray-700 mb-8">
        It looks like you're experiencing some network issues, please take a breath and
        <a href="#" class="text-blue-500 hover:underline" @click="router.go(-1)">click here</a>
        to try again.
      </h3>
      <p class="text-gray-700 mb-2">Sorry, we can't get the data from the server.</p>
      <p class="text-gray-700 mb-4">Please try again later.</p>
    </div>
  </template>
  
  
  