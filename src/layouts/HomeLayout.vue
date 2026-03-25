<template>
    <div class="home-layout">
        <slot />
    </div>
</template>

<style>
html,
body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

.home-layout {
    width: 100%;
    min-height: 100vh;
    background: #0d0d0d;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    /* 允许滚动，但不会出现多余滚动条 */
    box-sizing: border-box;
}
</style>
