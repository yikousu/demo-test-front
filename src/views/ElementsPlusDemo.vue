<template>
  <div class="demo-container">
    <button @click="goBack" class="back-button">返回主页</button>
    <div class="mb-4">
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </div>

    <div>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="User" name="first">User</el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
        <el-tab-pane label="Role" name="third">Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
      </el-tabs>
      目前标签的name：
      {{ activeName }}
    </div>

    <div>
      <h1>无限滚动</h1>
      <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
        <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import type { TabsPaneContext } from "element-plus";
const activeName = ref("first");
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
const router = useRouter();

const goBack = () => {
  router.push("/");
};

const count = ref(0);
const load = () => {
  count.value += 2;
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

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
