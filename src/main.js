import { createApp } from 'vue'
import App from './App.vue'
//路由加载
import router from './router'
//API加载
import engine from './api/engine'
//element-plus加载
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// //swiper样式加载
// import 'swiper/css'

const app = createApp(App)
//原型挂载
app.config.globalProperties.$api = engine

app.use(router)
app.use(ElementPlus,{size:"small"})
app.mount('#app')
