<script setup lang="ts"></script>

<template>
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
      <h4 class="title">Video Cruncher <span class="language-label" language="python">Python</span></h4>
      <p>Interactive CLI Tool for recursive video compression</p>
      <a href="https://github.com/aragubas/video-cruncher" target="_blank" class="button">Github</a>
    </article>

    <article class="project-card">
      <h4 class="title">
        Oggly Rusty
        <span class="language-label" language="rust">Rust</span>
      </h4>
      <p>CLI tool for playing audio files</p>
      <p>You can also change pitch and volume via command line arguments</p>
      <a href="https://github.com/aragubas/oggly-rusty" target="_blank" class="button">Github</a>
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
  </section>
</template>

<style>
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
  background: var(--background-card);
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
  background: linear-gradient(0deg, rgb(10, 84, 164), rgb(30, 104, 160));
}

.language-label[language="c#"] {
  background: linear-gradient(0deg, rgb(102, 30, 131), rgb(122, 50, 151));
}

.language-label[language="ts"] {
  background: linear-gradient(0deg, rgb(0, 102, 184), rgb(0, 122, 204));
}

.language-label[language="css"],
.language-label[language="python"] {
  background: linear-gradient(0deg, rgb(21, 81, 221), rgb(41, 101, 241));
}

.language-label[language="rust"] {
  background: linear-gradient(0deg, rgb(204, 58, 0), rgb(244, 150, 0));
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

  .project-card {
    max-width: 90vw;
    box-sizing: border-box;
    padding: 0.5rem;
    border-radius: 8px;
  }

  .project-card .title {
    flex-direction: column;
  }
}

/* For big screens (tested on 1600x900) */
@media screen and (min-width: 1280px) {
  .project-section {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
