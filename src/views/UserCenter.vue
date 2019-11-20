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
          <el-menu-item index="replies">
            <i class="el-icon-menu"></i>
            <span slot="title">Replies</span>
          </el-menu-item>
          <el-menu-item index="collects">
            <i class="el-icon-menu"></i>
            <span slot="title">Collects</span>
          </el-menu-item>
          <el-menu-item index="followings">
            <i class="el-icon-menu"></i>
            <span slot="title">Followings</span>
          </el-menu-item>
          <el-menu-item index="followers">
            <i class="el-icon-menu"></i>
            <span slot="title">Followers</span>
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
      } else if (this.$route.path.endsWith('/replies')) {
        this.defaultActive = 'replies'
      } else if (this.$route.path.endsWith('/followings')) {
        this.defaultActive = 'followings'
      } else if (this.$route.path.endsWith('/followers')) {
        this.defaultActive = 'followers'
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
