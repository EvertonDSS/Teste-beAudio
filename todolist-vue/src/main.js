import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  
import { createBootstrap } from 'bootstrap-vue-next';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css";

createApp(App).use(router).use(createBootstrap()).mount('#app');
