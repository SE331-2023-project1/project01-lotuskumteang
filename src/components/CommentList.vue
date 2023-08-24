<script setup lang="ts">
import { useCommentStore } from '@/stores/comment';
import { storeToRefs } from 'pinia';
const props = defineProps({
  studentId: {
    type: Number,
    require: true
  }
})
const store = useCommentStore()
const index = store.getIndex(props.studentId!)
const comment = storeToRefs(store).comment
</script>
<template>
  <div class="comment-container">
    <div v-if="comment[index]">
      Advisor commented: <br />
      <p>{{ comment[index] }}</p>
    </div>
  </div>
</template>
