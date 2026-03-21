<template>
    <div class="detail-container">
        <div v-html="htmlContent" class="markdown-body"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

// ------------------------------
// 解决 TS 错误的关键：把 highlight 独立出来
// ------------------------------
function highlightCode(code: string, lang: string) {
    if (lang && hljs.getLanguage(lang)) {
        return `<pre class="hljs"><code>${hljs.highlight(code, { language: lang }).value}</code></pre>`
    }
    return `<pre class="hljs"><code>${MarkdownIt().utils.escapeHtml(code)}</code></pre>`
}

// Markdown 渲染器
const md = new MarkdownIt({
    html: true,
    highlight: highlightCode
})

const route = useRoute()
const id = route.params.id as string

const htmlContent = ref('')

onMounted(async () => {
    try {
        const file = await fetch(`/posts/${id}.md`)
        const text = await file.text()
        htmlContent.value = md.render(text)
    } catch (e) {
        htmlContent.value = `<h1>文章不存在</h1><p>无法找到文章：${id}.md</p>`
    }
})
</script>

<style scoped>
.detail-container {
    padding: 40px 60px;
    color: var(--text-color);
}

/* Markdown 样式 */
.markdown-body h1 {
    font-size: 32px;
    color: var(--neon-color);
    margin-bottom: 20px;
}

.markdown-body h2 {
    font-size: 26px;
    color: var(--neon-color);
    margin-top: 30px;
}

.markdown-body h3 {
    font-size: 22px;
    color: var(--neon-color);
    margin-top: 20px;
}

.markdown-body p {
    line-height: 1.8;
    margin: 15px 0;
}

.markdown-body ul {
    margin: 15px 0;
    padding-left: 20px;
}

.markdown-body li {
    margin: 6px 0;
}

/* 代码块 */
.markdown-body pre {
    background: rgba(255, 255, 255, 0.05);
    padding: 15px;
    border-radius: 10px;
    overflow-x: auto;
    box-shadow: 0 0 15px var(--shadow-color);
    margin: 20px 0;
}

.markdown-body code {
    font-size: 14px;
}

/* 图片 */
.markdown-body img {
    max-width: 100%;
    border-radius: 10px;
    margin: 20px 0;
    box-shadow: 0 0 15px var(--shadow-color);
}

/* 引用块 */
.markdown-body blockquote {
    border-left: 4px solid var(--neon-color);
    padding-left: 15px;
    margin: 20px 0;
    opacity: 0.9;
}
</style>
