import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router"; // 引入路由
import ElementPlus from "element-plus";
import "element-plus/dist/index.css"; // 引入样式
import { lazyPlug } from "@/directives/index.js";

const app = createApp(App);

app.use(router); // 使用路由
app.use(createPinia()); // 使用pinia
app.use(ElementPlus); // 使用element-plus
app.mount("#app");
app.use(lazyPlug);
