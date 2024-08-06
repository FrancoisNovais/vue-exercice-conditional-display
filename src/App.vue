<script setup>
import PartOne from './components/PartOne.vue'
import PartTwo from './components/PartTwo.vue'
import PartThree from './components/PartThree.vue'
import PartFour from './components/PartFour.vue'
</script>

<template>
  <main>
    <h1>Conditionnal display</h1>
    <section>
      <PartOne />
      <PartTwo />
      <PartThree />
      <PartFour />
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}
h1 {
  margin-top: 40px;
  font-size: 40px;
  font-weight: bold;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: space-evenly;
}
</style>
