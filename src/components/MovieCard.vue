<template>
  <div @click="toMovie" class="div-card">
    <el-card shadow="hover" class="movie-card" :body-style="{ padding: '0px' }">
      <el-image v-if="url||movie.poster_path" :src="'https://image.tmdb.org/t/p/w'+width+(url||movie.poster_path)"/>
      <div style="padding: 5px;">
        <span class="movie-title">{{title||movie.title}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
import { MovieService } from '../services/api'

export default {
  name: 'MovieCard',
  props: {
    title: String,
    movieId: Number,
    url: String,
    width: String,
    request: Boolean
  },
  data () {
    return {
      movie: {
        url: '',
        title: ''
      }
    }
  },
  mounted () {
    if (this.request && this.movieId) {
      this.getMovieDetail()
    }
  },
  methods: {
    toMovie () {
      this.$router.push({ path: '/movie/detail', query: { id: this.movieId.toString() } })
    },
    getMovieDetail () {
      MovieService.getDetails(this.movieId).then(
        res => {
          // console.log(res)
          this.movie = res
        }
      ).catch(() => {
      })
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
