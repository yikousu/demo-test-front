<template>
    <div class="demo-container">
        <button @click="goBack" class="back-button">返回主页</button>
        <h1>Pinia 测试</h1>
        <h2>当前计数：{{ counterStore.count }}</h2>
        <button @click="counterStore.increment">click</button>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useCounterStore } from "@/store/counter";
const router = useRouter();

const goBack = () => {
    router.push("/");
};

const counterStore = useCounterStore();
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
</style>
