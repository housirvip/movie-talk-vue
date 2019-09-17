<template>
  <div class="dashboard">
    hello {{user.username}}, this is Dashboard page
    <el-button type="danger" @click="logout">Logout?</el-button>
  </div>
</template>

<script>
import { AccountService } from '../../services/api'

export default {
  name: 'Dashboard',
  computed: {
    user: function () {
      return this.$store.state.global.user
    }
  },
  methods: {
    logout () {
      AccountService.logout()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
