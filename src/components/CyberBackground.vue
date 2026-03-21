<template>
    <canvas ref="canvas" class="cyber-bg"></canvas>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
    const c = canvas.value!
    const ctx = c.getContext('2d')!

    function resize() {
        c.width = window.innerWidth
        c.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 80 }).map(() => ({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6
    }))

    function animate() {
        ctx.clearRect(0, 0, c.width, c.height)

        particles.forEach((p) => {
            p.x += p.speedX
            p.y += p.speedY

            if (p.x < 0 || p.x > c.width) p.speedX *= -1
            if (p.y < 0 || p.y > c.height) p.speedY *= -1

            ctx.fillStyle = '#00eaff'
            ctx.shadowBlur = 10
            ctx.shadowColor = '#00eaff'
            ctx.beginPath()
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
            ctx.fill()
        })

        requestAnimationFrame(animate)
    }

    animate()
})
</script>

<style scoped>
.cyber-bg {
    position: fixed;
    inset: 0;
    z-index: -1;
    background: #0d0d0d;
}
</style>
