/**
 * vue cli 3.x 버전 부터는
 *  - import vue, router
 *  - vue 인스턴스 생성
 *
 * 아래와 같은 방법을 이용해야 함.
 * */
import { createApp } from 'vue';
import { router } from './router';

import App from './App.vue';

// Vue.config.productionTip = false;

// 기본 생성자
// new Vue({
//     render: h => h(App),
//     router
// }).$mount('#app');


// Vue instance 생성
const app = createApp(App);
app.use(router); // 사용 설정 하기
app.mount('#app');
