<script setup lang="ts">
defineProps<{
  message: string;
}>();
</script>

<template>
  <h2>Hello World</h2>
  <p class="msg">{{ message }}</p>
</template>

<style scoped>
p.msg {
  color: aquamarine;
}
</style>
