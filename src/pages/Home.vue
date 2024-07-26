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

    <Section :title="'Projects'" :description="'public open source projects'">
      <ProjectSection />
    </Section>
  </main>
</template>
