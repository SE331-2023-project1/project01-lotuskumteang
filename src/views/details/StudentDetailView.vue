<script setup lang="ts">
import CommentForm from '@/components/CommentForm.vue'
import CommentList from '@/components/CommentList.vue'
import { useCommentStore } from '@/stores/comment'
import type { StudentItem } from '@/type'
import type { PropType } from 'vue'
defineProps({
  student: {
    type: Object as PropType<StudentItem>,
    require: true
  }
})
useCommentStore().resetComment()
</script>

<template>
  <div v-if="student">
    <div class="card-wrapper">
      <div class="card-body">
        <h2>{{ student?.name }} {{ student?.surname }}</h2>
        <p><span>ID:</span> {{ student?.id }}</p>
        <img :src="student?.image" alt="" />
        <CommentForm></CommentForm>
        <CommentList></CommentList>
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
