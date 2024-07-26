<script setup lang="ts">
import { onMounted, ref, defineProps } from "@vue/runtime-dom";

const props = defineProps<{ wordList: Array<string>; delay: number }>();

const text = ref("Wait for it...");
let typewriterText = "";
let typewriterCharacter = 0;
let typewriterActive = false;

function typeSetUp(newText: string) {
  if (newText == text.value) {
    return;
  }
  typewriterText = newText;
  typewriterActive = true;
  typewriterCharacter = 0;
  text.value = "";
}

onMounted(() => {
  let wordIndex = 1;
  typeSetUp(props.wordList[0]);

  setInterval(() => {
    if (typewriterActive) {
      if (typewriterCharacter > typewriterText.length - 1) {
        typewriterActive = false;
        typewriterCharacter = 0;
      } else {
        text.value += typewriterText[typewriterCharacter];

        typewriterCharacter++;
      }
    }
  }, 50);

  setInterval(() => {
    typeSetUp(props.wordList[wordIndex]);

    wordIndex++;
    if (wordIndex > props.wordList.length - 1) {
      wordIndex = 0;
    }
  }, props.delay);
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
