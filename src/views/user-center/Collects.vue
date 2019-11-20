<template>
  <div class="collects">
    <el-container>
      <el-main>
        You has collected {{totalCount}} movies totally.
        <el-table
          :data="tableDataCollects"
          class="movie-table"
          @row-click="toMovieDetail">
          <el-table-column label="Mid">
            <template slot-scope="scope">
              <span>{{scope.row.mid}}</span>
            </template>
          </el-table-column>
          <el-table-column label="Title">
            <template slot-scope="scope">
              <span>{{scope.row.title}}</span>
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
import { MovieService } from '../../services/api'

export default {
  name: 'Collects',
  data () {
    return {
      tableDataCollects: [],
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
    this.getCollectTotal()
  },
  methods: {
    getCollectTotal () {
      MovieService.getCollectByUid(this.currentPage, this.pageSize).then(
        res => {
          this.tableDataCollects = res.result
          this.totalCount = res.total
        }
      ).catch(() => {
      })
    },
    toMovieDetail (row) {
      this.$router.push({ path: '/movie/detail', query: { id: row.mid } })
    },
    sizeChange (size) {
      this.pageSize = size
      this.getCollectTotal()
    },
    pageChange (page) {
      this.currentPage = page
      this.getCollectTotal()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .movie-table {
    span {
      margin-left: 5px;
    }
  }
</style>
