import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

const anonymous = {
  uid: 0,
  level: 0,
  username: '',
  email: '',
  phone: '',
  avatar: '',
  sex: '',
  job: '',
  state: '',
  birthday: ''
}

Vue.use(Vuex)

const global = {
  // namespaced: true,
  state: {
    user: anonymous,
    jwt: null,
    exp: null // 单位是ms
  },
  mutations: {
    [types.STORE_LOGIN]: (state, data) => {
      if (localStorage.jwt !== data) {
        localStorage.setItem('jwt', data)
      }
      state.jwt = data
    },
    [types.STORE_LOGOUT]: (state) => {
      localStorage.removeItem('jwt')
      localStorage.removeItem('exp')
      localStorage.removeItem('user')
      state.jwt = null
      state.exp = null
      state.user = anonymous
    },
    [types.STORE_EXP]: (state, data) => {
      data = parseInt(data)
      if (new RegExp(`^[0-9]{10}$`).test(data.toString())) {
        data *= 1000
      }
      localStorage.setItem('exp', data)
      state.exp = data
    },
    [types.STORE_USER]: (state, data) => {
      localStorage.setItem('user', JSON.stringify(data))
      state.user = data
    }
  }
}

export default new Vuex.Store({
  strict: true,
  modules: {
    global
  }
})
