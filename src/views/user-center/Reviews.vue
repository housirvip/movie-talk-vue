<template>
  <div class="reviews">
    <el-container>
      <el-main>
        Your reviews has recevied {{totalLikes}}
        <el-link type="danger">❤</el-link>
        likes totally.
        <el-table
          :data="tableDataReviews"
          class="review-table">
          <el-table-column
            label="Review">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{scope.row.review}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="Date">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{scope.row.date}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="likes">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{scope.row.like}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="comments">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{scope.row.comment}}</span>
            </template>
          </el-table-column>
        </el-table>
        <el-row type="flex" justify="center">
          <el-pagination
            @current-change="pageChange"
            :current-page.sync="currentPage"
            :page-size="20"
            layout="prev, pager, next, jumper"
            :total="totalCount">
          </el-pagination>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Reviews',
  data () {
    return {
      tableDataReviews: [],
      totalLikes: 13553,
      totalCount: 0,
      currentPage: 1
    }
  },
  created () {
    this.getReviewList()
  },
  methods: {
    getReviewList () {
      // TODO api get truly data instead of fake data
      let tmp = { date: '2019/09/26', review: 'I love you three thousand times', like: '231', comment: '76' }
      for (let i = 0; i < 10; i++) {
        this.tableDataReviews.push(tmp)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
