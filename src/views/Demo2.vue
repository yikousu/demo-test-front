<template>
    <div class="demo-container">
        <button @click="goBack" class="back-button">返回主页</button>
        <h1>Demo 2</h1>
        <p>这是第二个测试 Demo 的内容。</p>
        <input type="text" placeholder="一个输入框示例">
        <!-- 在这里放置 Demo 2 的具体实现 -->
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
    box-sizing: border-box;
    position: relative;
    background-color: #f0f0f0;
    /* 给 Demo 2 加个不同的背景色以区分 */
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
}

input {
    margin-top: 20px;
    padding: 10px;
    font-size: 16px;
}
</style>