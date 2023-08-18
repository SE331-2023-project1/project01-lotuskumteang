<script setup lang="ts">
// import { ref } from 'vue'
// import {RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div class="min-h-screen bg-black">
    <div class="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-black hover:shadow-lg">
      <div class="flex h-screen flex-col justify-between pt-2 pb-6">
        <div>
          <div class="w-max p-2.5">
            <!-- <img src="https://tailus.io/images/logo.svg" class="w-32" alt=""> -->
          </div>
          <ul class="mt-12 space-y-6 tracking-wide">
            <li class="min-w-max">
              <RouterLink class="group-hover:text-white" :to="{ name: 'passenger-list' }">
                <a href="/" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-white hover:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                      class="fill-current text-white dark:fill-slate-600"></path>
                    <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                      class="fill-current text-gray-500 group-hover:text-gray-600"></path>
                    <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                      class="fill-current group-hover:text-gray-600"></path>
                  </svg>
                  <span class="ml-2">Home</span>
                </a>
              </RouterLink>
            </li>
            <li class="min-w-max">
              <RouterLink class="group-hover:text-white" :to="{ name: 'about' }">
                <a href="/about" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-white hover:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                      class="fill-current text-white dark:fill-slate-600"></path>
                    <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                      class="fill-current text-gray-500 group-hover:text-gray-600"></path>
                    <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                      class="fill-current group-hover:text-gray-600"></path>
                  </svg>
                  <span class="ml-2">Student</span>
                </a>
              </RouterLink>
            </li>
            <li class="min-w-max">
              <RouterLink class="group-hover:text-white" :to="{ name: 'advisor-list' }">
                <a href="/about" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-white hover:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                      class="fill-current text-white dark:fill-slate-600"></path>
                    <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                      class="fill-current text-gray-500 group-hover:text-gray-600"></path>
                    <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                      class="fill-current group-hover:text-gray-600"></path>
                  </svg>
                  <span class="ml-2">Advisor</span>
                </a>
              </RouterLink>
            </li>
          </ul>
        </div>
    </div>
  </div>
</div>
</template>

<style scoped>
</style>