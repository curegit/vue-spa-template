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
    <HelloWorld message="Vite + Vue + TS" />
  </main>
  <aside>
    <figure class="icon" v-for="(val, key) in icons" :key="key">
      <img :src="val" :alt="key" />
    </figure>
  </aside>
</template>

<style scoped>
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
