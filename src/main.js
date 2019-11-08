import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'

Vue.config.productionTip = false

// new Vue({
//   el: '#app',
//   render: h => h(App),
// }).$mount('#app')

// new Vue({
//   el: '#app',
//   render: h => h(App),
// })

new Vue({
  el: '#app',
  components: {App},
  template: '<App />'
})

