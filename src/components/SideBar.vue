<script setup lang="ts">
// import {RouterLink, RouterView } from 'vue-router'

</script>
<template>
  <div class="min-h-screen bg-65451F flex top-0 left-0">
    <div
    
    >
      <div class="flex h-screen flex-col justify-between pt-2 pb-6">
        <div>
          <div class="w-max p-2.5">
            <!-- <img src="https://tailus.io/images/logo.svg" class="w-32" alt=""> -->
          </div>
          <ul class="mt-6 space-y-2 tracking-wide">
            <li class="min-w-max">
              <RouterLink class="group-hover:text-white" :to="{ name: 'student-list' }">
                <a href="/" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-white hover:bg-8D7B68">
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
                <a href="/advisor" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-white hover:bg-8D7B68">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                      class="fill-current text-white dark:fill-slate-600"></path>
                    <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                      class="fill-current text-gray-500 group-hover:text-gray-600"></path>
                    <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                      class="fill-current group-hover:text-gray-600"></path>
                  </svg>
                  <span class="ml-2">Teacher</span>
                </a>
              </RouterLink>
            </li>
          </ul>
        </div>
        
      </div>
      
    </div>
    
  </div>
  <div class="flex flex-col w-full overflow-auto">
      <RouterView />
    </div>
</template>

<style scoped>
.sidebar {
  width: 3.35rem;
  overflow-y: auto;
  background-color: #65451F; 
}

.sidebar::-webkit-scrollbar {
  width: 8px;
}

.sidebar::-webkit-scrollbar-thumb {
  background-color: #8D7B68;
  border-radius: 10px;
}

.sidebar::-webkit-scrollbar-track {
  background-color: #65451F;
}
</style>
