<template>
  <div class="demo-container">
    <button @click="goBack" class="back-button">返回主页</button>
    <div>
      <!-- https://www.iconfont.cn/ -->
      <h4>
        <i class="iconfont icon-Txu"></i>
        衣服
      </h4>
      <h4>
        <i class="iconfont icon-hanbao"></i>
        汉堡
      </h4>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.push("/");
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
