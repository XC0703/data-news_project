import { createApp } from 'vue'
import App from './App.vue'

// 引入vue-fullpage
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

createApp(App).use(VueFullPage).mount('#app')
