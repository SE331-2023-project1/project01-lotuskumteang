<template>
  <div>
    <h2>Add Student</h2>
    <form @submit.prevent="addStudent">
      <label for="name">Name:</label>
      <input v-model="studentData.name" type="text" id="name" required>
      <label for="surname">Surname:</label>
      <input v-model="studentData.surname" type="text" id="surname" required>
      <label for="id">Student ID:</label>
      <input v-model="studentData.id" type="text" id="id" required>
      <label for="image">Profile Image URL:</label>
      <input v-model="studentData.image" type="text" id="image" required>
      <label for="advisorId">Course ID :</label>
      <input v-model="studentData.advisorId" type="text" id="advisorId" required>
      <label for="courseId">Advisor ID :</label>
      <input v-model="studentData.courseId" type="text" id="courseId" required>
      <button type="submit">Add Student</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStudentStore } from '@/stores/student';
import type { StudentItem } from '@/type'; // Import the correct type definition

const studentData = ref<StudentItem>({
  id: 0,
  name: '',
  surname: '',
  image: '',
  advisorId: '',
  courseId: ['']
});

const addStudent = async () => {
  const studentStore = useStudentStore();
  studentStore.addStudent(studentData.value);
  studentData.value = {
    id: 0,
    name: '',
    surname: '',
    image: '',
    advisorId: '',
    courseId: ['']
  };
};
</script>
