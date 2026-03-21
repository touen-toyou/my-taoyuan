<template>
    <div class="skills-container">
        <h1 class="title">技能 Skills</h1>

        <div class="skills-grid">
            <SkillBar v-for="skill in skills" :key="skill.name" :name="skill.name" :value="skill.value"
                :icon="skill.icon" />
        </div>
    </div>
</template>

<script setup lang="ts">
import SkillBar from '../components/skills/SkillBar.vue'

const skills = [
    {
        name: 'Vue3',
        value: 90,
        icon: '/icons/vue.svg'
    },
    {
        name: 'TypeScript',
        value: 85,
        icon: '/icons/ts.svg'
    },
    {
        name: 'JavaScript',
        value: 92,
        icon: '/icons/js.svg'
    },
    {
        name: 'CSS / SCSS',
        value: 95,
        icon: '/icons/css.svg'
    },
    {
        name: 'UI 设计',
        value: 88,
        icon: '/icons/design.svg'
    },
    {
        name: '动画 / 交互',
        value: 90,
        icon: '/icons/animation.svg'
    }
]
</script>

<style scoped>
.skills-container {
    padding: 60px;
    color: white;
}

.title {
    font-size: 32px;
    color: #00eaff;
    text-align: center;
    margin-bottom: 40px;
}

.skills-grid {
    max-width: 600px;
    margin: auto;
}
</style>
