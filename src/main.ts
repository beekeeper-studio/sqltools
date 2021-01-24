import Vue from 'vue'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'


import 'bootstrap'
import './assets/css/main.scss'
import hljs from 'highlight.js'
import router from './router'
Vue.config.productionTip = false
Vue.use(hljs.vuePlugin)
Vue.use(VueClipboard);

// Notes
// This is using bootstrap (getbootstrap.com) version 5 for layout and basic styling. We'll replace this later with our own styles
// Core libraries to this project:
// vue.js
// knex.js
// bootstrap
// all the sql dialects - postgres, mysql, mariadb, sqlite, sql server, redshift
// 


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
