<template>
    <div class="work-card" @mousemove="onMove" @mouseleave="reset">
        <img :src="cover" class="cover" />
        <div class="info">
            <h3>{{ title }}</h3>
            <p>{{ desc }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
    desc: string
    cover: string
}>()

function onMove(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateY = ((x / rect.width) - 0.5) * 20
    const rotateX = ((y / rect.height) - 0.5) * -20

    el.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
}

function reset(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement
    el.style.transform = `rotateY(0deg) rotateX(0deg)`
}
</script>

<style scoped>
.work-card {
    width: 280px;
    height: 340px;
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    overflow: hidden;
    transition: 0.3s;
    transform-style: preserve-3d;
    cursor: pointer;
    box-shadow: 0 0 20px transparent;
}

.work-card:hover {
    box-shadow: 0 0 25px var(--shadow-color);
}

.cover {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.info {
    padding: 20px;
}

.info h3 {
    color: var(--neon-color);
    margin-bottom: 10px;
}

.info p {
    opacity: 0.8;
    line-height: 1.6;
}
</style>
