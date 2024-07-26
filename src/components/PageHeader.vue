<script setup lang="ts">
import { onMounted, onUnmounted } from "@vue/runtime-core";
import { ref } from "vue";

let headerShadow = ref(false);

function onScroll() {
  headerShadow.value = window.scrollY >= 10;
}

onMounted(() => {
  document.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  document.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <div class="border" :class="{ active: headerShadow }">
    <header class="wrapper">
      <router-link to="/">
        <div class="logo-box">
          <img
            src="/aragubas.svg"
            id="header-logo"
            aria-labelledby="header-title"
            alt="Aragubas Logo"
            aria-describedby="description"
          />
          <p id="header-title">Aragubas</p>
        </div>
      </router-link>

      <div class="header-buttons">
        <router-link to="/support" class="button">Support</router-link>
      </div>
    </header>
  </div>
</template>

<style scoped>
.border {
  position: sticky;
  top: 0;
  z-index: 1;
  border-bottom: 1px solid var(--color-out-border);
}

.border.active {
  border-radius: var(--border-radius-normal);
}

.wrapper {
  transition: border-radius 1s cubic-bezier(0.23, 1, 0.32, 1);
  padding: 0.35rem var(--margin-global-page-side-borders);
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
  background-color: var(--background-separation);
  border-bottom: 1px solid var(--color-boundary-border);
}

/* When shadow is visible */
.border.active .wrapper {
  border-bottom-left-radius: var(--border-radius-normal);
  border-bottom-right-radius: var(--border-radius-normal);
}

.logo-box {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

a {
  text-decoration: none;
}

a:visited {
  color: inherit;
}

#header-logo {
  width: 1.8rem;
}

#header-title {
  font-family: "Ubuntu";
  font-size: 1.4rem;
  font-weight: bold;
}
</style>
