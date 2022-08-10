import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// 引入vue-fullpage
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

// 引入normalize.css
import 'normalize.css'

// 引入base.scss
import './style/base.scss'

// 引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入echarts
import * as echarts from 'echarts'
app.config.globalProperties.$echarts = echarts



app.use(VueFullPage).use(ElementPlus).mount('#app')



