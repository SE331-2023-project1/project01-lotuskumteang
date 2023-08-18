<script setup lang="ts">
defineProps({
    comments: {
      type: Array
    }
  })
</script>
<template>
    <div class="comment-container">
        <ul>
            <li v-for="(comment, index) in comments" :key="index">
                <div v-if="comment.content">Advisor commented: <br>
                <p>{{ comment.content }}</p>
                </div>
                
                <br/>
            </li>
        </ul>
    </div>
</template>