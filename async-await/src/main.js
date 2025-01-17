import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";

// createApp(App).mount('#app');

// Vue instance 생성
const app = createApp(App);
app.config.globalProperties.axios = axios; // axios 등록

app.mount('#app');