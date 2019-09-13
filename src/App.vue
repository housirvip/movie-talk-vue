<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      :default-active="defaultActive"
      router>
      <el-menu-item index="/">Movie Talk</el-menu-item>
      <el-menu-item index="/user-center">User Center</el-menu-item>
      <el-menu-item index="/discover">Discover</el-menu-item>
      <el-menu-item index="/movie">Movie</el-menu-item>
      <el-menu-item index="/authorization/login">Login</el-menu-item>
      <el-menu-item index="/authorization/signup">SignUp</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      defaultActive: '/'
    }
  },
  methods: {
    menuIndex () {
      if (this.$route.path.startsWith('/user-center')) {
        this.defaultActive = '/user-center'
      } else {
        this.defaultActive = '/'
      }
    }
  },
  updated () {
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
