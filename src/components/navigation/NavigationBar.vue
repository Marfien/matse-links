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
    <SocialIcon icon="GitHub" description="My GitHub profile" url="https://github.com/Marfien"/>
    <SocialIcon icon="Email" url="mailto:marvin.haase@rwth-aachen.de"/>
    <SocialIcon icon="Discord" url="https://discord.com/users/marfien"/>
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
  transition: translate ease 200ms;
}

@media (max-width: 1024px) {
  .navbar {
    translate: 0 -5rem;
  }

  .socials {
    translate: 0 calc(-100% - 5rem);
  }
}

@media (max-height: 512px) {
  .navbar {
    gap: 0;
  }
}

@media (max-height: 320px) {
  .socials {
    translate: 0 0;
  }
}
</style>