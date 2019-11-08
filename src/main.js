import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './services/store'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import { MyFilters } from './services/filter'

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development'

// UI library register
Vue.use(ElementUI, { locale })

// global filter register
Vue.filter('bool2icon', MyFilters.bool2icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
