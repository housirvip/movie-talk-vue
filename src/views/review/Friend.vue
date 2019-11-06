<template>
  <div class="friend">
    <el-row style="margin-bottom: 20px" type="flex" justify="center">
      <el-col :span="2" :offset="1">
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
    <el-row v-for="(review,index) in reviewList" v-bind:key="index" class="follow-row">
      <el-col :span="3" :offset="1">
        <movie-card :movie-id="review.mid"></movie-card>
      </el-col>
      <el-col :span="12" :offset="1">
        <h2>
          {{review.title}}
        </h2>
        <p style="font-size: 16px">
          {{review.content}}
        </p>
        <el-row type="flex" class="row-bg" justify="end">
          <el-col :span="3">
            <el-badge :value="review.likeTotal" class="item">
              <el-button type="danger" size="medium" @click="doLikeOrNot(review)">{{review.isLike?'Unlike':'Like'}}</el-button>
            </el-badge>
          </el-col>
          <el-col :span="2" :offset="1">
            <el-button type="primary" size="medium" @click="toWriteReply(review.id,review.uid)">Reply</el-button>
          </el-col>
          <el-col :span="3" :offset="1">
            <el-button type="info" size="medium" @click="prepareReport(review.id)">Report</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-pagination
        @current-change="pageChange"
        @size-change="sizeChange"
        :current-page.sync="currentPage"
        :page-sizes="[5, 10, 20, 40]"
        :page-size="pageSize"
        layout="sizes, prev, pager, next, jumper"
        :total="totalCount">
      </el-pagination>
    </el-row>
    <report-dialog :show-dialog="showReport" @close="showReport=false" :review-id="reviewId"></report-dialog>
  </div>
</template>

<script>
import { ReviewService, UserService } from '../../services/api'
import UserCard from '../../components/UserCard'
import MovieCard from '../../components/MovieCard'
import ReportDialog from '../../components/ReportDialog'

export default {
  name: 'Friend',
  components: {
    UserCard,
    MovieCard,
    ReportDialog
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
      uid: this.$route.query.uid,
      followAction: '',
      currentPage: 1,
      pageSize: 5,
      totalCount: 0,
      reviewList: [],
      showReport: false,
      reviewId: 0
    }
  },
  computed: {
    user: function () {
      return this.$store.state.global.user
    }
  },
  mounted () {
    this.getFriendInfo()
    this.checkFollow()
    this.getReviewList()
  },
  methods: {
    toWriteReply (rid, uid) {
      this.$router.push({ path: '/review/reply', query: { uid: uid, rid: rid } })
    },
    prepareReport (reviewId) {
      this.reviewId = reviewId
      this.showReport = true
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
            console.log(res)
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
            console.log(res)
          }
        ).catch(() => {
        })
      }
    },
    getFriendInfo () {
      UserService.friendDetail(this.uid).then(
        result => {
          this.friend.uid = result.id
          this.friend.username = result.username
          this.friend.sex = result.userInfo.sex
          this.friend.birthday = result.userInfo.birthday
        }
      ).catch(() => {
      })
    },
    checkFollow () {
      UserService.getFollowing(1, 5, this.uid).then(
        res => {
          if (res.total >= 1) {
            this.followAction = 'unfollow'
          } else {
            this.followAction = 'follow'
          }
        }
      ).catch(() => {
      })
    },
    getReviewList () {
      ReviewService.getByUid(this.currentPage, this.pageSize, this.uid).then(
        res => {
          this.reviewList = res.result
        }
      ).catch(() => {
      })
    },
    pageChange (page) {
      this.currentPage = page
      this.getReviewList()
    },
    sizeChange (size) {
      this.pageSize = size
      this.getReviewList()
    },
    follow () {
      if (this.followAction === 'follow') {
        UserService.createFollowing(this.friend.uid).then(
          result => {
            this.followAction = 'unfollow'
          }
        )
      } else {
        UserService.deleteFollowing(this.friend.uid).then(
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
