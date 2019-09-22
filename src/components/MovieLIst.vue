<template>
  <div class="movie-list">
    <el-table
      :data="tableData_movie"
      style="width: 100%"
      @row-click="toMovie">
      <el-table-column
        prop="title"
        label="Top List for Movies">
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
      tableData_movie: [{
        id: '',
        title: ''
      }, {
        id: '',
        title: ''
      }, {
        id: '',
        title: ''
      }, {
        id: '',
        title: ''
      }, {
        id: '',
        title: ''
      }, {
        id: '',
        title: ''
      }, {
        id: '',
        title: ''
      }, {
        id: '',
        title: ''
      }, {
        id: '',
        title: ''
      }, {
        id: '',
        title: ''
      }]
    }
  },
  created () {
    MovieService.findNewPlaying().then(
      result => {
        for (var i = 0; i < 10; i++) {
          this.tableData_movie[i].title = (i + 1) + '. ' + result.results[i].title
          this.tableData_movie[i].id = result.results[i].id
        }
      }
    )
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
