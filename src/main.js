import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import '../node_modules/_element-ui@2.0.1@element-ui/lib/theme-chalk/index.css'
import MintUI from 'mint-ui'
import '../node_modules/_mint-ui@2.2.9@mint-ui/lib/style.css'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(MintUI)

import routes from './js/router.js'

new Vue({
  el: '#app',
  render: h => h(App),
  router:routes
})
