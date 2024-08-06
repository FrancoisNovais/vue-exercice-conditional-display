<script setup>
import { ref } from 'vue'

const isConnected = ref(false)

const handleConnection = () => {
  isConnected.value = !isConnected.value
}
</script>

<template>
  <div>
    <button v-if="!isConnected" @click="handleConnection">S'inscrire</button>
    <button v-if="!isConnected" @click="handleConnection">Se connecter</button>
    <button class="disconnect" v-else @click="handleConnection">Se déconnecter</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  gap: 20px;
}
button {
  background-color: white;
  color: #218120;
  border: 2px solid #218120;
  padding: 10px 15px;
  border-radius: 20px;
}
.disconnect {
  background-color: #218120;
  color: white;
}
</style>
