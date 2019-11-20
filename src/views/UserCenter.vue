<template>
  <div class="user-center">
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="defaultActive"
          router>
          <el-menu-item index="dashboard">
            <i class="el-icon-menu"></i>
            <span slot="title">Dashboard</span>
          </el-menu-item>
          <el-menu-item index="reviews">
            <i class="el-icon-menu"></i>
            <span slot="title">Reviews</span>
          </el-menu-item>
          <el-menu-item index="collects">
            <i class="el-icon-menu"></i>
            <span slot="title">Collects</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'UserCenter',
  data () {
    return {
      defaultActive: ''
    }
  },
  methods: {
    menuIndex () {
      if (this.$route.path.endsWith('/dashboard')) {
        this.defaultActive = 'dashboard'
      } else if (this.$route.path.endsWith('/reviews')) {
        this.defaultActive = 'reviews'
      } else if (this.$route.path.endsWith('/collects')) {
        this.defaultActive = 'collects'
      } else {
        this.defaultActive = 'dashboard'
      }
    }
  },
  mounted () {
    this.menuIndex()
  },
  updated () {
    this.menuIndex()
  }
}
</script>
