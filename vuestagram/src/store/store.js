/**
 * Vuex4 셋팅 방법
 * */

import { createStore } from 'vuex';
import axios from "axios";

const store = createStore({

    // state() {
    //     return {
    //         likes: 0,
    //         likesBtn: false,
    //     }
    // },

    // state: 데이터 보관함
    state: {
        /**
         * [] : 배열
         * {} : 객체
         * */
        name: 'Choi',

        likes: 0,
        likesBtn: false,
        more: {},
    },

    // mutations: 데이터 수정방법 정의하는 공간
    mutations: {
        updateLikes(state) { // 파라미터 'state' = store.js 의 state
            if (state.likesBtn==false) {
                state.likes++;
                state.likesBtn = true;
            } else {
                state.likes--;
                state.likesBtn = false;
            }
        },
        updateMore(state, data) {
            state.more = data;
        },
    },

    // actions: ajax, axios 요청(시간이 걸리는 작업들의 공간)
    actions: {
        getData(context) { // 파라미터 'context' = $store
          axios.get('https://codingapple1.github.io/vue/more0.json')
              .then(response => {
                  console.log(response.data);

                  // mutations를 이용해서 state에 데이터 저장
                  context.commit('updateMore', response.data);
              })
              .catch(error => {
                  console.log(error);
              });
        },
    },
});

export default store;

/**
 * ※ 주의: Vuex 사용시 컴포넌트 안에서 데이터를 직접 수정하지 않도록 한다.
 *        이유? 오류가 발생할 경우 원인을 찾기 어렵다.
 *        수정하는 방법? 컴포넌트에서 데이터를 소환 후 수정해야 한다.
 * */