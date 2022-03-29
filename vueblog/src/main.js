import App from './App.vue';
import { createApp } from 'vue';
import router from "@/routes/router";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App)
    .use(router)
    .mount('#app');
