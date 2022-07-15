<script setup lang="ts">

</script>

<template>
<div class="wrapper">
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
  padding: .5rem 1rem;
  display: flex;
  justify-content: space-between;
  gap: .5rem;
  align-items: center;
  background-color: var(--background-separation);
  height: 1.8rem;
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