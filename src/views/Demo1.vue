<template>
    <div class="demo-container">
        <button @click="goBack" class="back-button">返回主页</button>
        <h1>Demo 1</h1>
        <p>这是第一个测试 Demo 的内容。</p>
        <!-- 在这里放置 Demo 1 的具体实现 -->
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
    router.push('/')
}
</script>

<style scoped>
.demo-container {
    padding: 20px;
    text-align: center;
    height: 100vh;
    /* 让容器占满整个视口高度 */
    box-sizing: border-box;
    /* 防止 padding 导致溢出 */
    position: relative;
    /* 为了定位返回按钮 */
}

.back-button {
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 8px 15px;
    cursor: pointer;
}

h1 {
    margin-top: 60px;
    /* 避免标题和返回按钮重叠 */
}
</style>