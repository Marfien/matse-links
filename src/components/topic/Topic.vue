<script setup lang="ts">
defineProps({
  name: String,
})

// onMounted(() => {
//   for (let topic of document.getElementsByClassName("topic")) {
//     let i = 0
//     for (let subtopic of topic.getElementsByClassName("subtopic")) {
//       let style = subtopic.style;
//       if (i++ % 2 == 0) {
//         style.backgroundColor = "var(--accent-color)";
//       } else {
//         style.backgroundImage = 'url("src/assets/waves/accent-color-top.svg")';
//         style.backgroundRepeat = "no-repeat";
//         style.backgroundSize = "100% auto";
//         style.backgroundPositionY = "-5rem";
//       }
//     }
//   }
// });
</script>

<template>
  <div class="topic">
    <slot/>
  </div>
</template>

<style scoped>
.topic {
  background-color: var(--topic-background-color);
  background-image: url("/src/assets/waves/navbar-dark.svg");
  background-repeat: no-repeat;
  background-size: auto calc(100% + 2px);
  width: calc(100% - 50px);
  background-position-y: center;
  background-position-x: -20px;
  height: 100vh;
  padding-left: 50px;
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