<template>
    <div class="works-container">
        <h1 class="title">作品 Works</h1>

        <div class="works-grid">
            <WorkCard v-for="item in works" :key="item.title" :title="item.title" :desc="item.desc"
                :cover="item.cover" />
        </div>
    </div>
</template>

<script setup lang="ts">
import WorkCard from '../components/works/WorkCard.vue'

const works = [
    {
        title: '未来感个人主页',
        desc: '使用 Vue3 + TypeScript + Vite 构建的未来感个人网站。',
        cover: '/works/homepage.jpg'
    },
    {
        title: '餐厅官网设计',
        desc: '高端餐厅官网，包含轮播、菜单、动画、响应式布局。',
        cover: '/works/restaurant.jpg'
    },
    {
        title: 'AI 动画生成工具',
        desc: '基于 AI 的动画生成界面设计与交互实现。',
        cover: '/works/ai-tool.jpg'
    }
]
</script>

<style scoped>
.works-container {
    padding: 60px;
    color: white;
}

.title {
    font-size: 32px;
    color: #00eaff;
    text-align: center;
    margin-bottom: 40px;
}

.works-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 280px);
    gap: 40px;
    justify-content: center;
}
</style>
