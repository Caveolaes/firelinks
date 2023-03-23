import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        name: 'index',
        path: '/',
        meta: {
            'title': '首页'
        },
        component: () => import('../view/index/Index.vue')
    },
    {
        name: 'subject',
        path: '/subject/:id',
        props:true,
        meta: {
            'title': '科目详情'
        },
        component:()=>import('../view/subject/Subject.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes

})
export default router

