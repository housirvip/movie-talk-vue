<template>
  <div class="home">
    <el-container>
      <el-main>
        <el-row class="search-bar">
          <el-col :span="6" :offset="9">
            <el-input placeholder="Search Here" v-model="searchCriteria">
              <el-button slot="append" icon="el-icon-search" @click="search(searchCriteria)"></el-button>
            </el-input>
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
        <el-row>
          <el-col :span="4" :offset="1">
            <el-select v-model="year" placeholder="year" @change="getDiscoverList" value="">
              <el-option
                v-for="item in years"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4" :offset="1">
            <el-select v-model="genre" placeholder="genre" @change="getDiscoverList" value="">
              <el-option
                v-for="item in genres"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4" :offset="1">
            <el-select v-model="sort" placeholder="sort" @change="getDiscoverList" value="">
              <el-option
                v-for="item in sorts"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row style="margin-top: 20px">
          <el-col :span="4" :offset="1" v-for="(discover,index) in discoverList" v-bind:key="index">
            <movie-card :movie-id="discover.id" :title="discover.title" width="300"
                        :url="discover.poster_path"></movie-card>
          </el-col>
        </el-row>
        <div class="div-title">
          My followings
          <el-button type="primary">See more</el-button>
        </div>
        <following-list></following-list>
        <div class="div-title">
          Recommend
        </div>
        <el-row>
          <el-col :span="4" :offset="1" v-for="(recommend,index) in recommendList" v-bind:key="index">
            <movie-card :movie-id="recommend.id" :title="recommend.title" width="300" url="/8L66hJyXptS9XBt5b4O7WkZuwYj.jpg"></movie-card>
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

export default {
  name: 'home',
  components: {
    MovieList,
    ReviewList,
    MovieCard,
    FollowingList
  },
  data () {
    return {
      checked: true,
      searchCriteria: '',
      discoverList: [],
      recommendList: [],
      followingList: [],
      avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      years: [{
        value: '2019',
        label: '2019'
      }, {
        value: '2018',
        label: '2018'
      }, {
        value: '2017',
        label: '2017'
      }, {
        value: '2016',
        label: '2016'
      }, {
        value: '2015',
        label: '2015'
      }, {
        value: '2014',
        label: '2014'
      }, {
        value: '2013',
        label: '2013'
      }, {
        value: '2012',
        label: '2012'
      }, {
        value: '2011',
        label: '2011'
      }, {
        value: '2010',
        label: '2010'
      }, {
        value: '2009',
        label: '2009'
      }, {
        value: '2008',
        label: '2008'
      }, {
        value: '2007',
        label: '2007'
      }, {
        value: '2006',
        label: '2006'
      }, {
        value: '2005',
        label: '2005'
      }, {
        value: '2004',
        label: '2004'
      }, {
        value: '2003',
        label: '2003'
      }, {
        value: '2002',
        label: '2002'
      }, {
        value: '2001',
        label: '2001'
      }, {
        value: '2000',
        label: '2000'
      }, {
        value: '1999',
        label: '1999'
      }
      ],
      year: '',
      genres: [{
        value: '10749',
        label: 'Romance'
      }, {
        value: '36',
        label: 'History'
      }, {
        value: '80',
        label: 'Crime'
      }, {
        value: '12',
        label: 'Adventure'
      }, {
        value: '28',
        label: 'Action'
      }, {
        value: '16',
        label: 'Animation'
      }, {
        value: '35',
        label: 'Comedy'
      }, {
        value: '99',
        label: 'Documentary'
      }, {
        value: '18',
        label: 'Drama'
      }, {
        value: '10751',
        label: 'Family'
      }, {
        value: '14',
        label: 'Fantasy'
      }, {
        value: '27',
        label: 'Horror'
      }, {
        value: '10402',
        label: 'Music'
      }, {
        value: '9648',
        label: 'Mystery'
      }, {
        value: '878',
        label: 'Science Fiction'
      }, {
        value: '10770',
        label: 'TV Movie'
      }, {
        value: '53',
        label: 'Thriller'
      }, {
        value: '10752',
        label: 'War'
      }, {
        value: '37',
        label: 'Western'
      }],
      genre: '',
      sorts: [{
        value: 'popularity.desc',
        label: 'popularity'
      }, {
        value: 'release_day.desc',
        label: 'release day'
      }],
      sort: ''
    }
  },
  mounted () {
    this.getDiscoverList()
    this.getRecommendList()
  },
  methods: {
    search (searchCriteria) {
      this.$router.push({ path: '/searchmovie', query: { query: searchCriteria } })
    },
    toMovie (id) {
      this.$router.push({ path: '/movie', query: { id: id } })
    },
    getDiscoverList () {
      MovieService.discoverMovie(this.year || 2019, this.genre || '10749', this.sort || 'popularity.desc', 1).then(
        result => {
          this.discoverList = result.results.slice(0, 4)
        }
      )
    },
    getRecommendList () {
      // TODO api get truly data instead of fake data
      let tmp = {
        title: 'L-DK: Two Loves, Under One Roo',
        id: 578672
      }
      for (let i = 0; i < 4; i++) {
        this.recommendList.push(tmp)
      }
    },
    toDiscoverPage () {
      this.$router.push({ path: '/discover',
        query: { year: this.year || 2019, genre: this.genre || '10749', sort: this.sort || 'popularity.desc' }
      })
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
