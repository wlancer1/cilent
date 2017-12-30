import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
Vue.use(VueRouter)

//var App =Vue.extend({})

const router = new VueRouter({
  routes // short for `routes: routes`

})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router, 
   store

}).$mount('#app')

