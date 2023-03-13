<script setup lang="ts">
import { ref } from "@vue/reactivity";
</script>

<template>
  <footer id="wrapper">
    <q>The essential is invisible to the eye</q>

    <section>
      <h4 class="title">Contact me</h4>

      <ul class="flex gap-small-m">
        <li>
          <a href="mailto://vaiogames18@gmail.com" target="_blank">Email</a>
        </li>
        <li><a href="https://t.me/aragubas" target="_blank">Telegram</a></li>
        <li><p>Discord: Aragubas#3594</p></li>
      </ul>
    </section>

    <section id="social-links">
      <h4 class="title">Social</h4>

      <ul class="flex gap-small-m">
        <li><a href="https://youtube.com/@aragubas" target="_blank">Youtube</a></li>
        <li><a href="https://www.furaffinity.net/user/aragubas" target="_blank">Furaffinity</a></li>
        <li><a href="https://pawb.fun/@aragubas" target="_blank">Mastodon</a></li>
      </ul>
    </section>
  </footer>
</template>

<style scoped>
#wrapper {
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  background-color: var(--background-separation);
  /* height: 4rem; */
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
  border-top-style: inset;
  border-top-color: var(--color-boundary-border);
}

q {
  font-family: "Inter";
  font-style: italic;
  color: var(--color-faded);
}

section .title {
  font-size: 1.2rem;
  padding: 0.2rem 0rem;
  font-family: "Ubuntu";
}

@media screen and (max-width: 400px) {
  q {
    font-size: 0.8rem;
  }

  ul {
    flex-direction: column;
  }

  section#social-links ul {
    flex-direction: row;
  }
}
</style>
