import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//引入路由器
import router from './router'

// 引入mitter
import emitter from './utils/emitter'

const app = createApp(App)

// 使用路由器
app.use(router)


app.mount('#app')