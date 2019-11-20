'use strict'

import Vue from 'vue'
import store from './store'
import * as types from './types'

export class Urls {
  // captcha的地址不能写死 http 或者 https
  static captcha = '//captcha.luosimao.com/static/dist/api.js'
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
          if (u.role.indexOf('ROLE_ADMIN') > 0) {
            store.commit(types.STORE_ADMIN, true)
          }
        }
      }).catch(error => {
        return Promise.reject(error)
      })
  }

  static listAll (pageNum, pageSize, param) {
    return axios.get(`/user/all`, {
      params: {
        pageNum: pageNum || 1,
        pageSize: pageSize || 5,
        param: param
      }
    }).then(res => {
      return Promise.resolve(res)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static getById (uid) {
    return axios.get(`/user/getById`, {
      params: {
        uid: uid
      }
    }).then(res => {
      return Promise.resolve(res)
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

  static userRecord () {
    return axios.get('user/userRecord')
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

  static getFollowing (pageNum, pageSize, toId) {
    return axios.get(`/user/following`, {
      params: {
        pageNum: pageNum || 1,
        pageSize: pageSize || 5,
        param: {
          toId: toId || null
        }
      }
    }).then(res => {
      return Promise.resolve(res)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static createFollowing (toId) {
    return axios.put(`/user/following`, {}, {
      params: {
        toId: toId
      }
    }).then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static deleteFollowing (toId) {
    return axios.delete(`/user/following`, {
      params: {
        toId: toId
      }
    }).then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static updateByAdmin (user) {
    return axios.put(`/user/update`, user).then(res => {
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
  static isCollect (mid) {
    return axios.get('/movie/isCollect', {
      params: {
        mid: mid
      } }).then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static createCollect (collect) {
    return axios.post('/movie/collect', collect).then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static deleteCollect (mid) {
    return axios.delete('/movie/collect', {
      params: {
        mid: mid
      } }).then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static getCollectByUid (pageNum, pageSize) {
    return axios.get('/movie/collect/getByUid', {
      params: {
        pageNum: pageNum || 1,
        pageSize: pageSize || 5
      }
    }).then(res => {
      return Promise.resolve(res)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static getNowPlaying () {
    return axios.get('/movie/now_playing').then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static getRecommend () {
    return axios.get('/movie/recommend').then(res => {
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
      }
    }).then(res => {
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
      }
    }).then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }
}

export class ReviewService {
  static getById (rid) {
    return axios.get(`/review/getById/${rid}`).then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static getHotReview () {
    return axios.get(`/review/hot`).then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static listAll (pageNum, pageSize, param) {
    return axios.get(`/review/all`, {
      params: {
        pageNum: pageNum || 1,
        pageSize: pageSize || 5,
        param: param
      }
    }).then(res => {
      return Promise.resolve(res)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static listAllReply (pageNum, pageSize, param) {
    return axios.get(`/review/reply/all`, {
      params: {
        pageNum: pageNum || 1,
        pageSize: pageSize || 5,
        param: param
      }
    }).then(res => {
      return Promise.resolve(res)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static createReview (review) {
    return axios.post(`/review`, review).then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static getByMid (pageNum, pageSize, mid) {
    return axios.get(`/review/getByMid`, {
      params: {
        pageNum: pageNum || 1,
        pageSize: pageSize || 5,
        param: {
          mid: mid || null
        }
      }
    }).then(res => {
      return Promise.resolve(res)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static getByUid (pageNum, pageSize, uid) {
    return axios.get(`/review/getByUid`, {
      params: {
        pageNum: pageNum || 1,
        pageSize: pageSize || 5,
        param: {
          uid: uid || null
        }
      }
    }).then(res => {
      return Promise.resolve(res)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static getByFollowing (pageNum, pageSize) {
    return axios.get(`/review/getByFollowing`, {
      params: {
        pageNum: pageNum || 1,
        pageSize: pageSize || 5
      }
    }).then(res => {
      return Promise.resolve(res)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static createReply (reply) {
    return axios.post(`/review/reply`, reply).then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static getReplyByRid (pageNum, pageSize, rid) {
    return axios.get(`/review/reply/getByRid`, {
      params: {
        pageNum: pageNum || 1,
        pageSize: pageSize || 5,
        param: {
          rid: rid || null
        }
      }
    }).then(res => {
      return Promise.resolve(res)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static createReviewLike (rid) {
    return axios.post(`/review/like`, {
      rid: rid
    }).then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static deleteReviewLike (rid) {
    return axios.delete(`/review/like`, {
      params: {
        rid: rid
      }
    }).then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static deleteByAdmin (id) {
    return axios.delete(`/review/deleteByAdmin`, {
      params: {
        id: id
      }
    }).then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static deleteReplyByAdmin (id) {
    return axios.delete(`/review/reply/deleteByAdmin`, {
      params: {
        id: id
      }
    }).then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }
}

export class ReportService {
  static create (report) {
    return axios.post(`/report`, report).then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static listAll (pageNum, pageSize) {
    return axios.get(`/report/all`, {
      params: {
        pageNum: pageNum || 1,
        pageSize: pageSize || 5
      }
    }).then(res => {
      return Promise.resolve(res)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static deleteByAdmin (id) {
    return axios.delete(`/report`, {
      params: {
        id: id
      }
    }).then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }

  static updateByAdmin (report) {
    return axios.put(`/report`, report).then(res => {
      return Promise.resolve(res.result)
    }).catch(error => {
      return Promise.reject(error)
    })
  }
}
