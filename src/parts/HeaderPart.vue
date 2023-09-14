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
  padding: 16px 20px 28px;
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
  padding: 4px 14px 2px;
  border-bottom: 2px solid transparent;
  border-radius: 10px;
  box-shadow: #9b9b9b 0px 2px;
  background-color: #f0ffff;
  color: #1c34c0;
  text-decoration: none;
}

nav a:hover {
  background-color: #dedede;
}

nav a:active {
  background-color: #bfbfbf;
  padding-top: 6px;
  border-bottom: none;
  box-shadow: #bfbfbf 0px 2px;
}
</style>
