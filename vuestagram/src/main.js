import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
import mitt from "mitt";
import store from "@/store/store";

// 설치했던 fontawesome-svg-core와 vue-fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// 아이콘 목록 불러오기
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './registerServiceWorker'



// Vue instance 생성
const app = createApp(App);


// mitt 라이브러리 등록
let emitter = mitt();
app.config.globalProperties.emitter = emitter;

// axios 라이브러리 등록
app.config.globalProperties.axios = axios;

// store에 있는 데이터를 전역에서 공유할 수 있도록 등록
app.use(store);

// 불러온 아이콘 목록을 라이브러리에 담는다.
library.add( fas, far, fab );
// fontawesome 아이콘을 Vue탬플릿에 사용할 수 있게 등록
app.component('font-awesome-icon', FontAwesomeIcon);

// mount
app.mount('#app');


/**
 * globalProperties : 변수 보관함
 * 전역에서 사용할 수 있다.
 * 자주 사용하는 라이브러리일 경우 등록해두고 사용한다.
 * */