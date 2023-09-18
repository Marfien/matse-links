<script setup lang="ts">
import {onMounted} from "vue";

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
  background-image: url("src/assets/waves/navbar-dark.svg");
  background-repeat: no-repeat;
  background-size: auto 101%;
  background-position-y: center;
  background-position-x: -20px;
  height: 100vh;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.topic::after {
  content: "";
  height: 3rem;
}

@media (prefers-color-scheme: light) {
  .topic {
    background-image: url("src/assets/waves/navbar-light.svg");
  }
}

@media (max-width: 1024px) {
  .topic {
    background-image: none;
    padding: 0;
  }
}

</style>