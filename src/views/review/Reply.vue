<template>
  <div>
    <el-row>
      <el-col :span="3">
        <user-card :uid="review.uid" :username="review.username"></user-card>
      </el-col>
      <el-col :span="19" :offset="1">
        <h2>
          {{review.title}}
        </h2>
        <p>
          {{review.content}}
        </p>
      </el-col>
    </el-row>
    <el-row style="font-size: 20px; margin-bottom: 10px">
      Your Reply
    </el-row>
    <el-row>
      <el-input
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 8}"
        v-model="reply.content">
      </el-input>
    </el-row>
    <div style="margin: 20px 0;"></div>
    <el-row>
      <el-col :span="2" :offset="21" style="text-align: center">
        <el-button type="primary" size="medium" @click="submitReply">Reply</el-button>
      </el-col>
    </el-row>
    <el-row style="font-size: 30px">
      Reply List
    </el-row>
    <el-divider></el-divider>
    <el-row v-for="(reply,index) in replyList" v-bind:key="index">
      <el-col :span="2">
        <user-card :uid="reply.uid" :username="reply.username"></user-card>
      </el-col>
      <el-col :span="20" :offset="1">
        <el-row>
          {{reply.content}}
        </el-row>
      </el-col>
      <el-col :span="2" :offset="18">
        <el-button type="warning" size="medium" @click="prepareReport(reply.id)">Report</el-button>
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
    <report-dialog :show-dialog="showReport" @close="showReport=false" :reply-id="replyId"></report-dialog>
  </div>
</template>

<script>
import UserCard from '../../components/UserCard'
import { ReviewService } from '../../services/api'
import ReportDialog from '../../components/ReportDialog'

export default {
  name: 'Reply',
  components: {
    UserCard,
    ReportDialog
  },
  data () {
    return {
      avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      textInput: null,
      currentPage: 1,
      pageSize: 5,
      totalCount: 0,
      reviewId: this.$route.query.rid,
      review: {},
      replyList: [],
      user: {
        uid: 1,
        name: 'Tony'
      },
      reply: {
        rid: this.$route.query.rid,
        content: ''
      },
      showReport: false,
      replyId: 0
    }
  },
  mounted () {
    this.getReplyList()
    this.getReview()
  },
  methods: {
    prepareReport (replyId) {
      this.replyId = replyId
      this.showReport = true
    },
    submitReply () {
      ReviewService.createReply(this.reply).then(
        res => {
          if (res) {
            this.$message.success('Reply submitted')
            this.getReplyList()
          }
        }
      ).catch(() => {
      })
    },
    getReview () {
      ReviewService.getById(this.reviewId).then(
        res => {
          this.review = res
        }
      ).catch(() => {
      })
    },
    getReplyList () {
      ReviewService.getReplyByRid(this.currentPage, this.pageSize, this.reviewId).then(
        res => {
          this.replyList = res.result
          this.totalCount = res.total
        }
      ).catch(() => {
      })
    },
    pageChange (page) {
      this.currentPage = page
      this.getReviews()
    },
    sizeChange (size) {
      this.pageSize = size
      this.getReviews()
    }
  }
}
</script>

<style scoped>

</style>
