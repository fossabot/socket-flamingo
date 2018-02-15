import Vue from 'vue'
import Router from 'vue-router'
import VueSocketio from 'vue-socket.io'
import Flamingo from '@/components/flamingo'

Vue.use(Router)
Vue.use(VueSocketio, 'http://localhost:8081')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Flamingo',
      component: Flamingo
    }
  ]
})
