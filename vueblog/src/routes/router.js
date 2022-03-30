import { createWebHistory, createRouter } from 'vue-router';
import List from "@/components/List";
import Main from "@/components/Main";
import Detail from "@/components/Detail";
import Menu1 from "@/components/Menu1";
import Author from "@/components/Author";
import Comment from "@/components/Comment";


const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/list',
        component: List,

        //named view: 여러개 컴포넌트 보여줄 때
        //<router-view/> 도 여러개 추가해야한다.
        // components: {
        //     List,
        //     Comment,
        //     Author
        // }
    },
    {
        path: '/detail/:id', // ':파라미터명' 라우트 파라미터
        component: Detail,

        // 추가로 페이지 더 나누는 방법(nested routes)
        // 반드시 상대경로로 path 지정
        children:[
            {
                path: 'author',
                component: Author,
            },
            {
                path: 'comment',
                component: Comment,
            },
        ],
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