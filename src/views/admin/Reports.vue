<template>
  <div class="reports">
    <el-container>
      <el-main>
        <el-table
          :data="tableDataReports"
          class="report-table">
          <el-table-column label="ID" width="80">
            <template slot-scope="scope">
              <span>{{scope.row.id}}</span>
            </template>
          </el-table-column>
          <el-table-column label="Report" min-width="160" :show-overflow-tooltip="true">
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
              <span><i :class="!scope.row.solve|bool2icon"></i></span>
            </template>
          </el-table-column>
          <el-table-column label="Date" width="200">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span>{{scope.row.createTime}}</span>
            </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="Operation"
            width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="solveReport(scope.row)"
                type="text"
                size="small">
                {{scope.row.solve?'solve':'revert'}}
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
    getReportList () {
      ReportService.listAll(this.currentPage, this.pageSize).then(
        res => {
          this.tableDataReports = res.result
          this.totalCount = res.total
        }
      ).catch(() => {
      })
    },
    solveReport (row) {
      row.solve = 1 - row.solve
      ReportService.updateByAdmin(row).then(
        res => {
          if (res) {
            this.$message.success('update successfully')
          } else {
            row.solve = 1 - row.solve
          }
        }
      ).catch(() => {
        row.solve = 1 - row.solve
      })
    },
    deleteThis (row) {
      ReportService.deleteByAdmin(row.id).then(
        res => {
          if (res) {
            this.$message.success('delete successfully')
            this.getReportList()
          }
        }).catch(() => {})
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
