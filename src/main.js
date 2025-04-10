import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router"; // 引入路由
import ElementPlus from "element-plus";
import "element-plus/dist/index.css"; // 引入样式
const app = createApp(App);

app.use(router); // 使用路由
app.use(createPinia()); // 使用pinia
app.use(ElementPlus); // 使用element-plus
app.mount("#app");

// 全局的指令  可以局部
app.directive("focus", {
  mounted(el) {
    el.focus();
  },
});
