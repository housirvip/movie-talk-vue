<template>
  <div class="review-list">
    <el-table
      :data="tableDataReview"
      class="review-table"
      @row-click="toWriteReply">
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
import { ReviewService } from '../services/api'

export default {
  name: 'MovieList',
  data () {
    return {
      tableDataReview: []
    }
  },
  mounted () {
    this.getReviewList()
  },
  computed: {
    user: function () {
      return this.$store.state.global.user
    }
  },
  methods: {
    toWriteReply (row, column, event) {
      this.$router.push({ path: '/review/reply', query: { uid: row.uid, rid: row.id } })
    },
    getReviewList () {
      ReviewService.getHotReview().then(
        res => {
          this.tableDataReview = res
        }
      ).catch(() => {
      })
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
