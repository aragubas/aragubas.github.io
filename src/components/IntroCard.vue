<script setup lang="ts">
import { ref } from '@vue/reactivity';
import TypewritterList from './TypewritterList.vue';
 
const wordlist: Array<string> = [
  "Web Apps",
  "Games",
  "Illustration/Drawing",
  "Music (mostly chiptune)",
  "Photo Editing stuff"
]

</script>
 
<template>
  <div id="wrapper">
    <div class="clip-box logo-box">
      <img src="/aragubas.svg" />
    </div>
    <span class="decoration"></span>
    <div class="intro-welcome clip-box">
      <h1>Hello, I'm Aragubas</h1>
      <div class="flex gap-small">
        <p>I make</p>
        <TypewritterList :word-list="wordlist" :delay="2500"></TypewritterList>
      </div>
    </div>
  </div>
</template>

<style scoped>
#wrapper
{
  display: flex;
  gap: .5rem; 
  padding: 1rem;
  background: white;
  border-radius: 10px;  
}

.logo-box
{
  display: flex;
}

#wrapper img
{
  animation: logo-in .5s cubic-bezier(0, 0.5, 0.43, 1);
}

#wrapper h1 { font-size: 2rem; }

#wrapper span.decoration
{ 
  animation: decoration-in .35s linear;
  background: gray;
  width: 2px;
  border-radius: 2px;
  height: inherit;
}

@keyframes decoration-in
{
  from { transform: scaleY(0%); }
  to { transform: scaleY(100%); }
}

@keyframes logo-in
{
  from { transform: translateY(100%) rotate(180deg); opacity: 0; }
  to { transform: translateY(0%) rotate(0deg); opacity: 1; }
}

@media screen and (max-width: 400px)
{
  #wrapper h1 { font-size: 1.6rem; }
  .logo-box { width: 2.8rem; }
  .ceira-text::after
  {
    text-shadow: 0px 0px 1px black;
  }
 
}

</style>