<script setup lang="ts">
defineProps({
  display: String
})
</script>

<template>
  <div class="subtopic">
    <h2>-- {{ display }} --</h2>
    <div>
      <slot/>
    </div>
  </div>
</template>

<style scoped>
.subtopic {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.subtopic > div {
  display: grid;
  width: calc(100% - 3rem);
  transform: translateX(-.5rem);
  grid-template-columns: 50% 50%;
  gap: 1rem;
  margin-inline: 1rem;
}

@media (max-width: 768px) {
  .subtopic > div {
    grid-template-columns: auto;
  }
}

@media (min-width: 1024px) {
  .subtopic > div {
    width: calc(200vw / 3 - 3rem);
  }
}
</style>