import { fetchAskList, fetchJobsList, fetchNewsList } from '../api/index.js';

export default {
    // actions 으로 api 데이터 호출
    // 일반적인 방법
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

    // ES6 디스트럭처링
    FETCH_ASK_LIST({ commit }) {
        fetchAskList()
            .then(({ data }) => {
                commit('SET_ASK_LIST', data);
            })
            .catch(error => {
                console.log(error);
            });
    },

    // ES6 디스트럭처링
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({ data }) => {
                commit('SET_JOBS', data);
            })
            .catch(error => {
                console.log(error);
            });
    }
}