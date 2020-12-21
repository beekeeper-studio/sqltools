import Vue from 'vue'
import App from './App.vue'

import 'bootstrap'
import './assets/css/main.scss'
import hljs from 'highlight.js'
Vue.config.productionTip = false
Vue.use(hljs.vuePlugin)


new Vue({
  render: h => h(App),
}).$mount('#app')
