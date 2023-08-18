<template>
    <RouterLink class="advisor-link" :to="{ name: 'advisor-detail', params: { id: advisor?.id } }">
      <article>
        <div class="card-wrapper">
          <div class="card-body">
            <div class="card-image">
              <img :src="advisor?.image" alt="passenger image"/>
            </div>
            <h2>
              {{ advisor?.name }} {{advisor?.surname }} 
            </h2>
          </div>
        </div>
      </article>
    </RouterLink>
  </template>
  
  <script setup lang="ts">
  import type { Advisor } from '@/type'
  import type { PropType } from 'vue'
  
  const props = defineProps({
    advisor: {
      type: Object as PropType<Advisor>,
      require: true
    }
  })
  </script>
  
  <style scoped>
  .card-wrapper {
    padding: 20px;
    width: 300px;
    height: 300px;
    cursor: pointer;
    border: 1px solid #39495c;
    border-radius: 8px;
    overflow: hidden;
  
  }
  
  .card-image {
    height: 150px; 
    overflow: hidden;
  }
  
  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .card-wrapper:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
  
  .passenger-link {
    color: #2c3e50;
    text-decoration: none;
  }
  
  .card-body h2 {
    margin: 0 0 12px 0;
    font-size: 1.6rem;
    font-weight: bold;
  }
  
  .card-body h2>span {
    font-size: 16px;
    color: #818181;
  }
  
  .card-body .card-email {
    margin: 0 0 12px 0;
    color: #818181;
  }
  
  .card-body p {
    margin: 0 0 12px 0;
  }
  </style>