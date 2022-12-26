<script setup lang="ts">
import ItemCard from '../components/ItemCard.vue'
</script>

<template>
  <main class="about">
    <h1>This is an about page</h1>
    <ItemCard>
      <template v-slot:header>
      </template>
      <template v-slot:icon>
      </template>
      <template v-slot:details>
      </template>
      </ItemCard>
  </main>
</template>

<style>

</style>
