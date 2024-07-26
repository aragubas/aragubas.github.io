<script setup lang="ts">
import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";
</script>

<template>
  <PageHeader></PageHeader>
  <router-view></router-view>
  <PageFooter></PageFooter>
</template>

<style scoped></style>
