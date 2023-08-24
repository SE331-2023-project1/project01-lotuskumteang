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
  <div v-if="student" class="flex flex-col items-center">
    <div class="flex justify-center items-center mt-12">
      <router-link :to="{ name: 'student-detail' }" class="router-link">
        Student Details
      </router-link>
      <span class="mx-2">|</span>
      <router-link :to="{ name: 'advisor-detail-student' }" class="router-link">
        Advisor Details
      </router-link>
    </div>
  </div>
  <router-view :student="student" :advisor="advisor"></router-view>
</template>

<style scoped>
.router-link-exact-active {
  color: #65451F;
  font-weight: bold;
}

.router-link-exact-active:hover {
  background-color: transparent;
}

.router-link {
  display: inline-block;
  padding: 0 0.5rem;
  color: #2c3e50;
}
</style>

@/stores/student