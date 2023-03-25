<script setup lang="ts">
import { ref } from "@vue/reactivity";
</script>

<template>
  <footer id="wrapper">
    <section id="contact-links">
      <h4 class="title">Contact me</h4>

      <ul class="flex gap-small-m link-list">
        <li>
          <font-awesome-icon icon="fa-solid fa-inbox" />
          <a href="mailto://vaiogames18@gmail.com" target="_blank">Email</a>
        </li>
        <li>
          <font-awesome-icon icon="fa-brands fa-telegram" />
          <a href="https://t.me/aragubas" target="_blank">Telegram</a>
        </li>
        <li>
          <font-awesome-icon icon="fa-brands fa-linkedin" />
          <a href="https://www.linkedin.com/in/paulo-otavio-lima-357344264/" target="_blank">LinkedIn</a>
        </li>
        <li>
          <font-awesome-icon icon="fa-brands fa-discord" />
          <a href="discord.com/users/678368118371778570" target="_blank">Discord</a>
        </li>
      </ul>
    </section>

    <section id="social-links">
      <h4 class="title">Social</h4>

      <ul class="flex gap-small-m link-list">
        <li>
          <font-awesome-icon icon="fa-brands fa-youtube" />
          <a href="https://youtube.com/@aragubas" target="_blank">Youtube</a>
        </li>
        <li>
          <font-awesome-icon icon="fa-solid fa-paw" />
          <a href="https://www.furaffinity.net/user/aragubas" target="_blank">Furaffinity</a>
        </li>
        <li>
          <font-awesome-icon icon="fa-brands fa-mastodon" />
          <a href="https://pawb.fun/@aragubas" target="_blank">Mastodon</a>
        </li>
      </ul>
    </section>

    <section>
      <p>Made with VueJS using the <a href="https://fontawesome.com/" target="_blank">Font Awesome</a> library!</p>
      <p>
        Source code available at: <a href="https://github.com/aragubas/aragubas.github.io" target="_blank">Github!</a>
      </p>
    </section>

    <q>The essential is invisible to the eye</q>
  </footer>
</template>

<style scoped>
#wrapper {
  padding: 1.2rem;
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

ul {
  display: flex;
  flex-wrap: wrap;
}

.link-list li {
  display: flex;
  gap: 0.25rem;
  align-items: center;
}
</style>
