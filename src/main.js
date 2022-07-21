import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'

// 引入注册全局组件函数
import Components from "@/components"

// 引入注册全局自定义指令函数
import Directives from "@/directives"

// 调用注册全局组件函数并把 Vue 传入
Components(Vue)

// 调用注册全局自定义指令函数并把 Vue 传入
Directives(Vue)

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
