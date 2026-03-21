<template>
    <button class="theme-toggle" @click="toggleTheme">
        <span v-if="theme === 'dark'">🌙</span>
        <span v-else>⚡</span>
    </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const theme = ref('dark')

onMounted(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
        theme.value = saved
        document.documentElement.setAttribute('data-theme', saved)
    }
})

function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'cyber' : 'dark'
    document.documentElement.setAttribute('data-theme', theme.value)
    localStorage.setItem('theme', theme.value)
}
</script>

<style scoped>
.theme-toggle {
    position: fixed;
    top: 20px;
    right: 30px;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: none;
    background: var(--card-bg);
    color: var(--neon-color);
    font-size: 20px;
    cursor: pointer;
    box-shadow: 0 0 10px var(--shadow-color);
    transition: 0.3s;
    z-index: 200;
}

.theme-toggle:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px var(--shadow-color);
}
</style>
