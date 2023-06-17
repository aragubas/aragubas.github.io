<script setup lang="ts">
import IntroCard from "../components/IntroCard.vue";
</script>

<template>
  <div class="wrapper">
    <IntroCard></IntroCard>

    <section class="main-section">
      <header class="margin-medium">
        <h2>Projects</h2>
        <p>
          I have a LOT of repositories on github. Most of them are WIP or just test. So here are the ones that I'm
          actually working on/finished. I also have a lot of repositories that are private so this is not all of them
        </p>
      </header>

      <section class="project-section">
        <article class="project-card">
          <h4 class="title">
            Portfolio
            <span class="language-label" language="ts">Typescript</span>
          </h4>
          <p>The exact website you are in right now!</p>
          <a href="https://github.com/aragubas/aragubas.github.io" target="_blank" class="button">Github</a>
        </article>

        <article class="project-card">
          <h4 class="title">Oggly <span class="language-label" language="c++">C++</span></h4>
          <p>CLI tool for playing .ogg files synchronously</p>
          <a href="https://github.com/aragubas/Oggly" target="_blank" class="button">Github</a>
        </article>

        <article class="project-card">
          <h4 class="title">
            TaiyouConfig Compiler
            <span class="language-label" language="c++">C++</span>
          </h4>
          <p>CLI tool for compiling tcfg files</p>
          <p>TaiyouConfig is a custom file format for storing data in a namespace:name format.</p>
          <a href="https://github.com/aragubas/TaiyouConfig" target="_blank" class="button">Github</a>
        </article>

        <article class="project-card">
          <h4 class="title">GDIShot <span class="language-label" language="c++">C++</span></h4>
          <p><i>(Windows Only)</i> CLI tool for taking screenshots of the entire screen</p>
          <a href="https://github.com/aragubas/GDIshot" target="_blank" class="button">Github</a>
        </article>

        <article class="project-card">
          <h4 class="title">
            ChargerPlugEvent
            <span class="language-label" language="c#">C#</span>
          </h4>
          <p><i>(Windows Only)</i> Displays a notification and plays a sound when plugging/unplugging laptop charger</p>
          <a href="https://github.com/aragubas/ChargerPlugEvent" target="_blank" class="button">Github</a>
        </article>

        <article class="project-card">
          <h4 class="title">TNotepad <span class="language-label" language="c#">C#</span></h4>
          <p><i>(Windows Only)</i> Basic text editor with tabs and ability to pin textfiles in homescreen</p>
          <a href="https://github.com/aragubas/TNotepad" target="_blank" class="button">Github</a>
        </article>

        <article class="project-card">
          <h4 class="title">TaiyouClient <span class="language-label" language="c#">C#</span></h4>
          <p><i>(WIP)</i> Desktop Client for Taiyou Messaging Platform (work in progress). Made with AvaloniaUI</p>
          <a href="https://github.com/aragubas/TaiyouClient" target="_blank" class="button">Github</a>
        </article>

        <article class="project-card">
          <h4 class="title">
            Taiyou (backend)
            <span class="language-label" language="ts">Typescript</span>
          </h4>
          <p>
            <i>(WIP)</i> Backend for Taiyou Messaging Platform (work in progress). Made with Prisma ORM, Express and
            Socket.IO
          </p>
          <a href="https://github.com/aragubas/Taiyou" target="_blank" class="button">Github</a>
        </article>

        <article class="project-card">
          <h4 class="title">🗣<span class="language-label" language="css">CSS</span></h4>
          <p>aiajsdkafoefpokwepfdoedpefw</p>
          <div class="flex gap-small-m">
            <a href="https://github.com/aragubas/aiajsdkafoefpokwepfdoedpefw" target="_blank" class="button">Github</a>
            <a href="https://aragubas.github.io/aiajsdkafoefpokwepfdoedpefw/" target="_blank" class="button">Website</a>
          </div>
        </article>

        <article class="project-card">
          <h4 class="title">
            PluginManagerExample
            <span class="language-label" language="c#">C#</span>
          </h4>
          <p>A CLI shell that works via plugins. The cli processor itself is a plugin so plugins of plugins</p>
          <p>This project is an example implementation of a Plugin system with Reflection.</p>
          <a href="https://github.com/aragubas/PluginManagerExample" target="_blank" class="button">Github</a>
        </article>
      </section>
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

.project-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: min-content;
  gap: 1rem;
  text-align: start;
}

@keyframes project-card-in {
  from {
    transform: translateY(-5%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
}

.project-card {
  animation: project-card-in 0.7s ease;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: var(--background-separation);
  padding: 1rem;
  border-radius: 6px;
  border-width: 1px;
  border-style: inset;
  border-color: var(--color-boundary-border);
}

.project-card i {
  text-decoration: underline;
  font-style: normal;
}

.project-card .title {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 1.5rem;
  font-family: "Ubuntu";
  font-weight: normal;
}

.project-card a.button {
  align-self: flex-start;
}

.language-label {
  display: block;
  font-size: 0.8rem;
  glyph-orientation-horizontal: 20deg;
  color: var(--color-faded);
  padding: 0.2rem;
  border-radius: 4px;
  color: white;
  box-shadow: inset 0px 2px 0px rgba(0, 0, 0, 0.25);
}

.language-label[language="c++"] {
  background: rgb(30, 104, 160);
}

.language-label[language="c#"] {
  background: rgb(122, 50, 151);
}

.language-label[language="ts"] {
  background: rgb(0, 122, 204);
}

.language-label[language="css"] {
  background: rgb(41, 101, 241);
}

/* For mobile */
@media screen and (max-width: 640px) {
  .project-section {
    grid-template-columns: 1fr;
    gap: 1rem;
    box-sizing: border-box;
    justify-items: stretch;
    margin: 0 auto;
  }

  .wrapper {
    align-items: center;
    padding: 1rem 0.5rem;
  }

  .project-card {
    max-width: 90vw;
    box-sizing: border-box;
    padding: 0.5rem;
    border-radius: 8px;
  }

  .project-card .title {
    flex-direction: column;
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
  .project-section {
    grid-template-columns: repeat(3, 1fr);
  }

  .main-section {
    max-width: 1200px;
  }

  .main-section h2 {
    font-size: 2.5rem;
  }
}

</style>
