<template>
  <div class="followers">
    <el-container>
      <el-main>
        You have {{totalCount}} followers totally.
        <el-table
          :data="tableDataFollowers"
          class="follower-table">
          <el-table-column label="User" width="1000">
            <template slot-scope="scope">
              <el-link :underline="false" @click="toFriend(scope.row)">{{scope.row.fromName}}</el-link>
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
  name: 'Followers',
  data () {
    return {
      tableDataFollowers: [],
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
    this.getFollowerList()
  },
  methods: {
    getFollowerList () {
      UserService.getFollower(this.currentPage, this.pageSize).then(
        res => {
          this.tableDataFollowers = res.result
          this.totalCount = res.total
        }
      ).catch(() => {
      })
    },
    toFriend (row) {
      this.$router.push({ path: '/review/friend', query: { uid: row.fromId } })
    },
    sizeChange (size) {
      this.pageSize = size
      this.getFollowerList()
    },
    pageChange (page) {
      this.currentPage = page
      this.getFollowerList()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .follower-table {
    span {
      margin-left: 5px;
    }
  }
</style>
