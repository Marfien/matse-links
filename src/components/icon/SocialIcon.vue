<script setup lang="ts">

defineProps({
  url: String,
  icon: String
});
</script>

<template>
  <div class="social-item">
    <a :href="url" target="_blank">
      <img :src="`./assets/icon/${icon}.svg`" :alt="icon">
    </a>
    <p>{{ icon }}</p>
  </div>
</template>

<style scoped>
.social-item {
  display: flex;
  flex-direction: column;
  width: 6rem;
}

.social-item img {
  width: 2rem;
  height: 2rem;
  filter: invert();
  margin: 2rem 2rem 0 2rem;
  opacity: .5;
  transition: ease 200ms;
}

.social-item > p {
  position: relative;
  text-align: center;
  font-size: .75rem;
  opacity: 0;
  transition: ease 200ms;
  margin-top: 0;
  color: var(--navbar-text-color);
}

.social-item > a:hover > img {
  opacity: 1;
  transform: translateY(-.3rem);
}

.social-item > a:hover + p {
  opacity: 1;
  transform: translateY(-.3rem);
}
</style>