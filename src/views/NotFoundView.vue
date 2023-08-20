<script setup lang="ts">
defineProps({
  resource: {
    type: String,
    require: true,
    default: 'page'
  }
})
</script>

<template>
  <div class="flex flex-col items-center mt-20">
    <h1 class="text-4xl text-red-500 mb-4">Oops!</h1>
    <h3 class="text-lg text-gray-700 mb-8">The {{ resource }} you're looking for is not here.</h3>
    <router-link :to="{ name: 'student-list' }" class="bg-65451F hover:bg-8D7B68 text-white py-2 px-4 rounded transition duration-300">Back to home page</router-link>
  </div>
</template>
