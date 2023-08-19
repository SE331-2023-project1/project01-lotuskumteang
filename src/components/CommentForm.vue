<script setup lang="ts">
import { useCommentStore } from '@/stores/comment';
import { reactive } from 'vue';
const form = reactive({
    content: ''
})
const store = useCommentStore()
function onSubmit() {
    if (form.content === '') {
        alert('Comment is empty.')
        return
    }
    store.setComment(form.content)
    form.content = ''
}
</script>

<template>
    <form class="comment-form" @submit.prevent="onSubmit">
        <label for="comment">Leave comment as advisor:</label>
        <textarea id="comment" v-model="form.content"></textarea>
        <input class="button" type="submit" value="Submit">
    </form>
</template>