<template>
    <div>
      <h2>Add Student</h2>
      <form @submit.prevent="addStudent">
        <label for="name">Name:</label>
        <input v-model="studentData.name" type="text" id="name" required>
        <label for="surname">Surname:</label>
        <input v-model="studentData.surname" type="text" id="surname" required>
        <label for="studentID">Student ID:</label>
        <input v-model="studentData.studentID" type="text" id="studentID" required>
        <label for="profileImage">Profile Image URL:</label>
        <input v-model="studentData.profileImage" type="url" id="profileImage" required>
        <button type="submit">Add Student</button>
      </form>
    </div>
  </template>
  
  <script>
  import { useStudentStore } from '@/stores/student';
  
  export default {
    data() {
      return {
        studentData: {
          name: '',
          surname: '',
          studentID: '',
          profileImage: '',
          advisorId: ''
        }
      };
    },
    methods: {
      async addStudent() {
        const studentStore = useStudentStore();
        await studentStore.addStudent(this.studentData);
        this.studentData = {
            name: '',
            surname: '',
            studentID: '',
            profileImage: '',
            advisorId: ''
        };
      }
    }
  };
  </script>
  