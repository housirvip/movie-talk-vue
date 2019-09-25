<template>
  <div @click="toMovie" class="div-card">
    <el-card shadow="hover" class="movie-card" :body-style="{ padding: '0px' }">
      <el-image :src="'https://image.tmdb.org/t/p/w'+width+url"/>
      <div style="padding: 5px;">
        <span class="movie-title">{{title}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    title: String,
    movieId: Number,
    url: String,
    width: String
  },
  methods: {
    toMovie () {
      this.$router.push({ path: '/movie/detail', query: { id: this.movieId.toString() } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .movie-title{
    text-align: center;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .movie-card{
    text-align: center;
  }
  .div-card{
    padding-bottom: 20px;
  }
</style>
