<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <h1>Vue SPA Template</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <RouterView />
  <footer>
    <p>MIT License</p>
    <p>Copyright © 2022 curegit</p>
  </footer>
</template>

<style scoped>
header {
  color: azure;
  background-color: hotpink;
}

h1 {
  margin: 20px;
}

nav a {
  display: block;
}

footer {
  color: aliceblue;
  background-color: deepskyblue;
  text-align: center;
}
</style>
