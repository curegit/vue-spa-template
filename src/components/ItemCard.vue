<script setup lang="ts">
defineProps<{
  heading: string;
  icon: string;
}>();
</script>

<template>
  <article class="item">
    <header>
      <img class="icon" :src="icon" :alt="heading" />
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
  grid-template-rows: auto 1fr;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  gap: 6px 14px;
}

header {
  display: contents;
  width: 90%;
}

header img {
  width: 100%;
  grid-row: 1 / span 2;
}

header h3 {
  width: 80px;
  font-size: 130%;
  line-height: 1.5;
}

.details {
  padding: 1px 2px 2px 6px;
}
</style>
<style>
.item p {
  text-indent: 8px;
}
</style>
