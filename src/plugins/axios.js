'use strict'

import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'
import store from '../services/store'
import * as types from '../services/types'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// when refresh the page, load token from localStorage
let jwt = window.localStorage.getItem('jwt')
jwt && store.commit(types.STORE_LOGIN, jwt)

let user = window.localStorage.getItem('user')
user && store.commit(types.STORE_USER, JSON.parse(user))

let config = {
  baseURL: process.env.VUE_APP_API || '',
  timeout: 10 * 1000 // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (store.state.global.jwt) {
      config.headers.Authorization = `Bearer ${store.state.global.jwt}`
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    if (response.data && response.data.code) {
      Message({
        message: `Error: ${response.data.message}`,
        type: 'error',
        duration: 2 * 1000
      })
      return Promise.reject(response.data.message)
    }
    return response.data
  },
  function (error) {
    // Do something with response error
    if (error.response) {
      if (error.response.status === 401) {
        store.commit(types.STORE_LOGOUT)
      }
      let message = error.response.message || error.response.data.message
      Message({
        message: `Error: ${message}`,
        type: 'error',
        duration: 2 * 1000
      })
    }
    return Promise.reject(error)
  }
)

Plugin.install = function (Vue, options) {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return _axios
      }
    },
    $axios: {
      get () {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
