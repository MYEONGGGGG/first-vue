/**
 * vue cli 3.x 버전 부터는
 *  - import vue, router
 *  - vue 인스턴스 생성
 *
 * 아래와 같은 방법을 이용해야 함.
 * */
import { createApp } from 'vue';
import { store } from './store';
import { router } from './routes';

import App from './App.vue';
import axios from "axios";

// 설치했던 fontawesome-svg-core와 vue-fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// 아이콘 목록 불러오기
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


// Vue.config.productionTip = false;

// 기본 생성자
// new Vue({
//     render: h => h(App),
//     router
// }).$mount('#app');


// Vue instance 생성
const app = createApp(App);

app.use(router); // 라우터 연결
app.use(store); // 스토어 연결
app.config.globalProperties.axios = axios;

// 불러온 아이콘 목록을 라이브러리에 담는다.
library.add(
    fas,
    far,
    fab
);
app.component('font-awesome-icon', FontAwesomeIcon); // fontawesome 아이콘을 Vue탬플릿에 사용할 수 있게 등록

// mount
app.mount('#app');
