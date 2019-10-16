<template>
  <div class="following-list">
    <el-row v-for="(follow,index) in followingList" v-bind:key="index" class="follow-row">
      <el-col :span="3" :offset="1">
        <movie-card :movie-id="follow.mid"></movie-card>
      </el-col>
      <el-col :span="16" :offset="1">
        <el-row style="font-size: 20px;text-align: left;">
          <el-col :span="2">
            <el-row>
              <user-card :uid="follow.uid" :username="follow.username"></user-card>
            </el-row>
          </el-col>
          <el-col :span="12" :offset="1">
            <p style="font-size: 25px">
              {{follow.title}}
            </p>
          </el-col>
        </el-row>
        <el-row>
          <p style="font-size: 16px">
            {{follow.content}}
          </p>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MovieCard from './MovieCard'
import UserCard from './UserCard'
import { ReviewService } from '../services/api'

export default {
  name: 'FollowingList',
  components: {
    UserCard,
    MovieCard
  },
  props: {
    pageNum: Number,
    pageSize: Number
  },
  data () {
    return {
      followingList: []
    }
  },
  watch: {
    pageNum: {
      // immediate: true,
      handler (val) {
        this.getFollowingList()
      }
    },
    pageSize: {
      // immediate: true,
      handler (val) {
        this.getFollowingList()
      }
    }
  },
  created () {
    this.getFollowingList()
  },
  methods: {
    getFollowingList () {
      ReviewService.getByFollowing(this.pageNum, this.pageSize).then(
        res => {
          this.followingList = res.result
        }
      ).catch(() => {})
    }
  }
}
</script>

<style scoped>
  .following-list{
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .follow-row{
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
