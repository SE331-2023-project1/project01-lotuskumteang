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
  <div v-if="advisor">
    <div class="card-wrapper">
      <div class="card-body">
        <div class="card-body">
          <div class="card-image">
            <img :src="advisor?.image" alt="advisor image"/>
          </div>
        </div>
        <h2>
          {{ advisor?.name }} {{ advisor?.surname }} 
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-body {
  line-height: 36pt;
  margin-top: 2rem;
}
span {
  font-weight: bold;
}
</style>
