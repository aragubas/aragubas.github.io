<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";
import { Project } from "../models/Project";

const props = defineProps({ items: Array<Project> });
</script>

<template>
  <section :class="items?.length == 1 ? 'single-item' : ''">
    <ProjectCard v-for="project in items" :project="project"> </ProjectCard>
  </section>
</template>

<style scoped>
section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: min-content;
  gap: 1rem;
  text-align: start;
}

section.single-item {
  display: flex;
}

/* For mobile */
@media screen and (max-width: 640px) {
  section {
    grid-template-columns: 1fr;
    gap: 1rem;
    box-sizing: border-box;
    justify-items: stretch;
    margin: 0 auto;
  }
}

/* For big screens (tested on 1600x900) */
@media screen and (min-width: 1280px) {
  section {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
