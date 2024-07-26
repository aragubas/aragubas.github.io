<script setup lang="ts">
import IntroCard from "../components/IntroCard.vue";
import ProjectSection from "./HomeNested/ProjectSection.vue";
import CertificationsSection from "./HomeNested/CertificationsSection.vue";
import Section from "../components/Section.vue";
</script>

<template>
  <div class="wrapper">
    <IntroCard></IntroCard>

    <Section :title="'Certification'" :description="'My Certifications, mostly online courses I completed'">
      <CertificationsSection />
    </Section>

    <Section :title="'Projects'" :description="'My public open source projects!'">
      <ProjectSection />
    </Section>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem;
  margin-top: 1rem;
  gap: 1rem;
}

/* For mobile */
@media screen and (max-width: 640px) {
  .wrapper {
    align-items: center;
    padding: 1rem 0.5rem;
  }

  .main-section {
    margin: 0;
  }
}

/* For Mobile */
@media screen and (max-width: 580px) {
  .wrapper {
    margin: 2rem 0.25rem;
    margin-top: 1rem;
  }
}

/* For big screens (tested on 1600x900) */
@media screen and (min-width: 1280px) {
  .wrapper {
    margin: 2rem 5rem;
    margin-top: 1rem;
  }
}
</style>
