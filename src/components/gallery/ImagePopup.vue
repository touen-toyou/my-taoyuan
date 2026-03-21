<template>
    <div class="popup-bg" @click="$emit('close')">
        <div class="popup-content" @click.stop>
            <img :src="src" class="popup-img" />
            <button class="close-btn" @click="$emit('close')">×</button>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{ src: string }>()
</script>

<style scoped>
.popup-bg {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;
}

.popup-content {
    position: relative;
}

.popup-img {
    max-width: 90vw;
    max-height: 85vh;
    border-radius: 12px;
    box-shadow: 0 0 30px #00eaff;
}

.close-btn {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background: #00eaff;
    color: black;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 0 10px #00eaff;
}
</style>
