<script setup lang="ts">
import { onMounted, ref, defineProps, onUnmounted } from "vue";

const props = defineProps<{ wordList: Array<string>; delay: number }>();

const text = ref("Wait for it...");
let updateLoopInterval = 0;
let nextWordTimeout = 0;
let wordIndex = 1;
let fullText = "";
let currentCharacterIndex = 0;
let active = false;
let waitingForNextWord = false;

// Set-up state with new text
function setUpText(newText: string) {
  if (newText == text.value) {
    return;
  }
  fullText = newText;
  active = true;
  currentCharacterIndex = 0;
  text.value = "";
}

// Called every update frame
function updateLoop() {
  if (active) {
    // If reached the end of the word
    if (currentCharacterIndex > fullText.length - 1) {
      active = false;
      currentCharacterIndex = 0;
    } else {
      // Otherwise, increase character index and add next character
      text.value += fullText[currentCharacterIndex];

      currentCharacterIndex++;
    }
  } else {
    // If not active, choose next word to appear after a delay
    if (waitingForNextWord) return;
    nextWordTimeout = setTimeout(chooseNextWord, props.delay);
    waitingForNextWord = true;
  }
}

// Chooses next word and sets waitingForNextWord to false
function chooseNextWord() {
  waitingForNextWord = false;
  setUpText(props.wordList[wordIndex]);

  wordIndex++;
  if (wordIndex > props.wordList.length - 1) {
    wordIndex = 0;
  }
}

onMounted(() => {
  // Display first word
  setUpText(props.wordList[0]);

  // Update loop
  updateLoopInterval = setInterval(() => updateLoop(), 50);
});

onUnmounted(() => {
  clearInterval(updateLoopInterval);
});
</script>

<template>
  <p class="wrapper">{{ text }}</p>
</template>

<style scoped>
@keyframes flash {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
.wrapper::after {
  content: "|";
  animation: flash 1s step-end infinite;
}

.wrapper {
  font-size: inherit;
  padding: 0px;
}
</style>
