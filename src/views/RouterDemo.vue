<template>
  <div class="demo-container">
    <button @click="goBack" class="back-button">返回主页</button>
    <h1>编程式导航</h1>
    <el-button type="primary" @click="goAxiosDemo" plain>跳转到AxiosDemo</el-button>
    <el-button type="primary" @click="goDirectiveDemo">跳转到DirectiveDemo</el-button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goBack = () => {
  router.push("/");
};

const goAxiosDemo = () => {
  router.push("/axiosDemo");
};

const goDirectiveDemo = () => {
  router.push({ name: "DirectiveDemo" }); // 使用路由名称进行导航
};
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
