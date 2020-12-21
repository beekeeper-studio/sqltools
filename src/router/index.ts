import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import PostgresCreateTable from '../views/PostgresCreateTable.vue'
Vue.use(VueRouter)


// TODO (nicoll): learn about router.vuejs.org - this is the 'router' component for vue.
const routes =  [
  { path: '/', component: Home},
  { path: '/postgres/create-table', component: PostgresCreateTable, name: 'psql' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
