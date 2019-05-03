import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home.vue'
import Another from '../pages/Another.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
      path: '/another',
      component: Another
  }
]

export default new Router({
  routes
})