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
  background-position-y: center;
  background-position-x: -20px;
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

@media (prefers-color-scheme: light) {
  .topic {
    background-image: url("/src/assets/waves/navbar-light.svg");
  }
}

@media (max-width: 1024px) {
  .topic {
    background-image: none;
    padding: 0;
    width: 100%;
  }

  .topic::after {
    min-height: 2rem;
    max-height: 2rem;
  }
}

@media (max-height: 900px) {
  .topic {
    background-size: auto 900px;
  }
}

</style>