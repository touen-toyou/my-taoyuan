<template>
    <div class="blog-container">
        <!-- 左侧 Sidebar -->
        <Sidebar />

        <!-- 右侧内容区 -->
        <div class="blog-content">
            <h1 class="blog-title">博客 Blog</h1>

            <p class="blog-tip">请选择左侧的文章查看内容</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import Sidebar from '../components/blog/Sidebar.vue'
</script>

<style scoped>
.blog-container {
    display: flex;
    width: 100%;
    min-height: calc(100vh - 70px);
    background: #0d0d0d;
    color: white;
}

.blog-content {
    flex: 1;
    padding: 40px 60px;
}

.blog-title {
    font-size: 32px;
    color: #00eaff;
    margin-bottom: 20px;
}

.blog-tip {
    opacity: 0.7;
}
</style>
