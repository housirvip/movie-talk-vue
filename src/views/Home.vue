<template>
  <div class="home">
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="6" :offset="9">
            <search-bar></search-bar>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="9" :offset="2">
            <movie-list></movie-list>
          </el-col>
          <el-col :span="9" :offset="2">
            <review-list></review-list>
          </el-col>
        </el-row>
        <div class="div-title">
          Discover Movie
          <el-button type="primary" @click="toDiscoverPage">See more</el-button>
        </div>
        <discover-filter @change="getDiscoverList"></discover-filter>
        <el-row style="margin-top: 20px">
          <el-col :span="4" :offset="1" v-for="(discover,index) in discoverList" v-bind:key="index">
            <movie-card :movie-id="discover.id" :title="discover.title" :url="discover.poster_path"></movie-card>
          </el-col>
        </el-row>
        <div class="div-title">
          My followings
          <el-button type="primary" @click="toFollow">See more</el-button>
        </div>
        <following-list></following-list>
        <div class="div-title">
          Recommend
        </div>
        <el-row>
          <el-col :span="4" :offset="1" v-for="(recommend,index) in recommendList" v-bind:key="index">
            <movie-card :movie-id="recommend.id" :title="recommend.title" :url="recommend.url"></movie-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { MovieService } from '../services/api'
import MovieList from '../components/MovieList'
import MovieCard from '../components/MovieCard'
import ReviewList from '../components/ReviewList'
import FollowingList from '../components/FollowingList'
import DiscoverFilter from '../components/DiscoverFilter'
import SearchBar from '../components/SearchBar'

export default {
  name: 'home',
  components: {
    MovieList,
    ReviewList,
    MovieCard,
    FollowingList,
    DiscoverFilter,
    SearchBar
  },
  data () {
    return {
      checked: true,
      discoverList: [],
      recommendList: [],
      followingList: [],
      discoverFilter: {
        year: '',
        genre: '',
        sort: ''
      }
    }
  },
  mounted () {
    this.getDiscoverList()
    this.getRecommendList()
  },
  methods: {
    getDiscoverList (discoverFilter) {
      if (discoverFilter != null) { this.discoverFilter = discoverFilter }
      MovieService.getDiscover(discoverFilter || this.discoverFilter, 1).then(
        result => {
          this.discoverList = result.results.slice(0, 4)
        }
      )
    },
    getRecommendList () {
      MovieService.getRecommend().then(
        res => {
          this.recommendList = res.results.slice(0, 4)
        }
      ).catch(() => {
      })
    },
    toDiscoverPage () {
      this.$router.push({ path: '/movie/discover', query: { year: this.discoverFilter.year, genre: this.discoverFilter.genre, sort: this.discoverFilter.sort } })
    },
    toFollow () {
      this.$router.push({ path: '/review/following' })
    }
  }
}
</script>

<style scoped>
  .div-title{
    font-size: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 2%;
  }
  .search-bar {
    margin-top: 30px;
    margin-bottom: 50px;
  }
</style>
