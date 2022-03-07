import axios from "axios";

// 1. HTTP Request & Response 와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수 정리
function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`)
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
    return axios.get(`${config.baseUrl}ask/1.json`)

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
    return axios.get(`${config.baseUrl}jobs/1.json`)

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

function fetchShowList() {
    return axios.get(`${config.baseUrl}show/1.json`)
}

function fetchNewestList() {
    return axios.get(`${config.baseUrl}newest/1.json`)
}

function fetchItemList() {
    return axios.get(`${config.baseUrl}item/16493489.json`)

    /**
     comments_count: 232
     content: ""
     domain: "developers.google.com"
     id: 16493489
     points: 1926
     time: 1519922390
     time_ago: "4 years ago"
     title: "Machine Learning Crash Course"
     type: "link"
     url: "https://developers.google.com/machine-learning/crash-course/"
     user: "matant"
     */
}

function fetchUserInfo() {
    // return axios.get(`${config.baseUrl}user/davideast.json`)
    /**
     created: "8 years ago"
     created_time: 1400006274
     id: "davideast"
     karma: 23
     */

    return axios.get('https://jsonplaceholder.typicode.com/users')
}

export {
    fetchNewsList, fetchAskList, fetchJobsList, fetchShowList,
    fetchNewestList, fetchItemList, fetchUserInfo
}