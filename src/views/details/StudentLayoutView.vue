<script setup lang="ts">
import { useStudentStore } from '@/stores/student'
import { storeToRefs } from 'pinia'
import { useAdvisorStore } from '@/stores/advisor';
import { useRouter } from 'vue-router';
import StudentService from '@/services/StudentService';
import { type StudentItem } from '@/type';
import { ref } from 'vue'

const useStudent = useStudentStore()
const student = storeToRefs(useStudent).student
const useAdvisor = useAdvisorStore()
const advisor = storeToRefs(useAdvisor).advisor
const event = ref<StudentItem | null>(null)
const props = defineProps({
  id: String
})

const router = useRouter()
    StudentService.getStudentById(Number(props.id)).then((response) => {
    event.value = response.data
    }).catch(error => {
        console.log(error)
            if(error.response && error.response.status === 404) {
                router.push({ name: '404-resource', params: { resource: 'event'} })
            }else {
                router.push({ name: 'network-error' })
            }
    })
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