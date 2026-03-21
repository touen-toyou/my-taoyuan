<template>
    <div class="album-container">
        <h1 class="title">{{ albumName }}</h1>

        <div class="masonry">
            <img v-for="(img, index) in images" :key="index" :src="img" class="photo" @click="openPopup(img)" />
        </div>

        <ImagePopup v-if="popupImg" :src="popupImg" @close="popupImg = ''" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import ImagePopup from '../components/gallery/ImagePopup.vue'

const route = useRoute()
const albumId = route.params.albumId as string

const popupImg = ref('')

// 假数据（你之后可以改成读取文件夹）
const albumData: Record<string, any> = {
    travel: {
        name: '旅行记忆',
        images: [
            '/album/travel/1.jpg',
            '/album/travel/2.jpg',
            '/album/travel/3.jpg'
        ]
    },
    life: {
        name: '生活随拍',
        images: [
            '/album/life/1.jpg',
            '/album/life/2.jpg'
        ]
    },
    food: {
        name: '美食记录',
        images: [
            '/album/food/1.jpg',
            '/album/food/2.jpg',
            '/album/food/3.jpg'
        ]
    }
}

const albumName = albumData[albumId]?.name || '相册'
const images = albumData[albumId]?.images || []

function openPopup(img: string) {
    popupImg.value = img
}
</script>

<style scoped>
.album-container {
    padding: 60px;
    color: white;
}

.title {
    font-size: 32px;
    color: #00eaff;
    margin-bottom: 40px;
    text-align: center;
}

/* 瀑布流布局 */
.masonry {
    column-count: 3;
    column-gap: 20px;
}

.photo {
    width: 100%;
    margin-bottom: 20px;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 0 10px transparent;
}

.photo:hover {
    box-shadow: 0 0 20px #00eaff;
}
</style>
