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
        <el-row type="flex" class="row-bg" justify="end">
          <el-col :span="3">
            <el-badge :value="follow.likeTotal" class="item">
              <el-button type="danger" size="medium" @click="doLikeOrNot(follow)">{{follow.isLike?'Unlike':'Like'}}</el-button>
            </el-badge>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="medium" @click="toWriteReply(follow.id,follow.uid)">Reply</el-button>
          </el-col>
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
  mounted () {
    this.getFollowingList()
  },
  methods: {
    toWriteReply (rid, uid) {
      this.$router.push({ path: '/review/reply', query: { uid: uid, rid: rid } })
    },
    doLikeOrNot (review) {
      if (review.isLike) {
        ReviewService.deleteReviewLike(review.id).then(
          res => {
            if (res) {
              this.$message.success('Success')
              review.isLike = 0
              review.likeTotal--
            }
          }
        ).catch(() => {
        })
      } else {
        ReviewService.createReviewLike(review.id).then(
          res => {
            if (res) {
              this.$message.success('Success')
              review.isLike = 1
              review.likeTotal++
            }
          }
        ).catch(() => {
        })
      }
    },
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
