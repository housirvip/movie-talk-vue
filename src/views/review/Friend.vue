<template>
  <div class="friend">
    <el-row style="margin-bottom: 20px" type="flex" justify="center">
      <el-col :span="4" :offset="1">
        <el-image :src="avatar"/>
      </el-col>
      <el-col :span="14" :offset="0">
        <el-row :gutter="20">
          <el-col :span="4" style="text-align: right">
            Username:
          </el-col>
          <el-col :span="4">
            {{friend.username}}
          </el-col>
        </el-row>
        <p></p>
        <el-row :gutter="20">
          <el-col :span="4" style="text-align: right">
            Sex:
          </el-col>
          <el-col :span="4">
            {{friend.sex}}
          </el-col>
        </el-row>
        <p></p>
        <el-row :gutter="20">
          <el-col :span="4" style="text-align: right">
            Birthday:
          </el-col>
          <el-col :span="4">
            {{friend.birthday}}
          </el-col>
        </el-row>
        <p></p>
        <el-row>
          <el-col :span="4" style="text-align: right">
            <el-button type="primary">follow</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { UserService } from '../../services/api'

export default {
  name: 'Friend',
  data () {
    return {
      avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      friend: {
        uid: '',
        username: '',
        sex: '',
        birthday: ''
      }
    }
  },
  computed: {
    // eslint-disable-next-line vue/no-dupe-keys
    user: function () {
      return this.$store.state.global.user
    }
  },
  mounted () {
    UserService.friendDetail(1).then(
      result => {
        this.friend.uid = result.id
        this.friend.username = result.username
        this.friend.sex = result.userInfo.sex
        this.friend.birthday = result.userInfo.birthday
      }
    ).catch(() => {})
  }
}
</script>

<style scoped>

</style>
