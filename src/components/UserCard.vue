<template>
  <div @click="toFriend" class="div-card">
    <el-card shadow="hover" class="user-card" :body-style="{ padding: '0px' }">
      <el-image :src="avatar"/>
      <div>
        <span class="username">{{username}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
import { UserService } from '../services/api'

export default {
  name: 'UserCard',
  props: {
    username: String,
    uid: Number
  },
  data () {
    return {
      avatar: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
    }
  },
  mounted () {
    UserService.friendDetail(this.uid).then(res => {
      let info = res.userInfo
      if (info.avatar) {
        this.avatar = 'http://35.193.61.114/avatar/' + info.avatar
      }
    })
  },
  methods: {
    toFriend () {
      this.$router.push({ path: '/review/friend', query: { uid: this.uid.toString() } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .username {
    text-align: center;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    & {
      padding-left: 5px;
      padding-right: 5px;
      padding-top: 0;
    }
  }

  .user-card {
    text-align: center;
  }

  .div-card {
    padding-bottom: 20px;
  }
</style>
