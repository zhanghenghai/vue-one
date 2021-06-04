import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'
import 'imagehover.css/css/imagehover.css'
import request from "@/utils/request";




const app =createApp(App)
app.config .globalProperties.$http = request
app.use(router).use(ElementPlus).use(store).mount('#app')
