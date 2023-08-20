<template>
  <div>
    <h2>Add Advisor</h2>
    <form @submit.prevent="addAdvisor">
      <label for="name">Name:</label>
      <input v-model="advisorData.name" type="text" id="name" required>
      <label for="surname">Surname:</label>
      <input v-model="advisorData.surname" type="text" id="surname" required>
      <label for="profileImage">Profile Image URL:</label>
      <input v-model="advisorData.profileImage" type="url" id="profileImage" required>
      <button type="submit">Add Advisor</button>
    </form>
  </div>
</template>

<script>
import { useAdvisorStore } from '@/stores/advisor';

export default {
  data() {
    return {
      advisorData: {
        name: '',
        surname: '',
        profileImage: ''
      }
    };
  },
  methods: {
    async addAdvisor() {
      const advisorStore = useAdvisorStore();
      await advisorStore.addAdvisor(this.advisorData); 
      this.advisorData = {
        name: '',
        surname: '',
        profileImage: ''
      };
    }
  }
};
</script>