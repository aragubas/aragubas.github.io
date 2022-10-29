<script setup lang="ts"></script>

<template>
  <div id="wrapper">
    <section>
      <div class="clip-box">
        <h1 class="title">Support!</h1>
      </div>
      <p>
        I accept donations internationally trough
        <a href="https://www.buymeacoffee.com/aragubas" target="_black"
          >Buy me a coffee</a
        >
      </p>
      <p>and also Crypto:</p>

      <ul class="cripto-providers">
        <li>
          <p>Bitcoin</p>
          <code>1GTDfR9vWiWY29dRXMSQFQ5ss8rCCdA6fR</code>
        </li>

        <li>
          <p>Litecoin</p>
          <code>LLJqsw1g26cTXwJQwzGisxui3VjGDUd8mQ</code>
        </li>

        <li>
          <p>Doge</p>
          <code>DE9FfvPyL3DxS9y7cUTTGfy1orHD8TqVB1</code>
        </li>
      </ul>

      <br />
      <p>
        If you live in Brazil you can also send me a pix by scanning the image
        below
      </p>

      <img
        src="/pix_donation.png"
        alt="Chave pix de Paulo Otávio de Lima (eu, aragubas)"
      />
    </section>
  </div>
</template>

<style scoped>
#wrapper {
  margin: 1rem;
  min-height: 30rem;
}

.cripto-providers {
  display: grid;
  grid-template-columns: auto auto;
  gap: 0.5rem 1rem;
  margin-top: 0.5rem;
}

.cripto-providers > li {
  display: contents;
  position: relative;
}

/* .cripto-providers > li > p
{
  grid-column: 1;
  
} */

.cripto-providers > li > code {
  display: flex;
  align-items: center;
}

section {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: center;
  margin: 0 auto;
  max-width: 500px;
}

section .title {
  font-size: 2rem;
  text-align: center;
  font-weight: normal;
  font-family: "Ubuntu";
  padding: 0.5rem 0;
}
</style>
