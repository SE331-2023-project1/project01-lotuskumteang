<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/Sidebar.vue'
</script>

<template>
  <header>
    <div class="flex-container">
      <SideBar /> 

    </div>
  </header>
</template>

<style scoped>

.flex-container {
  display: flex;
  min-height: 100vh;
  background-color: #F8EAD8;
}
</style>