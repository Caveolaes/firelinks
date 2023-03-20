import { createRouter,createWebHashHistory } from 'vue-router'
const routes = [
    {
        name: 'index',
        path: '/',
        meta: {
            'title': '首页'
        },
        component: ()=>import('../view/index/Index.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes

})
export default router

