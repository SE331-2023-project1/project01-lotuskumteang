<script setup lang="ts">
import { ref } from 'vue'
import { useAdvisorStore } from '@/stores/advisor';
import { storeToRefs } from 'pinia';

const storeAdvisor = useAdvisorStore()
const advisor = storeToRefs(storeAdvisor).advisor
const id = ref(advisor?.value?.id)
</script>

<template>
  <div v-if="advisor">
    <div class="nav">
      <router-link :to="{ name: 'advisor-detail', params: { id } }">Detail</router-link> | 
      <!-- <router-link :to="{ name: 'advisor-edit', params: { id } }">Edit</router-link> -->
    </div>

    <RouterView :advisor="advisor" ></RouterView>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}
.nav a.router-link-exact-active {
  color: #42b983;
  font-weight: bold;
}

.nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.nav a {
  display: inline-block;
  padding: 0 0.5rem;
  color: #2c3e50;
}
</style>
