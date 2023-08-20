<template>
  <div>
    <h2>Add Advisor</h2>
    <form @submit.prevent="addAdvisor">
      <label for="name">Name:</label>
      <input v-model="advisorData.name" type="text" id="name" required>
      <label for="surname">Surname:</label>
      <input v-model="advisorData.surname" type="text" id="surname" required>
      <label for="image">Image URL:</label>
      <input v-model="advisorData.image" type="url" id="image" required>
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAdvisorStore } from '@/stores/advisor';

const advisorData = ref({
  id: '',
  name: '',
  surname: '',
  image: ''
});

const addAdvisor = async () => {
  const advisorStore = useAdvisorStore();
  await advisorStore.addAdvisor(advisorData.value);
  advisorData.value = {
    id: '',
    name: '',
    surname: '',
    image: ''
  };
};
</script>
