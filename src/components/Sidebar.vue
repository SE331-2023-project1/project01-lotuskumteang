<script setup lang="ts">
// import { ref } from 'vue'
// import {RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <div class="min-h-screen bg-white">
  <div class="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-black hover:shadow-lg">
    <div class="flex h-screen flex-col justify-between pt-2 pb-6">
      <div>
        <div class="w-max p-2.5">
          <!-- <img src="https://tailus.io/images/logo.svg" class="w-32" alt=""> -->
        </div>
        <ul class="mt-6 space-y-2 tracking-wide">
          <li class="min-w-max">
            <a href="#" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-white hover:bg-gray-700">
              <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" class="fill-current text-white dark:fill-slate-600"></path>
                <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" class="fill-current text-gray-500 group-hover:text-gray-600"></path>
                <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" class="fill-current group-hover:text-gray-600"></path>
              </svg>
              <RouterLink :to="{ name: 'passenger-list' }" class="link-item"><span class="group-hover:text-white">Home</span></RouterLink>
            </a>
          </li>
          <li class="min-w-max">
            <a href="#" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-white hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" class="fill-current text-white dark:fill-slate-600"></path>
                <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" class="fill-current text-gray-500 group-hover:text-gray-600"></path>
                <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" class="fill-current group-hover:text-gray-600"></path>
              </svg>
              <RouterLink class="group-hover:text-white" :to="{ name: 'about' }">Student</RouterLink>
            </a>
          </li>
          <li class="min-w-max">
            <a href="#" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-white hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" class="fill-current text-white dark:fill-slate-600"></path>
                <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" class="fill-current text-gray-500 group-hover:text-gray-600"></path>
                <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" class="fill-current group-hover:text-gray-600"></path>
              </svg>
              <RouterLink class="group-hover:text-white" :to="{ name: 'about' }">Teacher</RouterLink>
            </a>
          </li>
        </ul>
      </div>
      <div class="w-max -mb-3">
        <a href="#" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-white hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:fill-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" class="fill-current text-white dark:fill-slate-600"></path>
                <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" class="fill-current text-gray-500 group-hover:text-gray-600"></path>
                <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" class="fill-current group-hover:text-gray-600"></path>
          </svg>
          <span class="group-hover:text-white">Settings</span>
        </a>
      </div>
    </div>
  </div>
</div>

</template>

<style scoped>

</style>