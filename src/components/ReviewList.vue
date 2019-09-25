<template>
  <div class="review-list">
    <el-table
      :data="tableDataReview"
      class="review-table"
      @row-click="toReview">
      <el-table-column
        label="Hot Reviews">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.$index+1+". "+scope.row.title}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'MovieList',
  data () {
    return {
      tableDataReview: []
    }
  },
  created () {
    this.getReviewList()
  },
  methods: {
    toReview (row, column, event) {
      this.$router.push({ path: '/review', query: { id: row.id } })
    },
    getReviewList () {
      // TODO api get truly data instead of fake data
      let tmp = { title: 'I love you three thousand' }
      for (let i = 0; i < 10; i++) {
        this.tableDataReview.push(tmp)
      }
    }
  }
}
</script>

<style scoped>
  .review-table{
    width: 100%;
    font-size: 15px;
  }
</style>
