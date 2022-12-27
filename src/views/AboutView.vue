<script setup lang="ts">
import ItemCard from "../components/ItemCard.vue";
</script>

<template>
  <main>
    <h2>About</h2>
    <div class="cards">
      <ItemCard heading="Vue" icon="/vue.svg">AAA</ItemCard>
      <ItemCard heading="Vite" icon="/src/assets/vite.svg">AAA</ItemCard>
      <ItemCard heading="TypeScript" icon="/src/assets/typescript.svg">AAA</ItemCard>
    </div>
  </main>
</template>

<style scoped>
div.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
}
</style>
