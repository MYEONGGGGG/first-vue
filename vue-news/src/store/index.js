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
import mutations from "@/store/mutations.js";
import actions from "@/store/actions.js";
// import mitt from "mitt"; //mitt 예제

export const store = new createStore({
// export default createStore({ // 오류 발생: "export 'store' was not found in './store'
//                                 --> main.js 에서 store의 index.js 위치를 찾을 수 없어 연결 불가능 하기때문에.

    // 내부 선언(vuex 구조)
    state: {
        // 속성 추가

        /**
         * [] : 배열
         * {} : 객체
         * */
        // *** HOC 로 구현했기때문에 더이상 필요 없음
        newsList: [],
        askList: [],
        jobs: [],
        // *** HOC 로 구현했기때문에 더이상 필요 없음

        user: {},
        item: {},
        list: [],

        // emitter: mitt() //컴포넌트에서 어디든 mitt()이 return 하는 emitter 에 접근가능하도록 state에 저장. //mitt 예제
    },
    getters: {
        // *** HOC 로 구현했기때문에 더이상 필요 없음
        fetchedAsk(state) {
            return state.askList;
        },
        // *** HOC 로 구현했기때문에 더이상 필요 없음

        fetchedItem(state) {
            return state.item;
        },
        // fetchedList(state) {
        //     return state.list;
        // }
    },
    mutations,
    actions
});