/**
 * Vuex4 셋팅 방법
 * */

import { createStore } from 'vuex';

const store = createStore({
    // state: 데이터 보관함
    state() {
        return {
            likes: 0,
            likesBtn: false,
        }
    },

    // mutations: 데이터 수정방법 정의하는 공간
    mutations: {
        updateLikes(state) { // state 파라미터 = store.js 의 state
            if (state.likesBtn==false) {
                state.likes++;
                state.likesBtn = true;
            } else {
                state.likes--;
                state.likesBtn = false;
            }
        },
    },
});

export default store;

/**
 * ※ 주의: Vuex 사용시 컴포넌트 안에서 데이터를 직접 수정하지 않도록 한다.
 *        이유? 오류가 발생할 경우 원인을 찾기 어렵다.
 *        수정하는 방법? 컴포넌트에서 데이터를 소환 후 수정해야 한다.
 * */