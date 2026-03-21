<template>
    <div class="skill-item">
        <div class="skill-header">
            <img v-if="icon" :src="icon" class="skill-icon" />
            <span class="skill-name">{{ name }}</span>
            <span class="skill-value">{{ value }}%</span>
        </div>

        <div class="bar-bg">
            <div class="bar-fill" :style="{ width: animatedWidth + '%' }"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
    name: string
    value: number
    icon?: string
}>()

const animatedWidth = ref(0)

onMounted(() => {
    setTimeout(() => {
        animatedWidth.value = props.value
    }, 200)
})
</script>

<style scoped>
.skill-item {
    margin-bottom: 30px;
}

.skill-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
}

.skill-icon {
    width: 26px;
    height: 26px;
    margin-right: 10px;
}

.skill-name {
    flex: 1;
    font-size: 18px;
    color: #00eaff;
}

.skill-value {
    font-size: 16px;
    opacity: 0.8;
}

.bar-bg {
    width: 100%;
    height: 10px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 6px;
    overflow: hidden;
}

.bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #00eaff, #00bcd4);
    box-shadow: 0 0 10px #00eaff;
    transition: width 1.2s ease;
}
</style>
