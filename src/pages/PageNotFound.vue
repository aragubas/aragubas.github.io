<script setup lang="ts">
</script>

<template>
<div class="wrapper">
  <div class="title-box">
    <h1>Page not found</h1>
    <p>404 - This page has been not found. Here's helpful pizza</p>
  </div>
  <p class="pizza-emoji">🍕</p>

  <ul>
    <li>
      <router-link to="/" class="button">Home</router-link>
      
    </li>
  </ul>
</div>
</template>

<style scoped>

.wrapper
{
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  gap: 2rem;
}

.title-box
{
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin: 1rem;
}

.pizza-emoji
{
  font-size: 128px;
}

.wrapper h1
{
  font-family: "Inter";
  font-weight: lighter;
  font-size: 3rem;
  text-align: center;
}

@media screen and (max-width: 400px)
{
  .wrapper h1
  {
    font-size: 2.7rem;
  }

  .title-box p
  {
    font-size: .9rem;
  }
}
</style>