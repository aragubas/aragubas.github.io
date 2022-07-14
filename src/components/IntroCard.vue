<script setup lang="ts">
import { onMounted, ref } from '@vue/runtime-dom';

const text = ref("Wait for it...");
let typewriterText = "";
let typewriterCharacter = 0;
let typewriterActive = false;

function typeSetUp(newText: string)
{
  if (newText == text.value) { return; }
  typewriterText = newText;
  typewriterActive = true;
  typewriterCharacter = 0;
  text.value = "";
}

onMounted(() => {
  let ceira = 0;
  typeSetUp("Brazilian software developer!");
   
  setInterval(() => {
    if (typewriterActive)
    {
      if (typewriterCharacter > typewriterText.length - 1)
      {
        typewriterActive = false;
        typewriterCharacter = 0;
      }else
      {
        text.value += typewriterText[typewriterCharacter];
  
        typewriterCharacter++;
      }
    }

  }, 50)

  setInterval(() => {
    if (ceira >= 5)
    {
      typeSetUp("Software Developer");
    }

    if (ceira >= 10)
    {
      typeSetUp("Inspiring Artist");
      ceira = 0;
    }

    ceira++;
  }, 2000)
})
 
</script>
 
<template>
  <div id="wrapper">
    <div class="clip-box logo-box">
      <img src="/aragubas.svg" />
    </div>
    <span class="decoration"></span>
    <div class="intro-welcome clip-box">
      <h1>Hello, I'm Aragubas</h1>
      <p class="ceira-text">{{text}}</p>
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

.clip-box
{
  overflow: hidden;
} 

@keyframes flash {
  0% { opacity: 1; }
  50% { opacity: 0; }
}
.ceira-text::after
{
  content: "|";
  animation: flash 1s step-end infinite;
}
 
.ceira-text
{
  font-size: 1rem;
}

.logo-box
{
  display: flex;
}

.clip-box > *
{
  animation: clipbox-animation .5s cubic-bezier(0, 0.5, 0.4, 1.5);
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

@keyframes clipbox-animation {
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0%); opacity: 1; }
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