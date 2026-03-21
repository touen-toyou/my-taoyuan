<template>
    <div class="card" ref="cardRef">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const cardRef = ref<HTMLElement | null>(null)

onMounted(() => {
    const card = cardRef.value
    if (!card) return

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const rotateY = ((x / rect.width) - 0.5) * 20
        const rotateX = ((y / rect.height) - 0.5) * -20

        card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
    })

    card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`
    })
})
</script>

<style scoped>
.card {
    width: 260px;
    height: 260px;
    margin: auto;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(0, 234, 255, 0.4);
    border-radius: 20px;
    box-shadow: 0 0 30px #00eaff;
    transition: transform 0.2s ease-out;
    transform-style: preserve-3d;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
