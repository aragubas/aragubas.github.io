<script setup lang="ts">
const props = defineProps({
    title: String,
    description: String
})
</script>

<template>
    <article class="section">
        <header>
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
        </header>
    
        <div class="items">
            <slot></slot>
        </div>
    </article>
</template>

<style>
.section {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.section header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding-bottom: 0.75rem;
}

.section header h1 {
    font-size: 2rem;
}
</style>