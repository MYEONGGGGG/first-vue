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

// mount
app.mount('#app');
