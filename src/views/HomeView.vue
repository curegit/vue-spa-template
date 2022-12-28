<script setup lang="ts">
import HelloWorld from "../components/HelloWorld.vue";

import vueIcon from "../assets/vue.svg";
import viteIcon from "../assets/vite.svg";
import tsIcon from "../assets/typescript.svg";

const icons = {
  Vue: vueIcon,
  Vite: viteIcon,
  TypeScript: tsIcon,
};
</script>

<template>
  <main>
    <h2>Home</h2>
    <HelloWorld message="Vite + Vue + TS" />
  </main>
  <aside>
    <figure v-for="(val, key) in icons" :key="key">
      <img class="icon" :src="val" :alt="key" />
    </figure>
  </aside>
</template>

<style scoped>
.grid {
  display: grid;
}
</style>
