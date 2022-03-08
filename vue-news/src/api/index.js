import axios from "axios";

// 1. HTTP Request & Response 와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수 정리
function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`);
    // return axios.get(config.baseUrl + url);

    /**
     comments_count: 28
     domain: "i2nk.co"
     id: 30526065
     points: 179
     time: 1646219759
     time_ago: "3 hours ago"
     title: "EEG Cat Ears"
     type: "link"
     url: "https://i2nk.co/mindwave-cat-ears"
     user: "searchableguy"
     * */
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`);

    /**
     comments_count: 46
     id: 30525225
     points: 54
     time: 1646210589
     time_ago: "6 hours ago"
     title: "Ask HN: Ads with small budget for personal project?"
     type: "ask"
     url: "item?id=30525225"
     user: "kioleanu"
     * */
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);

    /**
     comments_count: 0
     domain: "grnh.se"
     id: 30526363
     points: null
     time: 1646222424
     time_ago: "3 hours ago"
     title: "CareRev (YC S16) Is Hiring Salesforce Engineers (Remote USA)"
     type: "job"
     url: "https://grnh.se/447d72ff3us"
     user: null
     * */
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}


export {
    fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo
}