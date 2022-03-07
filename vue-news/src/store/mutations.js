export default {
    // response 데이터를 담기위해 mutations 을 통해 state에 데이터를 담는다.
    SET_NEWS_LIST(state, newsData) {
        state.newsList = newsData; // actions 에서 넘겨준 데이터를 state에 담는다.
    },

    SET_ASK_LIST(state, askData) {
        state.askList = askData;
    },

    SET_JOBS(state, jobData) {
        state.jobs = jobData;
    }
}