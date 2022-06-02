import { createApp } from 'vue';
import App from './App.vue';
import 'amfe-flexible/index.js';
import router from '@/routers';
import store from '@/store';
import './assets/icons/iconfont.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
