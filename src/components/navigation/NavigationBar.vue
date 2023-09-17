<script setup lang="ts">
import NavigationBarItem from "./NavigationBarItem.vue";
import Socials from "../icon/Socials.vue";
import SocialIcon from "../icon/SocialIcon.vue";
</script>

<template>
  <div class="navbar">
    <NavigationBarItem @settopic="$emit('settopic', $event)" topic-id="0" display="Allgemein"/>
    <NavigationBarItem @settopic="$emit('settopic', $event)" topic-id="1" display="Mathematik"/>
    <NavigationBarItem @settopic="$emit('settopic', $event)" topic-id="2" display="Progammieren"/>
  </div>
  <Socials>
    <SocialIcon icon="GitHub" url="https://github.com/Marfien"/>
    <SocialIcon icon="EMail" url="mailto:marvin.haase@rwth-aachen.de"/>
    <SocialIcon icon="Discord" url="https://dicord.com/"/>
  </Socials>
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

.socials {
  translate: 0 -100%;
}
</style>