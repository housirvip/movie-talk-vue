<template>
  <div class="admin">
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="defaultActive"
          router>
          <el-menu-item index="dashboard">
            <i class="el-icon-menu"></i>
            <span slot="title">Dashboard</span>
          </el-menu-item>
          <el-menu-item index="users">
            <i class="el-icon-menu"></i>
            <span slot="title">Users</span>
          </el-menu-item>
          <el-menu-item index="reviews">
            <i class="el-icon-menu"></i>
            <span slot="title">Reviews</span>
          </el-menu-item>
          <el-menu-item index="replies">
            <i class="el-icon-menu"></i>
            <span slot="title">Replies</span>
          </el-menu-item>
          <el-menu-item index="reports">
            <i class="el-icon-menu"></i>
            <span slot="title">Reports</span>
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
  name: 'Admin',
  data () {
    return {
      defaultActive: ''
    }
  },
  methods: {
    menuIndex () {
      if (this.$route.path.endsWith('/dashboard')) {
        this.defaultActive = 'dashboard'
      } else if (this.$route.path.endsWith('/users')) {
        this.defaultActive = 'users'
      } else if (this.$route.path.endsWith('/reviews')) {
        this.defaultActive = 'reviews'
      } else if (this.$route.path.endsWith('/replies')) {
        this.defaultActive = 'replies'
      } else if (this.$route.path.endsWith('/reports')) {
        this.defaultActive = 'reports'
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
