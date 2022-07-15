<script setup lang="ts">

</script>

<template>
  <div id="wrapper">
    <section>
      <div class="clip-box">
        <h1 class="title">Support!</h1>
      </div>
      <p>I accept donations internationally trough <a href="https://www.buymeacoffee.com/aragubas" target="_black">Buy me a coffee</a></p>
      <br>
      <p>If you live in Brazil you can also send me a pix by scanning the image below</p>

      <img src="/pix_donation.png" alt="Chave pix de Paulo Otávio de Lima (eu, aragubas)" />
       
    </section>
  </div>  
</template>

<style scoped>
#wrapper
{
  margin: 1rem;
  min-height: 30rem;
}

section
{
  display: flex;
  flex-direction: column;
  gap: .2rem;
  align-items: center;
  margin: 0 auto;
  max-width: 500px;
}


section .title
{
  font-size: 2rem;
  text-align: center;
  font-weight: normal;
  font-family: "Ubuntu";
  padding: .5rem 0;
}
</style>