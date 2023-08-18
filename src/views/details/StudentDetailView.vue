<script setup lang="ts">
import CommentForm from '@/components/CommentForm.vue'
import CommentList from '@/components/CommentList.vue'
import type { StudentItem, CommentItem } from '@/type'
import type { PropType, Ref } from 'vue'
import { ref } from 'vue'
defineProps({
  student: {
    type: Object as PropType<StudentItem>,
    require: true
  }
})
const comments: Ref<CommentItem[]> = ref([])
function addComment(comment: CommentItem) {
  comments.value.push(comment)
  console.log(comment)
}
</script>

<template>
  <div v-if="student">
    <div class="card-wrapper">
      <div class="card-body">
        <h2>{{ student?.name }} {{ student?.surname }}</h2>
        <p><span>ID:</span> {{ student?.id }}</p>
        <img :src="student?.image" alt="" />
        <CommentForm @comment-submit="addComment"></CommentForm>
        <CommentList :comments="comments"></CommentList>
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
