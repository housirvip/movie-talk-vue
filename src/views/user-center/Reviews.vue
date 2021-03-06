<template>
  <div class="reviews">
    <el-container>
      <el-main>
        Your reviews have received {{likeTotal}}
        <el-link type="danger">❤</el-link>
        likes totally.
        <el-table
          :data="tableDataReviews"
          class="review-table">
          <el-table-column label="Review" min-width="160">
            <template slot-scope="scope">
              <el-link :underline="false" @click="toWriteReply(scope.row)">{{scope.row.title}}</el-link>
            </template>
          </el-table-column>
          <el-table-column label="Date" width="200">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span>{{scope.row.createTime}}</span>
            </template>
          </el-table-column>
          <el-table-column label="Likes" width="100">
            <template slot-scope="scope">
              <span><el-link type="danger">❤</el-link> {{scope.row.likeTotal||0}}</span>
            </template>
          </el-table-column>
          <el-table-column label="Comments" width="100">
            <template slot-scope="scope">
              <span>{{scope.row.replyTotal||0}}</span>
            </template>
          </el-table-column>
          <el-table-column label="Operate" width="200">
            <template slot-scope="scope">
              <el-button type="success" v-show="scope.row.uid===user.uid" size="medium" @click="updateReview(scope.row)">Update</el-button>
              <el-button type="info" v-show="scope.row.uid===user.uid" size="medium" @click="deleteReview(scope.row)">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-row type="flex" justify="center" style="padding-top: 20px">
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
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { ReviewService, UserService } from '../../services/api'

export default {
  name: 'Reviews',
  data () {
    return {
      tableDataReviews: [],
      likeTotal: 0,
      currentPage: 1,
      pageSize: 10,
      totalCount: 0
    }
  },
  computed: {
    user: function () {
      return this.$store.state.global.user
    }
  },
  mounted () {
    this.getReviewList()
    this.getLikeTotal()
  },
  methods: {
    getLikeTotal () {
      UserService.userRecord().then(
        res => {
          this.likeTotal = res.likeTotal
        }
      ).catch(() => {
      })
    },
    getReviewList () {
      ReviewService.getByUid(this.currentPage, this.pageSize, this.user.uid).then(
        res => {
          this.tableDataReviews = res.result
          this.totalCount = res.total
        }
      ).catch(() => {
      })
    },
    updateReview (row) {
      this.$router.push({ path: '/review/update', query: { mid: row.mid, rid: row.id } })
    },
    deleteReview (row) {
      ReviewService.deleteReview(row.id).then(
        res => {
          if (res) {
            this.$message.success('Success')
            this.getReviewList()
          }
        }
      ).catch(() => {
      })
    },
    toWriteReply (row) {
      this.$router.push({ path: '/review/reply', query: { uid: row.uid, rid: row.id } })
    },
    sizeChange (size) {
      this.pageSize = size
      this.getReviewList()
    },
    pageChange (page) {
      this.currentPage = page
      this.getReviewList()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .review-table {
    span {
      margin-left: 5px;
    }
  }
</style>
