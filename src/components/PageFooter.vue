<script setup lang="ts">
import { ref } from "@vue/reactivity";
</script>

<template>
  <div class="border">
    <footer id="wrapper">
      <section id="contact-links">
        <h4 class="title">Contact me</h4>

        <ul class="flex gap-small-m link-list">
          <li>
            <font-awesome-icon icon="fa-solid fa-inbox" />
            <a href="mailto:vaiogames18@gmail.com" target="_blank">Email</a>
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
            <p>@aragubas</p>
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
            <a href="https://furry.engineer/@aragubas" target="_blank">Mastodon</a>
          </li>
          <li>
            <font-awesome-icon icon="fa-brands fa-twitter" />
            <a href="https://twitter.com/Aragubas_" target="_blank">Twitter/X</a>
          </li>
          <li>
            <font-awesome-icon icon="fa-brands fa-instagram" />
            <a href="https://www.instagram.com/aragubas" target="_blank">Instagram</a>
          </li>
          <li>
            <font-awesome-icon icon="fa-brands fa-tiktok" />
            <a href="https://www.tiktok.com/@aragubas" target="_blank">TikTok</a>
          </li>
          <li>
            <font-awesome-icon icon="fa-solid fa-cloud" />
            <a href="https://bsky.app/profile/aragubas.bsky.social" target="_blank">Bluesky</a>
          </li>
        </ul>
      </section>

      <section>
        <p>
          Made with <a href="https://vuejs.org/" target="_blank">VueJS</a> using the
          <a href="https://fontawesome.com/" target="_blank">Font Awesome</a> library!
        </p>
        <p>
          Source code available at <a href="https://github.com/aragubas/aragubas.github.io" target="_blank">Github</a>!
        </p>
        <p>Bwah!</p>
      </section>

      <q>The essential is invisible to the eye</q>
    </footer>
  </div>
</template>

<style scoped>
.border {
  border-radius: var(--border-radius-normal);
  border: 1px solid var(--color-out-border);
}

#wrapper {
  padding: 0.8rem var(--margin-global-page-side-borders);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  background-color: var(--background-separation);
  /* height: 4rem; */
  border-top-left-radius: var(--border-radius-normal);
  border-top-right-radius: var(--border-radius-normal);
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
  font-size: var(--font-size-primary-title-subcontent);
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
