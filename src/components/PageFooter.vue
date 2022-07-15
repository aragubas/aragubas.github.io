<script setup lang="ts">

</script>

<template>
  <div id="wrapper">
    <q>The essential is invisible to the eye</q>
     
    <section>
      <h4 class="title">Contact me</h4>
      <ul class="flex gap-small-m">
        <li><a href="mailto://vaiogames18@gmail.com" target="_blank">Email</a></li>
        <li><a href="https://t.me/aragubas" target="_blank">Telegram</a></li>
        <li><p>Discord: Aragubas#3594</p></li>
      </ul>
    </section>
 
  </div>
</template>

<style scoped>
#wrapper
{
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  align-items: flex-start;
  background-color: var(--background-separation);
  height: 4rem;
}

q 
{ 
  font-family: "Inter";
  font-style: italic; 
}

section .title
{
  font-size: 1.2rem;
  padding: .2rem 0rem;
  font-family: "Ubuntu";
}
</style>