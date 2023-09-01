<script setup lang="ts">
import TypewritterList from "./TypewritterList.vue";

const wordlist: Array<string> = ["Web Apps", "Backends", "Libraries", "CLI Tools", "Games", "Utility Scripts", "Bwah"];
const currentAge = 2023 - 2006;
</script>

<template>
  <div id="wrapper">
    <div class="clip-box logo-box">
      <img src="/aragubas.svg" alt="Aragubas Logo" />
    </div>
    <span class="decoration"></span>
    <div class="main-content clip-box">
      <section>
        <h1>Hello, I'm Aragubas</h1>
        <p>My real name is Paulo Otávio de Lima</p>
        <div class="flex gap-small typewritter">
          <p>and I make</p>
          <TypewritterList :word-list="wordlist" :delay="3500"></TypewritterList>
        </div>
      </section>
      <section>
        <h2>About Me</h2>
        <p>I'm {{ currentAge }} years old, born in Brazil, Paraná</p>
        <p>My Myers-Briggs Type is INFP-T</p>
        <p>tech nerd</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
#wrapper {
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  background: var(--background-card);
  border-radius: 10px;
  border-width: 1px;
  border-style: inset;
  border-color: var(--color-boundary-border);
}

.logo-box {
  display: flex;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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

/* Mobile */
@media screen and (max-width: 440px) {
  #wrapper {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  #wrapper h1 {
    font-size: 1.6rem;
  }

  #wrapper span.decoration {
    height: 1px;
    width: 100%;
  }

  .logo-box {
    height: 120px;
  }
}

@media screen and (max-width: 350px) {
  #wrapper h1 {
    font-size: 1.2rem;
  }

  #wrapper h2 {
    font-size: 1.15rem;
  }

  .typewritter {
    font-size: 0.8rem;
  }
}

@media screen and (min-width: 580px) {
  #wrapper {
    width: 500px;
    justify-content: center;
    gap: 2rem;
  }

  .logo-box {
    width: 125px;
  }
}
</style>
