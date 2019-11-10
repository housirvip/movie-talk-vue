<template>
  <div class="replies">
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="4" :offset="1">
            <el-input v-model="searchCriteria.id" placeholder="id"></el-input>
          </el-col>
          <el-col :span="4" :offset="1">
            <el-input v-model="searchCriteria.content" placeholder="content"></el-input>
          </el-col>
          <el-col :span="4" :offset="1">
            <el-input v-model="searchCriteria.username" placeholder="username"></el-input>
          </el-col>
          <el-col :span="6" :offset="1">
            <el-button type="primary" size="medium" @click="getReplyList">Search</el-button>
            <el-button type="danger" size="medium" @click="searchCriteria={}">Reset</el-button>
          </el-col>
        </el-row>
        <el-table
          :data="tableDataReplies"
          class="reply-table"
          @row-click="showReply">
          <el-table-column label="ID" width="80">
            <template slot-scope="scope">
              <span>{{scope.row.id}}</span>
            </template>
          </el-table-column>
          <el-table-column label="Reply" min-width="200" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <span>{{scope.row.content}}</span>
            </template>
          </el-table-column>
          <el-table-column label="ReviewID" width="90">
            <template slot-scope="scope">
              <span>{{scope.row.rid}}</span>
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
          <el-table-column
            fixed="right"
            label="Operation"
            width="100">
            <template slot-scope="scope">
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
  name: 'Replies',
  data () {
    return {
      tableDataReplies: [],
      likeTotal: 0,
      currentPage: 1,
      pageSize: 10,
      totalCount: 0,
      searchCriteria: {}
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
    deleteThis (row) {
      ReviewService.deleteReplyByAdmin(row.id).then(
        res => {
          if (res) {
            this.$message.success('delete successfully')
            this.getReplyList()
          }
        }).catch(() => {})
    },
    getReplyList () {
      ReviewService.listAllReply(this.currentPage, this.pageSize, this.searchCriteria).then(
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
