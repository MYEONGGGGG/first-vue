export default {
    /**
     * response 데이터를 담기위해 mutations 을 통해 state에 데이터를 담는다.
     * */

    // *** HOC 로 구현했기때문에 더이상 필요 없음
    // SET_NEWS_LIST(state, newsData) {
    //     state.newsList = newsData; // actions 에서 넘겨준 데이터를 state에 담는다.
    // },
    //
    // SET_ASK_LIST(state, askData) {
    //     state.askList = askData;
    // },
    //
    // SET_JOBS(state, jobData) {
    //     state.jobs = jobData;
    // },
    // *** HOC 로 구현했기때문에 더이상 필요 없음

    SET_USER(state, userData) {
        state.user = userData;
    },

    SET_ITEM(state, itemData) {
        state.item = itemData;
    },

    // 공통 리스트 데이터 설정 함수
    SET_LIST(state, listData) {
        state.list = listData;
    }
}