// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './index'
import VueRouter from 'vue-router'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import Home from './pages/home'
import Hour from './pages/hour'
import Day from './pages/day'
import Charge from './pages/charge'
import About from './pages/about'
import Partner from './pages/partner'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component: Home
    },
    {
      path:'/home',
      component:Home,
    },
    {
      path:'/hour',
      component: Hour
    },
    {
      path:'/day',
      component: Day
    },
    {
      path:'/charge',
      component: Charge
    },
    {
      path:'/about',
      component: About
    },
    {
      path:'/partner',
      component: Partner
    }

  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Index/>',
  components: { Index }
})
