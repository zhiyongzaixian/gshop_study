import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import './veevalidate'
import * as API from './api'
import {Button} from 'mint-ui'
// import 'mint-ui/lib/style.css'
import './mock/mockServer'


import router from './router'
import store from './store'
import GshopHeader from './components/GshopHeader/GshopHeader'
import CartControl from './components/CartControl/CartControl'
import i18n from './i18n'
Vue.prototype.$API = API
// Vue全局注册组件的语法： Vue.component(组件名，组件)
Vue.component('GshopHeader', GshopHeader)
Vue.component('CartControl', CartControl)
Vue.component(Button.name, Button)
Vue.config.productionTip = false
// 组件内部的实例对象的原型对象 === new Vue()
const vm = new Vue({
  el: '#app',
  components: {App},
  template: '<App />',

  // 安装路由器
  router,

  i18n,

  // 状态集中管理对象store
  store
})

// new Vue({
//   el: '#app',
//   render: h => h(App),
// }).$mount('#app')

// new Vue({
//   el: '#app',
//   render: h => h(App),
// })
