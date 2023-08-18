<script setup lang="ts">
import { reactive } from 'vue';
const form = reactive({
    content: ''
})
const emit = defineEmits(['comment-submit'])
function onSubmit() {
    const comment = {
        content: form.content
    }
    if (form.content === '') {
        alert('Comment is empty.')
        return
    }
    emit('comment-submit', comment)
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