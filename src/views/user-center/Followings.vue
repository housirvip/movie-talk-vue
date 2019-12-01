<template>
  <div class="followings">
    <el-container>
      <el-main>
        You have followed {{totalCount}} users totally.
        <el-table
          :data="tableDataFollowings"
          class="following-table">
          <el-table-column label="User" width="1000">
            <template slot-scope="scope">
              <el-link :underline="false" @click="toFriend(scope.row)">{{scope.row.toName}}</el-link>
            </template>
          </el-table-column>
          <el-table-column label="Operate" width="200">
            <template slot-scope="scope">
              <el-button type="primary" size="medium" @click="unFollow(scope.row.toId)">UnFollow</el-button>
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
import { UserService } from '../../services/api'

export default {
  name: 'Followings',
  data () {
    return {
      tableDataFollowings: [],
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
    this.getFollowingList()
  },
  methods: {
    getFollowingList () {
      UserService.getFollowing(this.currentPage, this.pageSize).then(
        res => {
          this.tableDataFollowings = res.result
          this.totalCount = res.total
        }
      ).catch(() => {
      })
    },
    unFollow (id) {
      UserService.deleteFollowing(id).then(
        res => {
          if (res) {
            this.$message.success('Success')
            this.getFollowingList()
          }
        }
      ).catch(() => {
      })
    },
    toFriend (row) {
      this.$router.push({ path: '/review/friend', query: { uid: row.toId } })
    },
    sizeChange (size) {
      this.pageSize = size
      this.getFollowingList()
    },
    pageChange (page) {
      this.currentPage = page
      this.getFollowingList()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .following-table {
    span {
      margin-left: 5px;
    }
  }
</style>
