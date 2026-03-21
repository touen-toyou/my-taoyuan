<template>
    <nav class="navbar">
        <div class="logo">
            <span class="logo-text">涛远 （taoyuan）</span>
        </div>

        <ul class="nav-links">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/works">作品</router-link></li>
            <li><router-link to="/skills">技能</router-link></li>
            <li><router-link to="/blog">博客</router-link></li>
            <li><router-link to="/gallery">相册</router-link></li>
        </ul>
    </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar {
    width: 100%;
    height: 70px;
    background: rgba(255, 255, 255, 0.03);
    border-bottom: 1px solid rgba(0, 234, 255, 0.2);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo-text {
    font-family: 'Orbitron', sans-serif;
    font-size: 24px;
    color: #00eaff;
    letter-spacing: 2px;
}

.nav-links {
    display: flex;
    gap: 30px;
    list-style: none;
}

.nav-links a {
    color: #00eaff;
    text-decoration: none;
    font-size: 18px;
    transition: 0.3s;
}

.nav-links a:hover {
    text-shadow: 0 0 10px #00eaff;
}
</style>
