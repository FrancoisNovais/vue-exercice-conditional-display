<script setup>
import { ref } from 'vue'

const isLiked = ref(false)

const handleLike = () => {
  isLiked.value = !isLiked.value
}
</script>

<template>
  <div>
    <font-awesome-icon v-if="!isLiked" @click="handleLike" :icon="['fas', 'thumbs-up']" />
    <font-awesome-icon class="dislike" v-else @click="handleLike" :icon="['fas', 'thumbs-down']" />
  </div>
</template>

<style scoped>
svg {
  color: #218120;
  font-size: 48px;
}

.dislike {
  color: red;
}
</style>
