<template>
    <div class="home-container">
        <!-- 1. 3D 头像卡片 -->
        <section class="hero-section">
            <FuturisticCard>
                <img src="/avatar.png" alt="avatar" class="avatar-img" />
            </FuturisticCard>

            <h1 class="hero-title">涛远 Taoyuan</h1>
            <p class="hero-subtitle">未来感 · 创造力 · 技术驱动</p>
        </section>

        <!-- 2. 简介区块（Scroll Reveal） -->
        <ScrollReveal>
            <section class="intro-section">
                <img src="/intro1.jpg" class="intro-img" />
                <div class="intro-text">
                    <h2>关于我</h2>
                    <p>
                        我是涛远，一名热爱技术与设计的创造者。
                        我喜欢把未来感的视觉风格与现代前端技术结合，打造独特的数字体验。
                    </p>
                </div>
            </section>
        </ScrollReveal>

        <!-- 3. 第二段介绍 -->
        <ScrollReveal>
            <section class="intro-section reverse">
                <div class="intro-text">
                    <h2>我的理念</h2>
                    <p>
                        技术不仅是工具，更是表达思想的方式。
                        我追求优雅、速度、沉浸感的界面体验。
                    </p>
                </div>
                <img src="/intro2.jpg" class="intro-img" />
            </section>
        </ScrollReveal>

        <!-- 4. 菜单入口 -->
        <ScrollReveal>
            <section class="menu-section">
                <h2 class="menu-title">探索更多</h2>

                <div class="menu-grid">
                    <router-link to="/works" class="menu-card">作品 Works</router-link>
                    <router-link to="/skills" class="menu-card">技能 Skills</router-link>
                    <router-link to="/blog" class="menu-card">博客 Blog</router-link>
                    <router-link to="/gallery" class="menu-card">相册 Gallery</router-link>
                </div>
            </section>
        </ScrollReveal>
    </div>
</template>

<script setup lang="ts">
import FuturisticCard from '../components/FuturisticCard.vue'
import ScrollReveal from '../components/ScrollReveal.vue'
</script>

<style scoped>
.home-container {
    width: 100%;
    color: white;
    background: #0d0d0d;
    padding-bottom: 100px;
}

/* Hero Section */
.hero-section {
    text-align: center;
    padding-top: 120px;
}

.avatar-img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    object-fit: cover;
}

.hero-title {
    margin-top: 20px;
    font-size: 42px;
    font-family: 'Orbitron', sans-serif;
    color: #00eaff;
}

.hero-subtitle {
    margin-top: 10px;
    font-size: 18px;
    opacity: 0.8;
}

/* Intro Sections */
.intro-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 120px 10%;
}

.intro-section.reverse {
    flex-direction: row-reverse;
}

.intro-img {
    width: 380px;
    border-radius: 12px;
    box-shadow: 0 0 20px #00eaff;
}

.intro-text {
    max-width: 480px;
}

.intro-text h2 {
    font-size: 32px;
    color: #00eaff;
    margin-bottom: 10px;
}

.intro-text p {
    line-height: 1.8;
    opacity: 0.9;
}

/* Menu Section */
.menu-section {
    text-align: center;
    padding: 100px 0;
}

.menu-title {
    font-size: 32px;
    color: #00eaff;
    margin-bottom: 40px;
}

.menu-grid {
    display: grid;
    grid-template-columns: repeat(2, 200px);
    gap: 30px;
    justify-content: center;
}

.menu-card {
    padding: 20px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(0, 234, 255, 0.4);
    color: #00eaff;
    text-decoration: none;
    font-size: 20px;
    transition: 0.3s;
    box-shadow: 0 0 10px transparent;
}

.menu-card:hover {
    box-shadow: 0 0 20px #00eaff;
    transform: translateY(-5px);
}
</style>
