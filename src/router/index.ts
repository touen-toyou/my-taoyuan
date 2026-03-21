import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Blog from '../pages/Blog.vue'
import BlogDetail from '../pages/BlogDetail.vue'
import Gallery from '../pages/Gallery.vue'
import GalleryAlbum from '../pages/GalleryAlbum.vue'
import Works from '../pages/Works.vue'
import Skills from '../pages/Skills.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/works', component: Works },
  { path: '/skills', component: Skills },
  { path: '/blog', component: Blog },
  { path: '/blog/:id', component: BlogDetail },
  { path: '/gallery', component: Gallery },
  { path: '/gallery/:albumId', component: GalleryAlbum },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
