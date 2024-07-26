<script setup lang="ts">
import { Project } from "../models/Project";
import { LanguageLabel } from "../models/Project";
const props = defineProps({ project: Project });

// Wacky code taken from: https://stackoverflow.com/questions/62215454/how-to-get-enum-key-by-value-in-typescript
function languageName(key: LanguageLabel) {
  // Fix weird language names
  switch (key) {
    case LanguageLabel.CPlusPlus:
      return "C++";

    case LanguageLabel.CSharp:
      return "C#";

    default:
      // Everything else can have it's name yanked out of the object in this weird cryptic way
      return Object.keys(LanguageLabel)[Object.values(LanguageLabel).indexOf(key)];
  }
}
</script>

<template>
  <div class="card-border">
    <div v-if="project == undefined">
      <h1>Error: project property is undefined</h1>
    </div>
    <article v-else class="project-card">
      <header>
        <h1>{{ project.title }}</h1>
        <div class="languages">
          <span v-for="lang in project.languages" class="language-label" v-bind:language="lang">{{
            languageName(lang)
          }}</span>
        </div>
      </header>

      <p class="content">{{ project.description }}</p>

      <div class="links">
        <a :href="link.link" target="_blank" class="button" v-for="link in project.links">{{ link.title }}</a>
      </div>
    </article>
  </div>
</template>

<style scoped>
.card-border {
  display: flex;
  border-radius: var(--border-radius-normal);
  border: 1px solid var(--color-out-border);
}

.project-card {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.5rem;
  background: var(--background-card);
  padding: 1rem;
  border-radius: var(--border-radius-normal);
  border-width: 1px;
  border-style: inset;
  border-color: var(--color-boundary-border);
}

.project-card header {
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  font-family: "Ubuntu";
  font-weight: normal;
}

/* Title text */
.project-card header h1 {
  font-size: var(--font-size-primary-title-subcontent);
}

.project-card header .languages {
  display: inline-flex;
  gap: 0.25rem;
}

.project-card .content {
  flex: 1;
}

.project-card .links {
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
}

.project-card a.button {
  align-self: flex-start;
}
</style>
