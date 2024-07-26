<script setup lang="ts">
import { onMounted, onUnmounted, Ref, ref } from "vue";
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

let currentCombination: Ref<helpfulCharCombination | undefined> = ref(undefined);
let randomEmojisIntervalID = 0;
const initialInterval = 15000; // 15.000 or 15 seconds
const interval = 60000; // 60.000 or 1 minute

function generateRandomCombination() {
  currentCombination.value = emojisList[Math.floor(randomRange(0, emojisList.length))];
}

onMounted(() => {
  // generateRandomCombination();

  // Change emoji every minute
  setTimeout(() => {
    generateRandomCombination();

    randomEmojisIntervalID = setInterval(() => generateRandomCombination(), interval);
  }, initialInterval);
});

onUnmounted(() => {
  clearInterval(randomEmojisIntervalID);
});
</script>

<template>
  <main>
    <div class="title-box clip-box">
      <h1>404 Not found</h1>
      <p>
        Could not find page at the requested URL.
        {{ !currentCombination ? "" : `Here is helpful ${currentCombination.description}` }}
      </p>
    </div>

    <div class="pizza-emoji clip-box">
      <p class="pizza-emoji">
        {{ !currentCombination ? "❓" : currentCombination.content }}
      </p>
    </div>

    <ul class="clip-box">
      <li>
        <router-link to="/" class="button">Home</router-link>
      </li>
    </ul>
  </main>
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

main {
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

main h1 {
  font-family: "Inter";
  font-weight: lighter;
  font-size: var(--font-size-content-as-text-title);
  text-align: center;
}

@media screen and (max-width: 640px) {
  main h1 {
    font-size: 2.7rem;
  }

  .title-box p {
    font-size: 0.9rem;
  }
}
</style>
