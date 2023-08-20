<script setup lang="ts">
import { useCommentStore } from '@/stores/comment';
import { reactive } from 'vue';
const form = reactive({
    content: ''
})
const store = useCommentStore()
const props = defineProps({
  studentId: {
    type: Number
  }
})

function onSubmit() {
    if (form.content === '') {
        alert('Comment is empty.')
        return
    }
    store.setComment(props.studentId!, form.content)
    form.content = ''
}
</script>

<template>
    <div>
        <label for="name" class="text-black font-bold font-fig">Leave a comment as advisor:</label>
    </div>
    <form class="comment-form" @submit.prevent="onSubmit">
      <textarea id="comment" v-model="form.content" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-stone-600"></textarea>
      <button class="mt-2 bg-65451F hover:bg-8D7B68 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-stone-600" type="submit">Submit</button>
    </form>
  </template>

<style scoped>
.comment-form {
  max-width: 400px;
  margin: auto;
}

textarea {
  resize: vertical;
  height: 150px;
}

.button {
  cursor: pointer;
}
</style>