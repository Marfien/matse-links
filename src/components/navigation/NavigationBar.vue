<script setup lang="ts">
import NavigationBarItem from "./NavigationBarItem.vue";
</script>

<template>
  <div class="navbar">
    <NavigationBarItem @settopic="$emit('settopic', $event)" topic-id="0" display="Allgemein"/>
    <NavigationBarItem @settopic="$emit('settopic', $event)" topic-id="1" display="Mathematik"/>
    <NavigationBarItem @settopic="$emit('settopic', $event)" topic-id="2" display="Progammieren"/>
  </div>
  <div id="social">
    <img src="/src/assets/icon/github.svg" alt="GitHub">
    <img src="/src/assets/icon/email.svg" alt="Email">
    <img src="/src/assets/icon/discord.svg" alt="Discord">
  </div>
</template>

<style scoped>
.navbar {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--background-color);
  z-index: 1;
}

#social {
  translate: 0 -100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#social > img {
  width: 2rem;
  filter: invert();
  margin: 2rem;
  opacity: .5;
  transition: ease 500ms;
}

#social > img:hover {
  opacity: 1;
  transform: translateY(-.3rem);
  box-shadow: red;
}
</style>