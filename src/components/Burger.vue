<script setup lang="ts">

import {onMounted} from "vue";
import {toggleNavbar} from "../main.ts";

onMounted(() => {
  for (let child of Array.from(document.getElementById("burgericon")!!.children as HTMLCollectionOf<HTMLElement>)) {
    child.style.setProperty("--openwidth", `${Math.sqrt(8)}rem`);
  }
})

</script>

<template>
  <div id="burger">
    <div id="burgericon" @click="toggleNavbar">
      <span/>
      <span/>
      <span/>
    </div>
    <p>Menü</p>
  </div>
</template>

<style scoped>
#burgericon {
  width: 2rem;
  height: 2rem;
  transform: rotate(0);
  transition: ease-in-out 500ms;
  cursor: pointer;
  z-index: 3;
}

#burgericon > span {
  --openwidth: 2rem;
  display: block;
  position: absolute;
  height: calc(1rem / 6);
  width: 100%;
  background: var(--color);
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0);
  transition: ease-in-out 200ms;
}

#burgericon > span:nth-child(1) {
  translate: 0 0;
}

#burgericon > span:nth-child(2) {
  translate: 0 calc(1rem - 1rem / 12);
}

#burgericon > span:nth-child(3) {
  translate: 0 calc(2rem - 1rem / 6);
}

#burgericon.open > span:nth-child(1) {
  transform: rotate(45deg);
  translate: 0 calc(1rem - 1rem / 12);
  width: var(--openwidth);
}

#burgericon.open > span:nth-child(2) {
  width: 0;
}

#burgericon.open > span:nth-child(3) {
  transform: rotate(-45deg);
  translate: 0 calc(1rem - 1rem / 12);
  width: var(--openwidth);
}

#burgericon.open ~ p {
  flex-grow: 1;
  transform: scale(1.5) translateX(-1rem);
}

#burger > p {
  text-align: center;
  transition: ease-in-out 200ms;
}

#burger {
  height: 5rem;
  display: none;
  align-items: center;
  padding-inline: 1rem;
  flex-direction: row;
  gap: 1rem;
  z-index: 2;
  background-color: var(--background-color);
}

@media (max-width: 1024px) {
  #burger {
    display: flex;
  }
}
</style>