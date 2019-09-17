<template>
  <div id="app">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      :default-active="defaultActive"
      router>
      <el-menu-item index="/">Movie Talk</el-menu-item>
      <el-menu-item index="/discover">Discover</el-menu-item>
      <el-menu-item index="/auth/login">Login</el-menu-item>
      <el-menu-item index="/auth/signup">SignUp</el-menu-item>
      <el-menu-item index="/user-center">{{user.uid>0?user.username:'User Center'}}</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
import { UserService } from './services/api'

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
</style>
