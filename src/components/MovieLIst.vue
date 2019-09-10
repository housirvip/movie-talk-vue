<template>
  <div class="movie-list">
    <el-table
      :data="tableData_movie"
      style="width: 100%"
      @row-click="toMovie">
      <el-table-column
        prop="movie"
        label="Top List for Movies">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'MovieLIst',
  data () {
    return {
      tableData_movie: [{
        id: 1,
        movie: 'The avenger'
      }, {
        id: 2,
        movie: 'The avenger'
      }, {
        movie: 'The avenger'
      }, {
        movie: 'The avenger'
      }, {
        movie: 'The avenger'
      }, {
        movie: 'The avenger'
      }, {
        movie: 'The avenger'
      }, {
        movie: 'The avenger'
      }, {
        movie: 'The avenger'
      }, {
        movie: 'The avenger'
      }, {
        movie: 'The avenger'
      }]
    }
  },
  methods: {
    toMovie (row, column, event) {
      console.log(row, column)
      this.$router.push({ path: 'movie' })
    }
  }
}
</script>

<style scoped>
</style>
