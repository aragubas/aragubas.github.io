<script setup lang="ts">
import IntroCard from "../components/IntroCard.vue";
import ProjectSection from "./HomeNested/ProjectSection.vue";
import CertificationsSection from "./HomeNested/CertificationsSection.vue";
</script>

<template>
  <div class="wrapper">
    <IntroCard></IntroCard>

    <section class="main-section">
      <header class="margin-medium">
        <h2>Projects</h2>
        <p>
          I have a LOT of repos on github. Most of them are WIP or just test. <br />So here's the ones that I'm actually
          working on/finished.<br />
          I also have a lot of private repos so this is not all of my repos :3c
        </p>
      </header>

      <ProjectSection></ProjectSection>

      <header class="margin-medium">
        <h2>Certifications</h2>
        <p>Online courses I completed</p>
      </header>

      <CertificationsSection></CertificationsSection>
    </section>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.main-section {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  max-width: 920px;
}

.main-section h2 {
  text-align: center;
  font-size: 2rem;
}

.main-section header {
  margin-top: 0.5rem;
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

/* For Mobile (Adjusts title size) */
@media screen and (max-width: 340px) {
  .main-section h2 {
    font-size: 1.4rem;
  }
}

/* For big screens (tested on 1600x900) */
@media screen and (min-width: 1280px) {
  .main-section {
    max-width: 1200px;
  }

  .main-section h2 {
    font-size: 2.5rem;
  }
}
</style>
