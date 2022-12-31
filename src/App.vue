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
  padding: 12px 20px 16px;
  color: azure;
  background-color: hotpink;
}

h1 {
  //margin: 20px;
}

nav {
  display: flex;
  margin-left: 18px;
  column-gap: 6px;
}

nav a {
    display: block;
    background-color: azure;
    padding: 4px 14px;
    border-radius: 10px;
	box-shadow: #9b9b9b 0px 2px;
	color: #4d38ff;
}

footer {
  color: aliceblue;
  padding: 10px 30px 20px;
  text-align: center;
}
</style>
