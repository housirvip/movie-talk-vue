<template>
  <div id="app">
    <div id="header">
      <el-menu
        class="app-menu"
        mode="horizontal"
        :default-active="defaultActive"
        router>
        <el-menu-item index="/">Movie Talk</el-menu-item>
        <el-menu-item index="/movie/discover">Discover</el-menu-item>
        <el-dropdown class="dropdown">
          <div class="setting"><span>{{user.username||'User Center'}}</span><i class="el-icon-caret-bottom"></i></div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-if="user.uid"><span @click="toUserCenter()">MyCenter</span></el-dropdown-item>
            <el-dropdown-item v-if="user.uid"><span @click="refreshMe()">RefreshMe</span></el-dropdown-item>
            <el-dropdown-item v-if="user.uid"><span @click="logout()">LogOut</span></el-dropdown-item>
            <el-dropdown-item v-if="!user.uid"><span @click="toLogin()">Login</span></el-dropdown-item>
            <el-dropdown-item v-if="!user.uid"><span @click="toSignUp()">SignUp</span></el-dropdown-item>
            <el-dropdown-item divided v-if="isAdmin"><span @click="toAdminCenter()">AdminCenter</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { AccountService, UserService } from './services/api'

export default {
  name: 'App',
  data () {
    return {
      defaultActive: ''
    }
  },
  computed: {
    user: function () {
      return this.$store.state.global.user
    },
    isAdmin: function () {
      return this.$store.state.global.isAdmin
    }
  },
  methods: {
    menuIndex () {
      if (this.$route.path.startsWith('/user-center')) {
        this.defaultActive = '/user-center'
      } else if (this.$route.path.startsWith('/movie')) {
        this.defaultActive = '/movie/discover'
      } else if (this.$route.path === '/') {
        this.defaultActive = '/'
      } else {
        this.defaultActive = ''
      }
    },
    logout () {
      AccountService.logout()
      this.$message.success('Logged out, redirecting...')
      this.$router.push({ path: '/' })
    },
    refreshMe () {
      UserService.detail()
    },
    toAdminCenter () {
      this.$router.push({ path: '/admin' })
    },
    toUserCenter () {
      this.$router.push({ path: '/user-center' })
    },
    toLogin () {
      this.$router.push({ path: '/auth/login' })
    },
    toSignUp () {
      this.$router.push({ path: '/auth/signup' })
    }
  },
  mounted: function () {
    // get user detail from backend
    if (this.user.uid) {
      this.refreshMe()
    }
  },
  updated () {
    // refresh the active index
    this.menuIndex()
  }
}
</script>

<style lang="scss">
  #app {
    /*font-family: 'Avenir', Helvetica, Menlo, sans-serif;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  #header{
    text-align: right;
    .dropdown {
      /*position: fixed;*/
      right: 20px;
      top: 20px;
      font-size: 15px;
      .setting {
        /*cursor: pointer;*/
        .el-icon-setting:first-child {
          font-size: 120px;
          vertical-align: middle;
        }
      }
    }
  }
  .app-menu{
    font-size: 15px;
  }
</style>
