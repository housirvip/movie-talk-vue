'use strict'

import Vue from 'vue'
import store from './store'
import * as types from './types'

export class Urls {
  // captcha的地址不能写死 http 或者 https
  static captcha = '//captcha.luosimao.com/static/dist/api.js';
}

let axios = Vue.axios

export class AccountService {
  static test () {
    return axios.get('http://www.baidu.com')
      .then(res => {
        return Promise.resolve(res.result)
      }).catch(() => {
      })
  }

  static login (auth) {
    return axios.post('auth/login', auth)
      .then(res => {
        loginCommit(res.result)
        return Promise.resolve(res.result)
      }).catch(() => {
      })
  }

  static register (auth) {
    return axios.post('auth/register', auth)
      .then(res => {
        if (res.result) {
          loginCommit(res.result)
        }
        return Promise.resolve(res.result)
      }).catch(() => {
      })
  }

  static logout () {
    store.commit(types.STORE_LOGOUT)
    return axios.get('auth/logout')
      .then(res => {
        store.commit(types.STORE_LOGOUT)
        return Promise.resolve(res.result)
      }).catch(() => {
      })
  }

  static changePass (auth) {
    return axios.post('auth/change_pass', auth)
      .then(res => {
        console.log(res)
        res.result === 'success' && store.commit(types.STORE_LOGOUT)
        return Promise.resolve(res.result)
      }).catch(() => {
      })
  }

  static refresh () {
    if (store.state.global.exp - new Date().getTime() > 3 * 3600 * 1000) {
      return
    }
    return axios.get('auth/refresh').then(res => {
      if (res.result) {
        loginCommit(res.result)
      }
    }).catch(() => {
    })
  }
}

function loginCommit (jwt) {
  if (jwt) {
    store.commit(types.STORE_LOGIN, jwt)
  }
  // store.commit(types.EXP, auth.exp);
}

export class UserService {
  static me () {
    return axios.get('user/detail')
      .then(res => {
        if (res.result) {
          let u = res.result
          let i = res.result.userInfo
          let user = {
            uid: u.id,
            username: u.username,
            email: u.email,
            phone: u.phone,
            nickname: i.nickname,
            address: i.address,
            avatar: i.avatar === 'unknown' ? null : i.avatar,
            gender: i.gender,
            state: i.state,
            birthday: i.birthday > 0 ? i.birthday : null,
            level: u.level ? u.level : 0
          }
          store.commit(types.STORE_USER, user)
        }
      }).catch(() => {
      })
  }

  static infoChange (info) {
    return axios.put('user/info', info)
      .then(res => {
        return Promise.resolve(res.result)
      }).catch(() => {
      })
  }
}

export class SecurityService {
  static sms (phone) {
    return axios.get(`noauth/user/sms/${phone}`).then(res => {
      return Promise.resolve(true)
    }).catch(() => {
    })
  }

  static qiniuToken () {
    return axios.get('token/qiniu')
      .then(res => {
        return Promise.resolve(res.result)
      }).catch(() => {
      })
  }
}
