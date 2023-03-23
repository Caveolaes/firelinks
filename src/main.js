import { createApp } from "vue";
import App from "./App.vue";
//路由加载
import router from "./router";
//API加载
import engine from "./api/engine";
//element-plus加载
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

const app = createApp(App);
//原型挂载
app.config.globalProperties.$api = engine;
//加载icon图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(VueVideoPlayer)
app.use(router);
app.use(ElementPlus, { size: "small" });
app.mount("#app");
