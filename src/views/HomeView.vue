<script setup lang="ts">
import HelloWorld from "../components/HelloWorld.vue";

import vueIcon from "../assets/vue.svg";
import viteIcon from "../assets/vite.svg";
import tsIcon from "../assets/typescript.svg";
import eslintIcon from "../assets/eslint.svg";
import prettierIcon from "../assets/prettier.svg";

const icons = {
  Vue: vueIcon,
  Vite: viteIcon,
  TypeScript: tsIcon,
  EslintIcon: eslintIcon,
  Prettier: prettierIcon,
};
</script>

<template>
  <main>
    <h2>Home</h2>
    <HelloWorld message="Vue + Vite + TypeScript + ESLint + Prettier template for single-page applications" />
  </main>
  <aside>
    <figure v-for="(val, key) in icons" :key="key" class="icon">
      <img :src="val" :alt="key" />
    </figure>
  </aside>
</template>

<style scoped>
main {
  margin-bottom: 20px;
}

aside {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 20px;
}

.icon {
  align-self: center;
  width: 140px;
  margin: 10px 30px;
}

.icon img {
  width: 100%;
}
</style>
