/**
 * vue cli 3.x 버전 부터는
 *  - import vue-router
 *  - 라우터 생성
 *
 * 아래와 같은 방법을 이용해야 함.
 * */
import { createWebHistory, createRouter } from "vue-router";
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';

// Vue.use(VueRouter);

// 라우터 생성
export const router = new createRouter({

    history: createWebHistory(),

    routes: [
        /**
         * [ router View 관리 ]
         * path: url 주소
         * component: url 주소로 갔을 때 표시될 컴포넌트
         * */
        {
            path: '/news',
            component: NewsView
        },

        {
            path: '/ask',
            component: AskView
        },

        {
            path: '/jobs',
            component: JobsView
        }
    ]
});