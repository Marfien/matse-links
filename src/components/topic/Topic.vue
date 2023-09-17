<script setup lang="ts">
defineProps({
  name: String,
})
</script>

<template>
  <div class="topic">
    <slot/>
  </div>
</template>

<style scoped>
.topic {
  background-color: var(--topic-background-color);
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
}

.topic::after {
  content: "";
  height: 3rem;
}

</style>