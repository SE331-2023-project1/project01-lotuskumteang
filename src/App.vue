<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <!-- <SideBar/>  
  <RouterView /> -->
  <header>
    <div class="flex-container">
      <SideBar /> <RouterView />

      <!-- <nav>
        <RouterLink :to="{ name: 'passenger-list' }">Home</RouterLink>
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
      </nav> -->
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.1rem;
}

nav a:first-of-type {
  border: 0;
}

.flex-container {
  display: flex;
  min-height: 100vh;
  background-color: #F8EAD8;
}

.main-content {
  flex: 1;
}
</style>
