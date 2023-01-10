<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <h1>Vue SPA Template</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding: 12px 20px 20px;
  background-color: var(--main-color);
  color: #f0ffff;
}

h1 {
  font-size: 200%;
}

nav {
  display: flex;
  margin-left: 18px;
  flex-flow: row wrap;
  gap: 6px;
}

nav a {
  display: block;
  background-color: #f0ffff;
  padding: 4px 14px 2px;
  border-radius: 10px;
  border-bottom: 2px solid transparent;
  box-shadow: #9b9b9b 0px 2px;
  color: #4d38ff;
  text-decoration: none;
}

nav a:hover {
  background-color: #dcdfdf;
}

nav a:active {
  background-color: #bcbfbf;
  padding-top: 6px;
  border-bottom: none;

  box-shadow: #bcbfbf 0px 2px;
}
</style>
