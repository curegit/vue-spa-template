<script setup lang="ts">
defineProps<{
  message: string;
}>();
</script>

<template>
  <h3>Hello World</h3>
  <p class="msg">{{ message }}</p>
</template>

<style scoped>
p.msg {
  color: aquamarine;
}
</style>
