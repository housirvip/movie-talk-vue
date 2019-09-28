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
  static login (form) {
    return axios.post('auth/login', form)
      .then(res => {
        loginCommit(res.result)
        return Promise.resolve(res.result)
      }).catch(error => {
        return Promise.reject(error)
      })
  }

  static register (form) {
    return axios.post('auth/signup', form)
      .then(res => {
        if (res.result) {
          loginCommit(res.result)
        }
        return Promise.resolve(res.result)
      }).catch(error => {
        return Promise.reject(error)
      })
  }

  static logout () {
    store.commit(types.STORE_LOGOUT)
    // return axios.get('user/logout')
    //   .then(res => {
    //     return Promise.resolve(res.result)
    //   }).catch(error => {
    //     return Promise.reject(error)
    //   })
  }

  static changePass (form) {
    return axios.post('auth/change_pass', form)
      .then(res => {
        res.result === 'success' && store.commit(types.STORE_LOGOUT)
        return Promise.resolve(res.result)
      }).catch(error => {
        return Promise.reject(error)
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
    }).catch(error => {
      return Promise.reject(error)
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
  static detail () {
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
            level: u.level || 0,
            avatar: i.avatar,
            sex: i.sex,
            job: i.job,
            state: i.state,
            birthday: i.birthday
          }
          store.commit(types.STORE_USER, user)
        }
      }).catch(error => {
        return Promise.reject(error)
      })
  }

  static friendDetail (id) {
    return axios.get('user/friend', { params: { id: id } })
      .then(res => {
        return Promise.resolve(res.result)
      }).catch(error => {
        return Promise.reject(error)
      })
  }

  static infoChange (info) {
    return axios.put('user/info', info)
      .then(res => {
        return Promise.resolve(res.result)
      }).catch(error => {
        return Promise.reject(error)
      })
  }

  static passChange (form) {
    return axios.put('user/password', form)
      .then(res => {
        return Promise.resolve(res.result)
      }).catch(error => {
        return Promise.reject(error)
      })
  }
}

export class SecurityService {
  static sms (phone) {
    return axios.get(`noauth/user/sms/${phone}`).then(res => {
      return Promise.resolve(true)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static qiniuToken () {
    return axios.get('token/qiniu')
      .then(res => {
        return Promise.resolve(res.result)
      }).catch(error => {
        return Promise.reject(error)
      })
  }
}

export class MovieService {
  static getNowPlaying () {
    return axios.get('/movie/now_playing').then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static getDetails (movieId) {
    return axios.get(`/movie/details/${movieId}`).then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static getCredits (movieId) {
    return axios.get(`/movie/credits/${movieId}`).then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static getDiscover (discoverFilter, page) {
    return axios.get(`/movie/discover`, {
      params: {
        year: discoverFilter.year || 2019,
        with_genres: discoverFilter.genre || '10749',
        sort_by: discoverFilter.sort || 'popularity.desc',
        page: page || 1
      } }).then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static getSearch (searchCriteria, page) {
    return axios.get(`/movie/search`, {
      params: {
        query: searchCriteria || '',
        page: page || 1
      } }).then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }
}
