<template>
    <div class="parallax-layer" :style="{
        transform: `translateY(${offset}px)`,
        zIndex: zIndex
    }">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
    speed: number   // 速度（0.1 ~ 0.5）
    zIndex?: number // 层级
}>()

const offset = ref(0)

function update() {
    const scrollY = window.scrollY
    offset.value = scrollY * props.speed
    requestAnimationFrame(update)
}

onMounted(() => {
    requestAnimationFrame(update)
})

onUnmounted(() => {
    // nothing needed, RAF auto stops
})
</script>

<style scoped>
.parallax-layer {
    position: absolute;
    width: 100%;
    pointer-events: none;
}
</style>
