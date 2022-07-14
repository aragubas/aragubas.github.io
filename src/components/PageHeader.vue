<script setup lang="ts">

</script>

<template>
<div class="wrapper">
  <img src="/aragubas.svg" id="header-logo" aria-labelledby="header-title" alt="Aragubas Logo" />
  <p id="header-title">Aragubas</p>
</div>
</template>

<style scoped>
.wrapper
{
  padding: .5rem 1rem .5rem 1rem;
  display: flex;
  gap: .5rem;
  align-items: center;
  background-color: var(--background-separation);
  height: 2rem;
}

#header-logo
{
  width: 2.5rem;
}

#header-title
{
  font-family: "Ubuntu";
  font-size: 2rem;
  font-weight: bold;
}


</style>