import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Paginate from "vuejs-paginate-next";
import naive from 'naive-ui';

createApp(App).use(Paginate).use(naive).mount('#app')
