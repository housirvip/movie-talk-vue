<template>
  <div class="reviews">
    <el-container>
      <el-main>
        <el-table
          :data="tableDataReviews"
          class="review-table">
          <el-table-column label="ID" width="80">
            <template slot-scope="scope">
              <span>{{scope.row.id}}</span>
            </template>
          </el-table-column>
          <el-table-column label="Review" min-width="160">
            <template slot-scope="scope">
              <el-tooltip class="item" effect="light" :content="scope.row.content" placement="top-start">
                <span>{{scope.row.title}}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column label="User" width="120">
            <template slot-scope="scope">
              <span>{{scope.row.username}}</span>
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
          <el-table-column
            fixed="right"
            label="Operation"
            width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="toWriteReply(scope.row)"
                type="text"
                size="small">
                view
              </el-button>
              <el-button
                @click.native.prevent="deleteThis(scope.row)"
                type="text"
                size="small">
                delete
              </el-button>
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
import { ReviewService } from '../../services/api'

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
  },
  methods: {
    getReviewList () {
      ReviewService.listAll(this.currentPage, this.pageSize).then(
        res => {
          this.tableDataReviews = res.result
          this.totalCount = res.total
        }
      ).catch(() => {
      })
    },
    toWriteReply (row) {
      this.$router.push({ path: '/review/reply', query: { uid: row.uid, rid: row.id } })
    },
    deleteThis (row) {
      ReviewService.deleteByAdmin(row.id).then(
        res => {
          if (res) {
            this.$message.success('delete successfully')
            this.getReviewList()
          }
        }).catch(() => {})
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
