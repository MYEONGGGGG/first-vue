import axios from "axios";

// 1. HTTP Request & Response 와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수 정리
function fetchNewsList() {
    // return axios.get(config.baseUrl + url);
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`);
}

async function fetchJobsList() {
    try {
        const response = await axios.get(`${config.baseUrl}jobs/1.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

function fetchUserInfo(userName) {
    return axios.get(`${config.baseUrl}user/${userName}.json`);
}

function fetchItemDtl(id) {
    return axios.get(`${config.baseUrl}item/${id}.json`);
}

// 공통 리스트 API 함수
async function fetchList(pageName) {
    try {
        return axios.get(`${config.baseUrl}${pageName}/1.json`);
    } catch (error) {
        console.log(error);
    }
}


export {
    fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemDtl, fetchList
}