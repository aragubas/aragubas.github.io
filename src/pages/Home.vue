<script setup lang="ts">
import IntroCard from "../components/IntroCard.vue";
import ProjectSection from "./HomeNested/ProjectSection.vue";
import CertificationsSection from "./HomeNested/CertificationsSection.vue";
import Section from "../components/Section.vue";
</script>

<template>
  <main>
    <IntroCard></IntroCard>

    <Section :title="'Certifications'">
      <CertificationsSection />
    </Section>

    <Section :title="'Projects'" :description="'My public open source projects!'">
      <ProjectSection />
    </Section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem;
  margin-top: 1rem;
  gap: 1rem;
}

/* For mobile */
@media screen and (max-width: 640px) {
  main {
    align-items: center;
    padding: 1rem 0.5rem;
  }

  .main-section {
    margin: 0;
  }
}

/* For Mobile */
@media screen and (max-width: 580px) {
  main {
    margin: 2rem 0.25rem;
    margin-top: 1rem;
  }
}

/* For big screens (tested on 1600x900) */
@media screen and (min-width: 1280px) {
  main {
    margin: 2rem 5rem;
    margin-top: 1rem;
  }
}
</style>
