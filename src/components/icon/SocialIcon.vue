<script setup lang="ts">
defineProps({
  url: String,
  icon: String
})
</script>

<template>
  <a class="social-item" :href="url">
    <img :src="`/src/assets/icon/${ icon }.svg`" :alt="icon">
  </a>
</template>

<style scoped>
.social-item {
  width: 2rem;
  filter: invert();
  margin: 2rem;
  opacity: .5;
  transition: ease 500ms;
}

.social-item:hover {
  opacity: 1;
  transform: translateY(-.3rem);
}
</style>