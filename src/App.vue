<template>
  <div id="app">
    <div class="header">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        :default-active="defaultActive"
        router>
        <el-menu-item index="/">Movie Talk</el-menu-item>
        <el-menu-item index="/discover">Discover</el-menu-item>
      </el-menu>
      <el-dropdown class="dropdown">
        <div class="setting"><span>{{user.username||'User Center'}}</span><i class="el-icon-caret-bottom"></i></div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-if="user.uid"><span @click="refreshMe()">RefreshMe</span></el-dropdown-item>
<!--          <el-dropdown-item><span @click="onModifyPassword()">修改密码</span></el-dropdown-item>-->
          <el-dropdown-item v-if="user.uid"><span @click="logout()">LogOut</span></el-dropdown-item>
          <el-dropdown-item v-if="!user.uid"><span @click="login()">Login</span></el-dropdown-item>
          <el-dropdown-item v-if="!user.uid"><span @click="signup()">SignUp</span></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
      defaultActive: '/'
    }
  },
  computed: {
    user: function () {
      return this.$store.state.global.user
    }
  },
  methods: {
    menuIndex () {
      if (this.$route.path.startsWith('/user-center')) {
        this.defaultActive = '/user-center'
      } else if (this.$route.path.startsWith('/discover')) {
        this.defaultActive = '/discover'
      } else {
        this.defaultActive = '/'
      }
    },
    logout () {
      AccountService.logout()
    },
    refreshMe () {
    },
    login () {
      this.$router.push({ path: '/auth/login' })
    },
    signup () {
      this.$router.push({ path: '/auth/signup' })
    }
  },
  mounted: function () {
    // get user detail from backend
    if (this.user.uid > 0) {
      UserService.detail()
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
.header{
  text-align: right;
  .dropdown {
    position: fixed;
    right: 30px;
    top: 30px;
    .setting {
      cursor: pointer;
      .el-icon-setting:first-child {
        font-size: 120px;
        vertical-align: middle;
      }
    }
  }
}
</style>
