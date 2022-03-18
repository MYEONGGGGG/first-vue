import {
    fetchAskList,
    fetchJobsList,
    fetchNewsList,
    fetchUserInfo,
    fetchItemDtl,
    fetchList
} from '../api/index.js';

export default {

    // promise
    // FETCH_NEWS_LIST(context) {  // 일반적인 방법
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
    // async
    async FETCH_NEWS_LIST(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS_LIST', response.data);
        return response;
    },

    // promise
    // FETCH_ASK_LIST({ commit }) {  // ES6 디스트럭처링 방법
    //     return fetchAskList()
    //         .then(({ data }) => {
    //             commit('SET_ASK_LIST', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },
    // async
    async FETCH_ASK_LIST({ commit }) {
        // 예외처리 방법1. 컴포넌트단에서 예외처리
        try {
            const response = await fetchAskList();
            commit('SET_ASK_LIST', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    // promise
    // FETCH_JOBS({ commit }) {
    //     return fetchJobsList()
    //         .then(({ data }) => {
    //             commit('SET_JOBS', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },
    // async
    async FETCH_JOBS({ commit }) {
        // 예외처리 방법2. api단에서 예외처리(@/api/index.js 참고)
        const response = await fetchJobsList();
        commit('SET_JOBS', response.data);
        return response;
    },

    // 공통 리스트 조회 이벤트
    // promise
    // FETCH_LIST({ commit }, pageName) {
    //     return fetchList(pageName)
    //         .then(({ data }) => {
    //             commit('SET_LIST', data);
    //         })
    //         .catch(error => console.log(error));
    // },
    // async
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data);
        return response;
    },


    FETCH_USER({ commit }, name) {   // name: UserView.vue 에서 전달받은 인자값
        return fetchUserInfo(name)   // 인자값 기준으로 api 호출
            .then(({ data }) => {    // 받은 결과값이 성공이면 mutations.js 로 넘김
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            });
    },

    FETCH_ITEM({commit}, id) {
        return fetchItemDtl(id)
            .then(({data}) => {
                commit('SET_ITEM', data);
            })
            .catch(error => {
                console.log(error);
            });
    },
}