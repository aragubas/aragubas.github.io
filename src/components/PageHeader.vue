<script setup lang="ts">
import { onMounted, onUnmounted } from "@vue/runtime-core";
import { ref } from "vue";

let headerShadow = ref(false);

function onScroll()
{
  headerShadow.value = window.scrollY >= 10;
}

onMounted(() => {
  document.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  document.removeEventListener("scroll", onScroll);
})

</script>

<template>
<div class="wrapper" :class="{ active: headerShadow }">
  <router-link to="/">
    <div class="logo-box">
      <img src="/aragubas.svg" id="header-logo" aria-labelledby="header-title" alt="Aragubas Logo" />
      <p id="header-title">Aragubas</p>
    </div>
  </router-link>

  <div class="header-buttons">
    <router-link to="/support" class="button">Support</router-link>
  </div>

</div>
</template>

<style scoped>
.wrapper
{
  transition: box-shadow 0.25s, border-radius 0.4s cubic-bezier(0.23, 1, 0.320, 1);
  padding: .5rem 1rem;
  display: flex;
  justify-content: space-between;
  gap: .5rem;
  align-items: center;
  background-color: var(--background-separation);
  height: 1.8rem;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  z-index: 1;
  position: sticky;
  top: 0;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
}

.wrapper.active
{
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  opacity: 0.99;
}

.logo-box
{
  display: flex;
  gap: .5rem;
  align-items: center;
}

a { text-decoration: none; }
a:visited { color: inherit; }

#header-logo
{
  width: 2.3rem;
}

#header-title
{
  font-family: "Ubuntu";
  font-size: 1.4rem;
  font-weight: bold;
}


</style>