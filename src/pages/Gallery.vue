<template>
    <div class="gallery-container">
        <h1 class="title">相册 Gallery</h1>

        <div class="album-grid">
            <router-link v-for="album in albums" :key="album.id" :to="`/gallery/${album.id}`" class="album-card">
                <img :src="album.cover" class="album-cover" />
                <div class="album-name">{{ album.name }}</div>
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
const albums = [
    { id: 'travel', name: '旅行记忆', cover: '/album/travel/cover.jpg' },
    { id: 'life', name: '生活随拍', cover: '/album/life/cover.jpg' },
    { id: 'food', name: '美食记录', cover: '/album/food/cover.jpg' }
]
</script>

<style scoped>
.gallery-container {
    padding: 60px;
    color: white;
}

.title {
    font-size: 32px;
    color: #00eaff;
    margin-bottom: 40px;
    text-align: center;
}

.album-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 240px);
    gap: 30px;
    justify-content: center;
}

.album-card {
    width: 240px;
    height: 260px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(0, 234, 255, 0.4);
    border-radius: 16px;
    text-decoration: none;
    color: #00eaff;
    overflow: hidden;
    transition: 0.3s;
    box-shadow: 0 0 20px transparent;
}

.album-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 20px #00eaff;
}

.album-cover {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.album-name {
    text-align: center;
    padding: 15px 0;
    font-size: 18px;
}
</style>
