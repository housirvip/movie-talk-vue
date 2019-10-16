<template>
  <div class="friend">
    <el-row style="margin-bottom: 20px" type="flex" justify="center">
      <el-col :span="3" :offset="1">
        <user-card :uid="friend.uid" :username="friend.username"></user-card>
      </el-col>
      <el-col :span="14" :offset="0">
        <el-row :gutter="20">
          <el-col :span="4" style="text-align: right">
            Username:
          </el-col>
          <el-col :span="8">
            {{friend.username}}
          </el-col>
        </el-row>
        <p></p>
        <el-row :gutter="20">
          <el-col :span="4" style="text-align: right">
            Sex:
          </el-col>
          <el-col :span="8">
            {{friend.sex}}
          </el-col>
        </el-row>
        <p></p>
        <el-row :gutter="20">
          <el-col :span="4" style="text-align: right">
            Birthday:
          </el-col>
          <el-col :span="8">
            {{friend.birthday}}
          </el-col>
        </el-row>
        <p></p>
        <el-row>
          <el-col :span="4" style="text-align: right">
            <el-button :type="followAction==='follow'?'primary':'danger'" @click="follow">{{followAction}}</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <review-history></review-history>
    </el-row>
  </div>
</template>

<script>
import { ReviewService, UserService } from '../../services/api'
import ReviewHistory from '../../components/ReviewHistory'
import UserCard from '../../components/UserCard'

export default {
  name: 'Friend',
  components: {
    UserCard,
    ReviewHistory
  },
  data () {
    return {
      avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      friend: {
        uid: 3,
        username: '',
        sex: '',
        birthday: ''
      },
      followAction: ''
    }
  },
  computed: {
    // eslint-disable-next-line vue/no-dupe-keys
    user: function () {
      return this.$store.state.global.user
    }
  },
  mounted () {
    UserService.friendDetail(this.friend.uid).then(
      result => {
        this.friend.uid = result.id
        this.friend.username = result.username
        this.friend.sex = result.userInfo.sex
        this.friend.birthday = result.userInfo.birthday
      }
    ).catch(() => {})

    ReviewService.getFollowing(1, 5, this.friend.uid).then(
      res => {
        if (res.total >= 1) {
          this.followAction = 'unfollow'
        } else {
          this.followAction = 'follow'
        }
      }
    )
  },
  methods: {
    follow () {
      if (this.followAction === 'follow') {
        ReviewService.createFollowing(this.friend.uid).then(
          result => {
            this.followAction = 'unfollow'
          }
        )
      } else {
        ReviewService.deleteFollowing(this.friend.uid).then(
          result => {
            this.followAction = 'follow'
          }
        )
      }
    }
  }
}
</script>

<style scoped>

</style>
