<script setup lang="ts">
defineProps({
  name: String,
});
</script>

<template>
  <div class="topic">
    <slot/>
  </div>
</template>

<style scoped>
.topic {
  width: calc(100% - 50px - 1rem);
  height: 100%;
  display: flex;
  gap: 5rem;
  flex-direction: column;
  overflow-y: auto;
}

/* the gap property handles the rest */
.topic::after {
  content: "";
}

@media (max-width: 1024px) {
  .topic {
    width: 100%;
  }
}

@media (max-height: 900px) {
  .topic {
    background-size: auto 900px;
  }
}

</style>