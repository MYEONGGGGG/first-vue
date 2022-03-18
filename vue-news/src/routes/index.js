/**
 * vue cli 3.x 버전 부터는
 *  - import vue-router
 *  - 라우터 생성
 *
 * 아래와 같은 방법을 이용해야 함.
 * */
import { createWebHistory, createRouter } from 'vue-router';
import NewsView from "../views/NewsView";
import AskView from "../views/AskView";
import JobsView from "../views/JobsView";
import UserView from "../views/UserView";
import ItemView from "../views/ItemView";
// import createListView from "@/views/CreateListView"; //HOC
import { store } from "../store/index.js"; //Mixin

// 라우터 생성
export const router = new createRouter({

    /**
     * history
     *  - HTML5 모드: createWebHistory() ==> 권장되는 history 모드. (예) http://localhost:8080
     *  - hash 모드: createWebHashHistory() ==> url에 hash('#')가 붙는 형식. (예) http://localhost:8080/#/
     * */
    history:  createWebHistory(),

    routes: [
        /**
         * [ router View 관리 ]
         * path: url 주소
         * component: url 주소로 갔을 때 표시될 컴포넌트
         * */
        {
            path: '/',
            redirect: '/news'
        },
        {
            path: '/news',
            name: 'news',
            // HOC
            // component: createListView('NewsView'), // CreateListView.js 에서 선언한 render 함수 연결

            // Mixin
            component: NewsView,

            beforeEnter: (to, from, next) => {
                // start spinner 추가 필요
                // (추가하려고 했으나 emitter 가 라우트에서 불러오질못해서 빼고 함. '라이플사이클 훅' 동작 원리만 이해만 하기. *beforeEnter*)

                store.dispatch("FETCH_LIST", to.name)
                    .then(() => {
                        // to, from, next 인자로 확인
                        // console.log('to', to);
                        // console.log('from', from);
                        // console.log(next);
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },

        {
            path: '/ask',
            name: 'ask',
            // HOC
            // component: createListView('AskView')

            // Mixin
            component: AskView,

            beforeEnter: (to, from, next) => {
                // start spinner 추가 필요
                store.dispatch("FETCH_LIST", to.name)
                    .then(() => next())
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },

        {
            path: '/jobs',
            name: 'jobs',
            // HOC
            // component: createListView('JobsView')

            // Mixin
            component: JobsView,

            beforeEnter: (to, from, next) => {
                // start spinner 추가 필요
                store.dispatch("FETCH_LIST", to.name)
                    .then(() => next())
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },

        {
            path: '/user/:id',
            component: UserView
        },

        {
            path: '/item/:id',
            component: ItemView
        }
    ]
});