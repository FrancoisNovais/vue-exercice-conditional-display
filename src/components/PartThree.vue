<script setup>
import { ref } from 'vue'

const wallet = ref(0)

const handleAddCoin = (add) => {
  wallet.value = wallet.value + add
}
</script>

<template>
  <div>
    <h2 v-if="wallet === 0">😱 Mon porte monnaie est vide</h2>
    <h2 v-else-if="wallet === 1">Mon premier euros 🤩</h2>
    <h2 v-else-if="wallet > 30">🍾 Ca y est je suis riche !! 🍾</h2>
    <h2 v-else-if="wallet > 10">Yes, plus de 10 € premier €</h2>

    <p>{{ wallet }} €</p>
    <div>
      <button @click="handleAddCoin(1)">Ajouter 1€</button>
      <button @click="handleAddCoin(5)">Ajouter 5€</button>
    </div>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
div > div {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
h2 {
  color: #ff7f50;
  font-size: 18px;
  font-weight: bold;
}
p {
  font-weight: bold;
}
button {
  border: 2px solid black;
  background-color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
}
</style>
