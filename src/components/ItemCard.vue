<script setup lang="ts">
defineProps<{
  heading: string;
  icon: string;
}>();
</script>

<template>
  <article class="item">
    <header>
      <img class="icon" :src="icon" />
      <h3 class="heading">{{ heading }}</h3>
    </header>
    <main class="details">
      <slot></slot>
    </main>
  </article>
</template>

<style scoped>
article {
  display: grid;
  grid-template-columns: 100px 1fr;
}

header {
  display: contents;
  width: 90%;
}

header img {
  width: 80px;
  grid-row: 1 / span 2;
}

header h3 {
  width: 80px;
}
</style>
