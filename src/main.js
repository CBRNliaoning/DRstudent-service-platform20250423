import '../src/styles/element/common.scss'
 
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { lazyPlugin } from '@/directives'
import VueVideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css'; // 引入video.js的CSS
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { componentPlugin } from '@/components'


const app = createApp(App)
const pinia = createPinia()


// 插件使用应该按照一定的顺序，通常是先使用状态管理（如Pinia），然后是路由，最后是UI库
pinia.use(piniaPluginPersistedstate)
app.use(pinia) // 状态管理
app.use(router) // 路由
app.use(ElementPlus, { // UI库
  locale: zhCn,
})
app.use(componentPlugin)
app.use(lazyPlugin)
app.use(VueVideoPlayer); // 确保在mount之前注册VueVideoPlayer

// 所有插件注册完成后，再进行挂载
app.mount('#app')
