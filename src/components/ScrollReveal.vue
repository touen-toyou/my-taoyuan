<template>
    <div ref="elRef" class="reveal">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const elRef = ref<HTMLElement | null>(null)

onMounted(() => {
    const el = elRef.value
    if (!el) return

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    el.classList.add('active')
                }
            })
        },
        { threshold: 0.2 }
    )

    observer.observe(el)
})
</script>

<style scoped>
.reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: 1s ease;
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}
</style>
