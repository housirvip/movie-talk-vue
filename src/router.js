import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './services/store'
import { Message } from 'element-ui'
import * as types from './services/types'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // set scroll position to 0,0 for every router jump, same as go to top
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/auth',
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
      path: '/admin',
      component: () => import('./views/Admin.vue'),
      beforeEnter: (to, from, next) => {
        if (store.state.global.isAdmin) {
          next()
        } else {
          Message({
            message: `Error: NO ACCESS`,
            type: 'error',
            duration: 2 * 1000
          })
        }
      },
      children: [
        {
          path: '/',
          redirect: 'dashboard'
        },
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('./views/admin/Dashboard.vue')
        },
        {
          path: 'users',
          name: 'Users',
          component: () => import('./views/admin/Users.vue')
        },
        {
          path: 'reviews',
          name: 'Reviews',
          component: () => import('./views/admin/Reviews.vue')
        },
        {
          path: 'replies',
          name: 'Replies',
          component: () => import('./views/admin/Replies.vue')
        },
        {
          path: 'reports',
          name: 'Reports',
          component: () => import('./views/admin/Reports.vue')
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
        },
        {
          path: 'replies',
          name: 'Replies',
          component: () => import('./views/user-center/Replies.vue')
        },
        {
          path: 'collects',
          name: 'Collects',
          component: () => import('./views/user-center/Collects.vue')
        },
        {
          path: 'followings',
          name: 'Followings',
          component: () => import('./views/user-center/Followings.vue')
        },
        {
          path: 'followers',
          name: 'Followers',
          component: () => import('./views/user-center/Followers.vue')
        }
      ]
    },
    {
      path: '/movie',
      component: () => import('./views/Movie.vue'),
      children: [
        {
          path: '/',
          redirect: 'discover'
        },
        {
          path: 'detail',
          name: 'Detail',
          component: () => import('./views/movie/Detail.vue')
        },
        {
          path: 'discover',
          name: 'Discover',
          component: () => import('./views/movie/Discover.vue')
        },
        {
          path: 'search',
          name: 'Search',
          component: () => import('./views/movie/Search.vue')
        }
      ]
    },
    {
      path: '/review',
      component: () => import('./views/Review.vue'),
      children: [
        {
          path: '/',
          redirect: 'discover'
        },
        {
          path: 'reply',
          name: 'Reply',
          component: () => import('./views/review/Reply.vue')
        },
        {
          path: 'write',
          name: 'Write',
          component: () => import('./views/review/Write.vue')
        },
        {
          path: 'friend',
          name: 'friend',
          component: () => import('./views/review/Friend.vue')
        },
        {
          path: 'following',
          name: 'following',
          component: () => import('./views/review/Following.vue')
        },
        {
          path: 'update',
          name: 'update',
          component: () => import('./views/review/Update.vue')
        }
      ]
    }
  ]
})

if (window.localStorage.getItem('isAdmin')) {
  store.commit(types.STORE_ADMIN, true)
}
