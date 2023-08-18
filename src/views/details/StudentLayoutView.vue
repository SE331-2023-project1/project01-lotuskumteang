<script setup lang="ts">
import { ref } from 'vue'
import { useStudentStore } from '@/stores/student'
import { storeToRefs } from 'pinia'

const useStudent = useStudentStore()
const student = storeToRefs(useStudent).student
const id = ref(student?.value?.id)
</script>

<template>
  <div v-if="student">
    <RouterLink :to="{name: 'student-detail'}">
        Student Details            
        </RouterLink>|
        <!-- Temporary router link -->
        <RouterLink :to="{name: 'about', params: { id }}">
        Advisor Details   
        </RouterLink>
        
    </div>
    <RouterView :student="student"></RouterView>
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
@/stores/student