<script setup lang="ts">
import { TitleLink } from "../../models/TitleLink"
import ProjectCard from "../../components/ProjectCard.vue";
import { LanguageLabel, Project } from "../../models/Project";

const projects = [
  new Project("Portfolio", 
  "The exact website you are in right now",
  new Array<LanguageLabel> (
    LanguageLabel.Typescript
  ),
   new Array<TitleLink>(
    new TitleLink("Github", "https://github.com/aragubas/aragubas.github.io")
  )),

  new Project("LiVerse", 
  "Cross platform PNGTuber Avatar made with my own GUI Framework (AnaBan)", 
  new Array<LanguageLabel>(
    LanguageLabel.CSharp,
    LanguageLabel.CPlusPlus,
  ),
  new Array<TitleLink>(
    new TitleLink("Github", "https://github.com/aragubas/liverse")
  )),

  new Project("Godot Package Manager", 
  "Cross platform PNGTuber Avatar made with my own GUI Framework (AnaBan)", 
  new Array<LanguageLabel>(
    LanguageLabel.CSharp,
    LanguageLabel.CPlusPlus,
  ),
  new Array<TitleLink>(
    new TitleLink("Github", "https://github.com/aragubas/liverse")
  )),

  new Project("Universal App Package", 
  "Universal app packaging format for Linux and Windows. Coming Soon!", 
  new Array<LanguageLabel>(
    LanguageLabel.CSharp,
  ),
  new Array<TitleLink>(
    new TitleLink("Coming Soon!", "https://example.com")
  )),

  new Project("Video Cruncher", 
  "Interactive CLI Tool for recursive crunchy video compression", 
  new Array<LanguageLabel>(
    LanguageLabel.Python,
  ),
  new Array<TitleLink>(
    new TitleLink("Github", "https://github.com/aragubas/video-cruncher")
  )),

  new Project("mkOsSierraBreeze", 
  "KDecorations2 macOS Sierra Theme for KDE Plasma!", 
  new Array<LanguageLabel>(
    LanguageLabel.CPlusPlus,
  ),
  new Array<TitleLink>(
    new TitleLink("Github", "https://github.com/aragubas/mkOsSierraBreeze")
  )),

  new Project("Oggly Rusty", 
  "CLI tool for playing audio files synchronously", 
  new Array<LanguageLabel>(
    LanguageLabel.Rust,
  ),
  new Array<TitleLink>(
    new TitleLink("Github", "https://github.com/aragubas/oggly-rusty")
  )),

  new Project("Oggly", 
  "CLI tool for playing audio files synchronously", 
  new Array<LanguageLabel>(
    LanguageLabel.CPlusPlus,
  ),
  new Array<TitleLink>(
    new TitleLink("Github", "https://github.com/aragubas/oggly")
  )),

  new Project("TaiyouConfig Compiler", 
  "CLI tool for compiling tcfg files. Taiyou Config is a binary file format for storing data in namespace:name format",
  new Array<LanguageLabel>(
    LanguageLabel.CPlusPlus,
  ),
  new Array<TitleLink>(
    new TitleLink("Github", "https://github.com/aragubas/taiyouconfig")
  )),

  new Project("GDIShot", 
  "CLI tool for taking screenshots of the entire screen",
  new Array<LanguageLabel>(
    LanguageLabel.CPlusPlus,
  ),
  new Array<TitleLink>(
    new TitleLink("Github", "https://github.com/aragubas/gdishot")
  )),

  new Project("ChargerPlugEvent", 
  "Winform app for displaying a notification and plays a sound when plugging/unpligging laptop charger",
  new Array<LanguageLabel>(
    LanguageLabel.CSharp,
  ),
  new Array<TitleLink>(
    new TitleLink("Github", "https://github.com/aragubas/chargerplugevent")
  )),

  new Project("TNotepad", 
  "Text Editor with tabs made with WinForms and TaiyouUI Library",
  new Array<LanguageLabel>(
    LanguageLabel.CSharp,
  ),
  new Array<TitleLink>(
    new TitleLink("Github", "https://github.com/aragubas/tnotepad")
  )),

  new Project("🗣", 
  "aiajsdkafoefpokwepfdoedpefw",
  new Array<LanguageLabel>(
    LanguageLabel.CSS,
  ),
  new Array<TitleLink>(
    new TitleLink("Github", "https://github.com/aragubas/aiajsdkafoefpokwepfdoedpefw"),
    new TitleLink("Website", "https://aragubas.github.io/aiajsdkafoefpokwepfdoedpefw/")
  )),
]

</script>

<template>
  <section class="project-section">    
    <ProjectCard v-for="project in projects" :project="project">
    </ProjectCard>
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

/* For mobile */
@media screen and (max-width: 640px) {
  .project-section {
    grid-template-columns: 1fr;
    gap: 1rem;
    box-sizing: border-box;
    justify-items: stretch;
    margin: 0 auto;
  }
}

/* For big screens (tested on 1600x900) */
@media screen and (min-width: 1280px) {
  .project-section {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>