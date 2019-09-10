import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/authorization',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Authorization.vue'),
      children: [
        {
          path: '/',
          redirect: 'login'
        },
        {
          path: 'login',
          name: 'Login',
          component: () => import('./views/authorization/Login.vue')
        },
        {
          path: 'signup',
          name: 'SignUp',
          component: () => import('./views/authorization/SignUp.vue')
        }
      ]
    },
    {
      path: '/user-center',
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
          name: 'Reviews',
          component: () => import('./views/user-center/Reviews.vue')
        }
      ]
    },
    {
      path: '/discover',
      name: 'Discover',
      component: () => import('./views/Discover.vue')
    },
    {
      path: '/movie',
      name: 'Movie',
      component: () => import('./views/Movie.vue')
    },
    {
      path: '/writereview',
      name: 'WriteReview',
      component: () => import('./views/WriteReview.vue')
    },
    {
      path: '/writereply',
      name: 'WriteReply',
      component: () => import('./views/WriteReply.vue')
    }
  ]
})
