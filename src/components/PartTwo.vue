<script setup>
import { ref } from 'vue'

const isLiked = ref(false)

const handleLike = () => {
  if (isLiked.value === true) {
    isLiked.value = false
  } else {
    isLiked.value = true
  }
}
</script>

<template>
  <div>
    <font-awesome-icon v-if="!isLiked" @click="handleLike" :icon="['fas', 'thumbs-up']" />
    <font-awesome-icon v-else @click="handleLike" :icon="['fas', 'thumbs-down']" />
  </div>
</template>

<style scoped></style>
