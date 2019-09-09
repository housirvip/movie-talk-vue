import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user-center',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/UserCenter.vue'),
      children: [
        {
          path: '/',
          redirect: 'dashboard'
        },
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('./views/user-center/Dashboard.vue')
        },
        {
          path: 'reviews',
          name: 'reviews',
          component: () => import('./views/user-center/Reviews.vue')
        }
      ]
    },
    {
      path: '/Discover',
      name: 'Discover',
      component: () => import('./views/Discover.vue')
    }
  ]
})
