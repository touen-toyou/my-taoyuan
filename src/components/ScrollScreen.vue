<template>
    <section ref="el" class="screen">
        <slot />
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const el = ref<HTMLElement | null>(null)

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                } else {
                    entry.target.classList.remove('active')
                }
            })
        },
        { threshold: 0.6 }
    )

    if (el.value) observer.observe(el.value)
})
</script>

<style>
/* 全局禁止横向滚动条 */
html,
body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

/* 每一屏固定为 100vh */
.screen {
    height: 100vh;
    width: 100%;
    opacity: 0;
    transform: translateY(60px);
    transition: 0.9s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    /* 禁止撑开高度 */
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
    /* 防止内容撑出导致滚动条 */
}

/* 激活时淡入 */
.screen.active {
    opacity: 1;
    transform: translateY(0);
}

/* 移动端适配：禁止 padding，避免撑破 100vh */
@media (max-width: 768px) {
    .screen {
        padding: 0;
    }
}
</style>
