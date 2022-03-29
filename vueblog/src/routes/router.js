import { createWebHistory, createRouter } from 'vue-router';
import List from "@/components/List";
import Main from "@/components/Main";
import Detail from "@/components/Detail";
import Menu1 from "@/components/Menu1";


const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/list',
        component: List,
    },
    {
        path: '/detail/:id', // ':파라미터명' 라우트 파라미터
        component: Detail,
    },
    {
        path: '/menu1',
        component: Menu1,
    },
    {
        path: '/:anything(.*)',
        component: Main,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;