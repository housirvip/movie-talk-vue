<template>
  <div class="reviews">
    <el-container>
      <el-main>
        Your reviews has received {{totalLikes}}
        <el-link type="danger">❤</el-link>
        likes totally.
        <el-table
          :data="tableDataReviews"
          class="review-table"
          @row-click="toWriteReply">
          <el-table-column label="Review" min-width="160">
            <template slot-scope="scope">
              <span>{{scope.row.title}}</span>
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
              <span><el-link type="danger">❤</el-link> {{scope.row.like||0}}</span>
            </template>
          </el-table-column>
          <el-table-column label="Comments" width="100">
            <template slot-scope="scope">
              <span>{{scope.row.comment||0}}</span>
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
      totalLikes: 13553,
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
      // TODO api get truly data instead of fake data
      let tmp = { date: '2019/09/26', review: 'I love you three thousand times', like: '231', comment: '76' }
      for (let i = 0; i < 10; i++) {
        this.tableDataReviews.push(tmp)
      }
      ReviewService.getByUid(this.currentPage, this.pageSize, this.user.uid).then(
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
    sizeChange (size) {
      this.pageSize = size
      this.getSearchList()
    },
    pageChange (page) {
      this.currentPage = page
      this.getSearchList()
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
