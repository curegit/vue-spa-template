<script setup lang="ts">
import ItemCard from "../components/ItemCard.vue";

import vueIcon from "../assets/vue.svg";
import viteSvg from "../assets/vite.svg";
import tsIcon from "../assets/typescript.svg";
</script>

<template>
  <main>
    <h2>About</h2>
    <div class="cards">
      <ItemCard heading="Vue" :icon="vueIcon">
        <p><strong>Vue</strong> is a front end JavaScript framework.</p>
      </ItemCard>
      <ItemCard heading="Vite" :icon="viteSvg">
        <p>
          <strong>Vite</strong>
        </p>
      </ItemCard>
      <ItemCard heading="TypeScript" :icon="tsIcon">
        <p>
          <strong>TypeScript</strong>
        </p>
      </ItemCard>
    </div>
  </main>
</template>

<style scoped>
div.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
}
</style>
