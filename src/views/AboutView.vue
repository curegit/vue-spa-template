<script setup lang="ts">
import ItemCard from "../components/ItemCard.vue";

import vueIcon from "../assets/vue.svg";
import viteIcon from "../assets/vite.svg";
import tsIcon from "../assets/typescript.svg";
import eslintIcon from "../assets/eslint.svg";
import prettierIcon from "../assets/prettier.svg";
</script>

<template>
  <main>
    <h2>About</h2>
    <div class="cards">
      <ItemCard heading="Vue" :icon="vueIcon">
        <p><strong>Vue</strong> is a front end JavaScript framework.</p>
        <p>
          One of the key features of Vue is its reactive components, which allow you to declaratively render dynamic
          templates based on data changes.
        </p>
      </ItemCard>
      <ItemCard heading="Vite" :icon="viteIcon">
        <p>
          <strong>Vite</strong> (pronounced "veet") is a build tool for modern JavaScript applications. It is designed
          to be lightweight, fast, and flexible, with a focus on simplicity and ease of use.
        </p>
      </ItemCard>
      <ItemCard heading="TypeScript" :icon="tsIcon">
        <p>
          <strong>TypeScript</strong> is a programming language that is a super set of JavaScript. It has static typing
          system, which allows developers to specify the data types of variables, function parameters, and return
          values. This can help catch mistakes and bugs early on in the development process.
        </p>
      </ItemCard>
      <ItemCard heading="ESLint" :icon="eslintIcon">
        <p>
          <strong>ESLint</strong>
        </p>
      </ItemCard>
      <ItemCard heading="Prettier" :icon="prettierIcon">
        <p>
          <strong>Prettier</strong>
        </p>
      </ItemCard>
    </div>
  </main>
</template>

<style scoped>
main {
  margin-bottom: 10px;
}

div.cards {
  display: grid;
  max-width: 1600px;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 8px;
}
</style>
