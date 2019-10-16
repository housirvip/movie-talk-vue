<template>
  <div class="following">
    <el-container>
      <el-main>
        <el-row>
          <h2 style="text-align: center;font-size: 40px">
            My followings
          </h2>
        </el-row>
        <el-row>
          <following-list :page-num="currentPage" :page-size="pageSize"></following-list>
        </el-row>
        <el-row type="flex" justify="center">
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
import FollowingList from '../../components/FollowingList'
export default {
  name: 'Following',
  components: {
    FollowingList
  },
  data () {
    return {
      currentPage: 1,
      pageSize: 5,
      totalCount: 0
    }
  },
  methods: {
    pageChange (page) {
      this.currentPage = page
    },
    sizeChange (size) {
      this.pageSize = size
    }
  }
}
</script>

<style scoped>

</style>
