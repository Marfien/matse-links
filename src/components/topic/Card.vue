<script setup lang="ts">
defineProps({
  display: String,
  description: String,
  url: String
})

document.addEventListener("mousemove", e => {
  for (let card of Array.from(document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>)) {
    let rect = card.getBoundingClientRect();
    let x = e.clientX - rect.x;
    let y = e.clientY - rect.y;

    let style = card.style;
    style.setProperty("--mouse-x", `${x}px`);
    style.setProperty("--mouse-y", `${y}px`);
  }
})
</script>

<template>
  <a class="card" :href="url" target="_blank">
    <h3>{{ display }}</h3>
    <p v-if="description">{{ description }}</p>
  </a>
</template>

<style scoped>
.card {
  --mouse-x: -600px;
  --mouse-y: -600px;
  background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y),
      var(--card-glow-color),
      transparent 40%
  );;;
  border: 1px solid var(--card-border-color);
  border-radius: .5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-block: 2rem;
  opacity: 60%;
  transition: opacity ease 200ms;
}

.card:hover {
  opacity: 100%;
}

.card > h3 {
  transition: transform ease 200ms;
  text-transform: uppercase;
  margin: 0;
  font-size: 1.125rem;
}

.card:hover > h3 {
  transform: translateY(-10px);
}

.card > p {
  font-size: .75rem;
  opacity: 75%;
}
</style>