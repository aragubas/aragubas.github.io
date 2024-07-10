<script setup lang="ts">
import ProjectCard from '../../components/ProjectCard.vue';
import { LanguageLabel, Project } from '../../models/Project';
import { TitleLink } from '../../models/TitleLink';

const certifications = [
  new Project("Foundational C# with Microsoft",
    "At March 13, 2024. I completed freeCodeCamp's Foundational C# with Microsoft course!",
    new Array<LanguageLabel>(
      LanguageLabel.CSharp
    ),
    new Array<TitleLink>(
      new TitleLink("View Certificate", "https://www.freecodecamp.org/certification/aragubas/foundational-c-sharp-with-microsoft")
    )
  )
]

</script>

<template>
  <ProjectCard v-for="project in certifications" :project="project"/>
</template>