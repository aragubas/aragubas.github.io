<script setup lang="ts">
import IntroCard from '../components/IntroCard.vue';

</script>

<template>
<div class="wrapper">
  <IntroCard></IntroCard>

  <section class="main-section">
    <div class="margin-medium">
      <h2>Software Projects</h2>
      <p>I have a LOT of repositories on github. Most of them are WIP or just test. So here are the ones that I'm actually working on/finished</p>
    </div>

    <section class="project-section">
      <article class="project-card">
        <h4 class="title">Portfolio <span class="language-label" language="ts">Typescript</span></h4>
        <p>Yes, this website's source code is available on github</p>
        <a href="https://github.com/aragubas/aragubas.github.io" target="_blank" class="button">Github</a>
      </article>
 
      <article class="project-card">
        <h4 class="title">Oggly <span class="language-label" language="c++">C++</span></h4>
        <p>CLI tool for playing .ogg files synchronously</p>
        <a href="https://github.com/aragubas/Oggly" target="_blank" class="button">Github</a>
      </article>

      <article class="project-card">
        <h4 class="title">GDIShot <span class="language-label" language="c++">C++</span></h4>
        <p><i>(Windows Only)</i> CLI tool for taking screenshots of entire screen</p>
        <a href="https://github.com/aragubas/GDIshot" target="_blank" class="button">Github</a>
      </article>

      <article class="project-card">
        <h4 class="title">ChargerPlugEvent <span class="language-label" language="c#">C#</span></h4>
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
        <h4 class="title">Taiyou (backend) <span class="language-label" language="ts">Typescript</span></h4>
        <p><i>(WIP)</i> Backend for Taiyou Messaging Platform (work in progress). Made with Prisma ORM, Express and Socket.IO</p>
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
        <h4 class="title">PluginManagerExample <span class="language-label" language="c#">C#</span></h4>
        <p>A CLI shell that works via plugins. The cli processor itself is a plugin so plugins of plugins</p>
        <p>This project is an example implementation of a Plugin system with Reflection.</p>
        <a href="https://github.com/aragubas/PluginManagerExample" target="_blank" class="button">Github</a>
      </article>
      
    </section>
  </section>
</div>
  
</template>
  
<style scoped>
.wrapper
{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.main-section
{
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  max-width: 920px;
}

.main-section h2
{
  text-align: center;
  font-size: 2rem;
}

.project-section
{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  text-align: start;
}

@keyframes project-card-in
{
  from { transform: translateY(-5%); opacity: 0; }
  to { transform: translateY(0%); opacity: 1; }
}
 
.project-card
{
  animation: project-card-in .7s ease;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  background: var(--background-separation);
  padding: 1rem;
  border-radius: 4px;
}

.project-card i
{
  text-decoration: underline;
  font-style: normal;
}

.project-card .title
{
  display: inline-flex;
  align-items: center;
  gap: .25rem;
  font-size: 1.5rem;
  font-family: "Ubuntu";
  font-weight: normal;
}

.project-card a.button
{
  align-self: flex-start;
}

@media screen and (max-width: 400px)
{
  .project-section
  {
    grid-template-columns: 1fr;
    gap: 1rem;
    box-sizing: border-box;
    justify-items: center;
  }
 
  .wrapper
  {
    align-items: center;
    padding: 1rem .5rem;
  }

  .project-card
  {
    max-width: 90vw;
    box-sizing: border-box;
    padding: .5rem;
    border-radius: 8px;
  }

  .project-card .title
  {
    display: flex;
    flex-direction: column;
    
  }


  .main-section
  {
    margin: 0;
  }

}

.language-label
{
  display: block;
  font-size: .8rem;
  glyph-orientation-horizontal: 20deg;
  color: var(--color-faded);
  padding: .2rem;
  border-radius: 4px;
  color: white;
  box-shadow: inset 0px 2px 0px rgba(0, 0, 0, 0.25);
}

.language-label[language="c++"]
{
  background: rgb(30, 104, 160);
}

.language-label[language="c#"]
{
  background: rgb(122, 50, 151);
}

.language-label[language="ts"]
{
  background: rgb(0, 122, 204);
}

.language-label[language="css"]
{
  background: rgb(41, 101, 241);
}

</style>