<template>
  <div class="demo-container">
    <button @click="goBack" class="back-button">返回主页</button>
    <button @click="getOne">点击获取情话</button>
    <div>
      <ul>
        <li v-for="(item, index) in talkList" :index="index">{{ item.content }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import http from "@/utils/http";
import { reactive } from "vue";
const router = useRouter();

const goBack = () => {
  router.push("/");
};

let talkList = reactive([{ id: "1001", content: "“你属什么？”“我属狗。”“你不要再骗人了，你属于我。”" }]);
/**
 *  可能跨域报错
 *  在vite.config.js中配置 【临时】
 *  server: {
        proxy: {
            "/api": {
                target: "https://api.uomg.com",
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, ""),
            },
        },
    },
 *
 *
 */
const getOne = async () => {
  let data = await http.get("/api/api/rand.qinghua?format=json");
  console.log(data.data.content);

  let obj = { id: data.data.code, content: data.data.content };
  talkList.push(obj);
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
