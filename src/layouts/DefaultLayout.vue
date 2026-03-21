<template>
    <div class="layout">
        <Navbar />

        <main class="content">
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
</script>

<style scoped>
.layout {
    width: 100%;
    min-height: 100vh;
    background: #0d0d0d;
}

.content {
    padding-top: 70px;
    /* 避免被导航栏遮住 */
}
</style>
