import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// 引入normalize.css
import 'normalize.css'

// 引入base.scss
import './style/base.scss'

// 引入iconfont.css
import './style/iconfont.css'

// 引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入echarts
import * as echarts from 'echarts'
app.config.globalProperties.$echarts = echarts

// 引入vue-srcollto
var VueScrollTo = require('vue-scrollto');

app.use(ElementPlus).use(VueScrollTo).mount('#app')



