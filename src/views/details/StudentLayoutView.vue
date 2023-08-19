<script setup lang="ts">
import { useStudentStore } from '@/stores/student'
import { storeToRefs } from 'pinia'
import { useAdvisorStore } from '@/stores/advisor';

const useStudent = useStudentStore()
const student = storeToRefs(useStudent).student
const useAdvisor = useAdvisorStore()
const advisor = storeToRefs(useAdvisor).advisor
</script>

<template>
  <div v-if="student" class="flex flex-col items-center" >
    <div class="nav">
    <RouterLink :to="{name: 'student-detail'}">
        Student Details            
        </RouterLink>|
        <!-- Temporary router link -->
        <RouterLink :to="{name: 'advisor-detail-student'}">
        Advisor Details   
        </RouterLink>
      </div>
    </div>
    <RouterView :student="student" :advisor="advisor"></RouterView>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}
.nav a.router-link-exact-active {
  color: #65451F;
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