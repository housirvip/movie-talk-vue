<template>
  <div class="movie-list">
    <el-table
      :data="tableDataMovie"
      class="movie-table"
      @row-click="toMovie">
      <el-table-column
        label="New Movies">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.$index+1+". "+scope.row.title}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { MovieService } from '../services/api'

export default {
  name: 'MovieList',
  data () {
    return {
      tableDataMovie: []
    }
  },
  created () {
    this.getMovieList()
  },
  methods: {
    toMovie (row, column, event) {
      this.$router.push({ path: '/movie/detail', query: { id: row.id } })
    },
    getMovieList () {
      MovieService.findNewPlaying().then(
        result => {
          this.tableDataMovie = result.results.slice(0, 10)
        }
      ).catch(() => {})
    }
  }
}
</script>

<style scoped>
  .movie-table{
    width: 100%;
    font-size: 15px;
  }
</style>
