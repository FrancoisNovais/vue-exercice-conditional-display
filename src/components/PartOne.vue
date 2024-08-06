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
    <button v-else @click="handleConnection">Se déconnecter</button>
  </div>
</template>

<style scoped></style>
