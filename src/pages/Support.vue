<script setup lang="ts">
class DonationService {
  service: string;
  address: string;
  isLink: boolean;
  linkText: string;

  constructor(service: string, address: string, isLink = false, linkText = "") {
    this.service = service;
    this.address = address;
    this.isLink = isLink;
    this.linkText = linkText;
  }
}

const coins: DonationService[] = [
  new DonationService("Bitcoin", "1GTDfR9vWiWY29dRXMSQFQ5ss8rCCdA6fR"),
  new DonationService("Litecoin", "LLJqsw1g26cTXwJQwzGisxui3VjGDUd8mQ"),
  new DonationService("Doge", "DE9FfvPyL3DxS9y7cUTTGfy1orHD8TqVB1"),
];

const dnservices: DonationService[] = [
  new DonationService("PayPal", "dpaulootavio5@outlook.com"),
  new DonationService("Buy Me a Coffee", "https://www.buymeacoffee.com/aragubas", true, "@aragubas"),
];
</script>

<template>
  <main>
    <header>
      <div class="clip-box">
        <h1 class="title">Support</h1>
      </div>
    </header>
    <article>
      <section>
        <header>
          <h1>Regular donation services</h1>
        </header>

        <table>
          <tr>
            <th>Service</th>
            <th>Address</th>
          </tr>

          <tr v-for="service in dnservices">
            <td>{{ service.service }}</td>
            <td v-if="!service.isLink">{{ service.address }}</td>
            <td v-else>
              <a target="_blank" :href="service.address">{{ service.linkText }}</a>
            </td>
          </tr>
        </table>
      </section>

      <section>
        <header>
          <h1>Crypto Currency</h1>
          <p>I also accept donations through crypto currency</p>
        </header>

        <table>
          <tr>
            <th>Service</th>
            <th>Address</th>
          </tr>

          <tr v-for="coin in coins">
            <td>{{ coin.service }}</td>
            <td>{{ coin.address }}</td>
          </tr>
        </table>
      </section>

      <section class="pix-section">
        <header>
          <h1>Pix</h1>
          <p>
            If you live in Brazil you can also send me a pix by<br />
            scanning the image below, or by using the pix key below
          </p>
        </header>

        <img src="/pix_donation.png" alt="Chave pix de Paulo Otávio de Lima (eu, aragubas)" />
      </section>
    </article>
  </main>
</template>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 700px;
}

section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

section.pix-section {
  align-items: center;
  text-align: center;
}
</style>
