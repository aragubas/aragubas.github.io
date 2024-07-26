<script setup lang="ts">
import { onMounted, ref } from "vue";
import { randomRange } from "../utils";

class helpfulCharCombination {
  description: string;
  content: string;
  constructor(description: string, content: string) {
    this.description = description;
    this.content = content;
  }
}

const emojisList = [
  new helpfulCharCombination("pizza", "🍕"),
  new helpfulCharCombination("cake", "🎂"),
  new helpfulCharCombination("alien", "👽"),
  new helpfulCharCombination("tooth", "🦷"),
  new helpfulCharCombination("moon", "🌝"),
  new helpfulCharCombination("umbrella", "☂️"),
  new helpfulCharCombination("star", "⭐️"),
  new helpfulCharCombination("die", "🎲"),
  new helpfulCharCombination("car", "🚘"),
  new helpfulCharCombination("floppy disk", "💾"),
  new helpfulCharCombination("phone", "📞"),
  new helpfulCharCombination("eye", "👁️"),
  new helpfulCharCombination("lips", "👄"),
  new helpfulCharCombination("compass", "🧭"),
  new helpfulCharCombination("CD", "📀"),
  new helpfulCharCombination("camera", "📸"),
  new helpfulCharCombination("🤨", "🤨"),
];

let currentCombination = ref(emojisList[Math.floor(randomRange(0, length))]);

onMounted(() => {
  // Change emoji every minute
  setInterval(() => {
    currentCombination.value = emojisList[Math.floor(randomRange(0, emojisList.length))];
  }, 60000);
});
</script>

<template>
  <div class="wrapper">
    <div class="title-box clip-box">
      <h1>404 Not found</h1>
      <p>Could not find page at the requested URL. Here's helpful {{ currentCombination.description }}</p>
    </div>

    <div class="pizza-emoji clip-box">
      <p class="pizza-emoji">{{ currentCombination.content }}</p>
    </div>

    <ul class="clip-box">
      <li>
        <router-link to="/" class="button">Home</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@keyframes in-animation {
  from {
    transform: scale(50%);
    opacity: 0;
  }
  to {
    transform: scale(100%);
    opacity: 1;
  }
}

.wrapper {
  animation: in-animation 0.5 ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  gap: 2rem;
  min-height: 30rem;
}

.title-box {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem;
}

.pizza-emoji {
  font-size: var(--font-size-content-as-text);
}

.wrapper h1 {
  font-family: "Inter";
  font-weight: lighter;
  font-size: var(--font-size-content-as-text-title);
  text-align: center;
}

@media screen and (max-width: 640px) {
  .wrapper h1 {
    font-size: 2.7rem;
  }

  .title-box p {
    font-size: 0.9rem;
  }
}
</style>
