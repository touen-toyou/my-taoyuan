<template>
    <div class="home-container">

        <!-- 第一屏：3D 头像卡片 -->
        <ScrollScreen>
            <div class="hero">
                <div class="hero-card" @mousemove="onMove" @mouseleave="reset">
                    <img src="/avatar.png" class="avatar-img" />
                </div>

                <h1 class="hero-title">涛远 Taoyuan</h1>
                <p class="hero-subtitle">未来感 · 创造力 · 技术驱动</p>
            </div>
        </ScrollScreen>

        <!-- 第二屏：第一段介绍 -->
        <ScrollScreen>
            <div class="intro">
                <img src="/intro1.jpg" class="intro-img" />
                <div class="intro-text">
                    <h2>关于我</h2>
                    <p>
                        我是涛远，一名热爱技术与设计的创造者。
                        我喜欢把未来感、创造力和技术驱动结合，呈现独特的视觉体验。
                    </p>
                </div>
            </div>
        </ScrollScreen>

        <!-- 第三屏：第二段介绍 -->
        <ScrollScreen>
            <div class="intro reverse">
                <div class="intro-text">
                    <h2>我的理念</h2>
                    <p>
                        技术不仅是工具，更是表达思想的方式。
                        我追求优雅、速度、沉浸感的界面体验。
                    </p>
                </div>
                <img src="/intro2.jpg" class="intro-img" />
            </div>
        </ScrollScreen>

        <!-- 第四屏：菜单入口 -->
        <ScrollScreen>
            <div class="menu">
                <h2 class="menu-title">探索更多</h2>

                <div class="menu-grid">
                    <router-link to="/works" class="menu-card">作品 Works</router-link>
                    <router-link to="/skills" class="menu-card">技能 Skills</router-link>
                    <router-link to="/blog" class="menu-card">博客 Blog</router-link>
                    <router-link to="/gallery" class="menu-card">相册 Gallery</router-link>
                </div>
            </div>
        </ScrollScreen>

    </div>
</template>

<script setup lang="ts">
import ScrollScreen from '../components/ScrollScreen.vue'

function onMove(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateY = ((x / rect.width) - 0.5) * 20
    const rotateX = ((y / rect.height) - 0.5) * -20

    el.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
}

function reset(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement
    el.style.transform = `rotateY(0deg) rotateX(0deg)`
}
</script>

<style>
.home-container {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-y: hidden;
    overflow-x: hidden;
}

/* 第一屏：3D 卡片 */
.hero {
    text-align: center;
}

.hero-card {
    width: 220px;
    height: 220px;
    margin: auto;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(0, 234, 255, 0.4);
    box-shadow: 0 0 20px #00eaff;
    transition: 0.3s ease;
    transform-style: preserve-3d;
}

.hero-card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px #00eaff;
}

.avatar-img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
}

.hero-title {
    margin-top: 20px;
    font-size: 42px;
    color: #00eaff;
}

.hero-subtitle {
    margin-top: 10px;
    font-size: 18px;
    opacity: 0.8;
}

/* 介绍区 */
.intro {
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 0 10%;
}

.intro.reverse {
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

/* 菜单入口 */
.menu {
    text-align: center;
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
}

.menu-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px #00eaff;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .intro {
        flex-direction: column;
        text-align: center;
    }

    .intro.reverse {
        flex-direction: column;
    }

    .intro-img {
        width: 80%;
    }

    .menu-grid {
        grid-template-columns: 1fr;
    }
}
</style>
