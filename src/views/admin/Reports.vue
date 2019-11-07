<template>
  <div class="reports">
    <el-container>
      <el-main>
        <el-table
          :data="tableDataReports"
          class="report-table"
          @row-click="showReport">
          <el-table-column label="ID" width="80">
            <template slot-scope="scope">
              <span>{{scope.row.id}}</span>
            </template>
          </el-table-column>
          <el-table-column label="Report" min-width="160">
            <template slot-scope="scope">
              <span>{{scope.row.content}}</span>
            </template>
          </el-table-column>
          <el-table-column label="Type" width="120">
            <template slot-scope="scope">
              <span>{{scope.row.type}}</span>
            </template>
          </el-table-column>
          <el-table-column label="UserID" width="80">
            <template slot-scope="scope">
              <span>{{scope.row.uid}}</span>
            </template>
          </el-table-column>
          <el-table-column label="ReviewID" width="90">
            <template slot-scope="scope">
              <span>{{scope.row.reviewId}}</span>
            </template>
          </el-table-column>
          <el-table-column label="ReplyID" width="90">
            <template slot-scope="scope">
              <span>{{scope.row.replyId}}</span>
            </template>
          </el-table-column>
          <el-table-column label="Solved" width="90">
            <template slot-scope="scope">
              <span>{{scope.row.solve}}</span>
            </template>
          </el-table-column>
          <el-table-column label="Date" width="200">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span>{{scope.row.createTime}}</span>
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
import { ReportService } from '../../services/api'

export default {
  name: 'Reports',
  data () {
    return {
      tableDataReports: [],
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
    this.getReportList()
  },
  methods: {
    showReport () {

    },
    getReportList () {
      ReportService.listAll(this.currentPage, this.pageSize).then(
        res => {
          this.tableDataReports = res.result
          this.totalCount = res.total
        }
      ).catch(() => {
      })
    },
    sizeChange (size) {
      this.pageSize = size
      this.getReportList()
    },
    pageChange (page) {
      this.currentPage = page
      this.getReportList()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .report-table {
    span {
      margin-left: 5px;
    }
  }
</style>
