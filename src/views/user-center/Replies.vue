<template>
  <div class="replies">
    <el-container>
      <el-main>
        You have replied {{totalCount}} movies totally.
        <el-table
          :data="tableDataReplies"
          class="reply-table">
          <el-table-column label="Reply" width="1000">
            <template slot-scope="scope">
              <el-link :underline="false" @click="toWriteReply(scope.row)">{{scope.row.content}}</el-link>
            </template>
          </el-table-column>
          <el-table-column label="User" width="160">
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
          <el-table-column label="Operate" width="200">
            <template slot-scope="scope">
              <el-button type="success" size="medium" @click="prepareReply(scope.row.id, scope.row.content)">Update</el-button>
              <el-button type="info" size="medium" @click="deleteReply(scope.row.id)">Delete</el-button>
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
      currentPage: 1,
      pageSize: 10,
      totalCount: 0,
      updateReply: {}
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
    getReplyList () {
      ReviewService.getReplyByUid(this.currentPage, this.pageSize).then(
        res => {
          this.tableDataReplies = res.result
          this.totalCount = res.total
        }
      ).catch(() => {
      })
    },
    prepareReply (replyId, content) {
      this.$prompt('Update your reply', 'Update', {
        confirmButtonText: 'Sure',
        cancelButtonText: 'Cancel',
        inputValue: content
      }).then(({ value }) => {
        this.updateReply.id = replyId
        this.updateReply.content = value
        ReviewService.updateReply(this.updateReply).then(
          res => {
            if (res) {
              this.$message.success('Update submitted')
              this.getReplyList()
            }
          }
        ).catch(() => {
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'cancel update'
        })
      })
    },
    deleteReply (id) {
      ReviewService.deleteReply(id).then(
        res => {
          if (res) {
            this.$message.success('Success')
            this.getReplyList()
          }
        }
      ).catch(() => {
      })
    },
    toWriteReply (row) {
      this.$router.push({ path: '/review/reply', query: { uid: row.uid, rid: row.rid } })
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
