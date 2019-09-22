<template>
  <div class="movie-list">
    <el-table
      :data="tableData_movie"
      style="width: 100%"
      @row-click="toMovie">
      <el-table-column
        label="New Movies">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.$index + 1 + ". " + scope.row.title }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { MovieService } from '../services/api'

export default {
  name: 'MovieLIst',
  data () {
    return {
      tableData_movie: []
    }
  },
  created () {
    MovieService.findNewPlaying().then(
      result => {
        this.tableData_movie = result.results.slice(0, 10)
      }
    ).catch(() => {})
  },
  methods: {
    toMovie (row, column, event) {
      this.$router.push({ path: '/movie', query: { id: row.id } })
    }
  }
}
</script>

<style scoped>
</style>
