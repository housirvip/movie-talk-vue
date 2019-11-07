<template>
  <div class="replies">
    <el-container>
      <el-main>
        <el-table
          :data="tableDataReplies"
          class="reply-table"
          @row-click="showReply">
          <el-table-column label="ID" width="80">
            <template slot-scope="scope">
              <span>{{scope.row.id}}</span>
            </template>
          </el-table-column>
          <el-table-column label="Reply" min-width="160">
            <template slot-scope="scope">
              <span>{{scope.row.content}}</span>
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
  name: 'Replies',
  data () {
    return {
      tableDataReplies: [],
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
    this.getReplyList()
  },
  methods: {
    showReply () {

    },
    getReplyList () {
      ReviewService.listAllReply(this.currentPage, this.pageSize).then(
        res => {
          this.tableDataReplies = res.result
          this.totalCount = res.total
        }
      ).catch(() => {
      })
    },
    sizeChange (size) {
      this.pageSize = size
      this.getReplyList()
    },
    pageChange (page) {
      this.currentPage = page
      this.getReplyList()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .reply-table {
    span {
      margin-left: 5px;
    }
  }
</style>
