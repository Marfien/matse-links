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
  padding-bottom: 5rem;
  translate: -.25rem 0;
}

.subtopic > div {
  display: grid;
  width: calc(200vw / 3 - 6rem - 1px);
  translate: -.5rem 0;
  grid-template-columns: 50% 50%;
  gap: 1rem;
  margin-inline: 1rem;
}

@media (max-width: 768px) {
  .subtopic > div {
    grid-template-columns: auto;
    translate: 0 0;
  }
}

@media (max-width: 1024px) {
  .subtopic > div {
    width: calc(100% - 4rem);
  }

  .subtopic {
    translate: 0 0;
  }
}
</style>