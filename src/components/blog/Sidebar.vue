<template>
    <div :class="['sidebar', { collapsed }]">
        <!-- 折叠按钮 -->
        <div class="toggle-btn" @click="collapsed = !collapsed">
            <span v-if="collapsed">▶</span>
            <span v-else>◀</span>
        </div>

        <!-- 折叠后不显示内容 -->
        <div v-if="!collapsed" class="sidebar-content">
            <h2 class="sidebar-title">文章目录</h2>

            <div v-for="(posts, year) in blogTree" :key="year" class="year-block">
                <div class="year-title" @click="toggleYear(year)">
                    {{ year }}
                    <span class="arrow">{{ openedYears.includes(year) ? '▼' : '▶' }}</span>
                </div>

                <ul v-if="openedYears.includes(year)" class="post-list">
                    <li v-for="post in posts" :key="post.id">
                        <router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const collapsed = ref(false)
const openedYears = ref<string[]>([])

// 从文件读取
const blogTree = {
    2026: [
        { id: 'hello-world', title: 'Hello World' },
        { id: 'vue3-tips', title: 'Vue3 技巧整理' }
    ],
    2025: [
        { id: 'life-note', title: '生活随笔' }
    ]
}


function toggleYear(year: string) {
    if (openedYears.value.includes(year)) {
        openedYears.value = openedYears.value.filter((y) => y !== year)
    } else {
        openedYears.value.push(year)
    }
}
</script>

<style scoped>
.sidebar {
    width: 260px;
    background: rgba(255, 255, 255, 0.03);
    border-right: 1px solid rgba(0, 234, 255, 0.2);
    backdrop-filter: blur(10px);
    padding: 20px;
    transition: width 0.3s;
    position: relative;
}

.sidebar.collapsed {
    width: 40px;
    padding: 20px 5px;
}

.toggle-btn {
    position: absolute;
    top: 20px;
    right: -15px;
    width: 30px;
    height: 30px;
    background: #00eaff;
    color: black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 0 10px #00eaff;
}

.sidebar-title {
    font-size: 20px;
    color: #00eaff;
    margin-bottom: 20px;
}

.year-block {
    margin-bottom: 15px;
}

.year-title {
    font-size: 18px;
    cursor: pointer;
    color: #00eaff;
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
}

.post-list {
    list-style: none;
    padding-left: 15px;
    margin-top: 8px;
}

.post-list a {
    color: white;
    opacity: 0.8;
    text-decoration: none;
    transition: 0.2s;
}

.post-list a:hover {
    opacity: 1;
    text-shadow: 0 0 10px #00eaff;
}
</style>
