<script setup lang="ts">
import { useCommentStore } from '@/stores/comment'
import { storeToRefs } from 'pinia'
const store = useCommentStore()
const comment = storeToRefs(store).comment
</script>
<template>
  <div class="comment-container">
    <div v-if="comment">
      Advisor commented: <br />
      <p>{{ comment }}</p>
    </div>
  </div>
</template>
