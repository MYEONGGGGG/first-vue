import { createApp } from 'vue'
import App from './App.vue'
import ChartPlugin from "@/plugins/ChartPlugin";

createApp(App)
    .use(ChartPlugin) // 차트 플러그인 등록
    .mount('#app');