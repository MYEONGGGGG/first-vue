/**
 * index.js: vuex 의 store 를 정의 */

// import Vuex from 'vuex';
// import Vue from 'vue';
//
// Vue.use(Vuex);
//
// new Vuex.Store({
//     state,
//     getters,
//     mutations,
//     actions
// });


// vue3 에서 vuex4 를 이용할 경우의 스토어 선언
import { createStore } from 'vuex';
import {fetchAskList, fetchJobsList, fetchNewsList} from '../api/index.js';

export const store = new createStore({
// export default createStore({ // 오류 발생: "export 'store' was not found in './store'
//                                 --> main.js 에서 store의 index.js 위치를 찾을 수 없어 연결 불가능 하기때문에.

    // 내부 선언(vuex 구조)
    // state, getters, mutations, actions

    state: {
        newsList: [],
        askList: [],
        jobs: []
    },

    // getters,

    mutations: { // response 데이터를 담기위해 mutations 을 통해 state에 데이터를 담는다.
        SET_NEWS_LIST(state, newsData) {
            state.newsList = newsData; // actions 에서 넘겨준 데이터를 state에 담는다.
        },

        SET_ASK_LIST(state, askData) {
            state.askList = askData;
        },

        SET_JOBS(state, jobData) {
            state.jobs = jobData;
        }
    },

    actions: { // actions 으로 api 데이터 호출
        FETCH_NEWS_LIST(context) {
            fetchNewsList()
                .then(response => {
                    console.log(response);

                    // mutations 호출하여 데이터와 제어를 넘긴다.
                    context.commit('SET_NEWS_LIST', response.data);
                })
                .catch(error => {
                    console.log(error)
                });
        },

        FETCH_ASK_LIST(context) {
            fetchAskList()
                .then(response => {
                    context.commit('SET_ASK_LIST', response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        },

        FETCH_JOBS(context) {
            fetchJobsList()
                .then(response => {
                    context.commit('SET_JOBS', response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
});