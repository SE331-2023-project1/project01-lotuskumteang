<script setup lang="ts">
import { type Advisor } from '@/type'
import type { PropType } from 'vue'

defineProps({
    advisor: {
    type: Object as PropType<Advisor>,
    require: true
  }
})
</script>

<template>
  <div v-if="advisor" class="flex justify-center items-center min-h-screen">
    <div class="card-wrapper">
      <div class="card-body">
        <div class="card-image">
          <img :src="advisor?.image" alt="advisor image" class="rounded-lg shadow-md">
        </div>
        <h2 class="text-2xl font-semibold mb-2">{{ advisor?.name }} {{ advisor?.surname }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #f7fafc;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.card-body {
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
}

span {
  font-weight: bold;
}

img {
  max-width: 100%;
  height: auto;
}
</style>

