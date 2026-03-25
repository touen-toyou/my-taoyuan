<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import DefaultLayout from './layouts/DefaultLayout.vue'
import HomeLayout from './layouts/HomeLayout.vue'

const route = useRoute()

// 首页使用 HomeLayout，其它页面使用 DefaultLayout
const layout = computed(() => {
  return route.path === '/' ? HomeLayout : DefaultLayout
})
</script>
