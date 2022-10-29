<script setup lang="ts">
import { ref } from "@vue/reactivity";
import TypewritterList from "./TypewritterList.vue";

const wordlist: Array<string> = [
  "Web Apps",
  "Games",
  "Libraries",
  "CLI Utilities",
  "Videos",
  "Script Languages",
  "Bwah",
];
</script>

<template>
  <div id="wrapper">
    <div class="clip-box logo-box">
      <img src="/aragubas.svg" alt="Aragubas Logo" />
    </div>
    <span class="decoration"></span>
    <div class="intro-welcome clip-box">
      <h1>Hello, I'm Aragubas</h1>
      <div class="flex gap-small typewritter">
        <p>I make</p>
        <TypewritterList :word-list="wordlist" :delay="2500"></TypewritterList>
      </div>
    </div>
  </div>
</template>

<style scoped>
#wrapper {
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  background: var(--background-separation);
  border-radius: 10px;
  border-width: 1px;
  border-style: inset;
  border-color: var(--color-boundary-border);
}

.logo-box {
  display: flex;
}

#wrapper img {
  animation: logo-in 0.5s cubic-bezier(0, 0.5, 0.43, 1);
}

#wrapper h1 {
  font-size: 2rem;
}

#wrapper span.decoration {
  animation: decoration-in 0.35s linear;
  background: var(--color-decoration);
  width: 1px;
  border-radius: 2px;
  height: inherit;
  opacity: 0.25;
}

@keyframes decoration-in {
  from {
    transform: scaleY(0%);
  }
  to {
    transform: scaleY(100%);
  }
}

@keyframes logo-in {
  from {
    transform: translateY(100%) rotate(180deg);
    opacity: 0;
  }
  to {
    transform: translateY(0%) rotate(0deg);
    opacity: 1;
  }
}

@media screen and (max-width: 440px) {
  #wrapper h1 {
    font-size: 1.6rem;
  }
  .logo-box {
    width: 3rem;
  }
}

@media screen and (max-width: 350px) {
  #wrapper h1 {
    font-size: 1.2rem;
  }
  .logo-box {
    width: 2.2rem;
  }

  .typewritter {
    font-size: 0.8rem;
  }
}
</style>
