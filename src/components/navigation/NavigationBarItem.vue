<script setup lang="ts">
defineProps({
  display: String,
  topicId: String
});

defineEmits(['settopic'])
</script>

<template>
  <p class="navbaritem" @click="$emit('settopic', {topic:  topicId})">--* {{ display }} *--</p>
</template>

<style scoped>
.navbaritem, .navbaritem:after {
  transition: ease .5s;
}

.navbaritem {
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
  min-width: 75%;
  max-width: 100%;
}

.navbaritem:hover {
  transform: scale(1.1);
}

.navbaritem:after {
  content: "";
  height: 1px;
  align-self: center;
  width: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(147, 147, 147, 1) 50%, rgba(0, 0, 0, 0) 100%);
  display: block;
  margin-left: 50%;
  margin-top: 10px;
}

.navbaritem:hover:after {
  margin-left: 0;
  width: 100%;
}
</style>