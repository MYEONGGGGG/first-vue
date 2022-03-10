import { fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo, fetchItemDtl } from '../api/index.js';

export default {
    // actions 으로 api 데이터 호출
    // 일반적인 방법
    // FETCH_NEWS_LIST(context) {
    //     fetchNewsList()
    //         .then(response => {
    //             console.log(response);
    //
    //             // mutations 호출하여 데이터와 제어를 넘긴다.
    //             context.commit('SET_NEWS_LIST', response.data);
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         });
    // },

    // ES6 디스트럭처링 방법
    FETCH_NEWS_LIST({ commit }) {
        fetchNewsList()
            .then(({ data }) => {
                commit('SET_NEWS_LIST', data);
            })
            .catch(error => {
                console.log(error);
            });
    },

    FETCH_ASK_LIST({ commit }) {
        fetchAskList()
            .then(({ data }) => {
                commit('SET_ASK_LIST', data);
            })
            .catch(error => {
                console.log(error);
            });
    },

    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({ data }) => {
                commit('SET_JOBS', data);
            })
            .catch(error => {
                console.log(error);
            });
    },

    FETCH_USER({ commit }, name) { //name: UserView.vue 에서 전달받은 인자값
        fetchUserInfo(name) // 인자값 기준으로 api 호출
            .then(({ data }) => { // 받은 결과값이 성공이면 mutations.js 로 넘김
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            });
    },

    FETCH_ITEM({commit}, id) {
        fetchItemDtl(id)
            .then(({data}) => {
                commit('SET_ITEM', data);
            })
            .catch(error => {
                console.log(error);
            });
    }

}