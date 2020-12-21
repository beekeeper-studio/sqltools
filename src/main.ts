import Vue from 'vue'
import App from './App.vue'

import 'bootstrap'
import './assets/css/main.scss'
import hljs from 'highlight.js'
Vue.config.productionTip = false
Vue.use(hljs.vuePlugin)

// Notes
// This is using bootstrap (getbootstrap.com) version 5 for layout and basic styling. We'll replace this later with our own styles
// Core libraries to this project:
// vue.js
// knex.js
// bootstrap
// all the sql dialects - postgres, mysql, mariadb, sqlite, sql server, redshift
// 

new Vue({
  render: h => h(App),
}).$mount('#app')
