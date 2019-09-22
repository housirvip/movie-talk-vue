<template>
  <div class="home">
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="6" :offset="9">
            <el-input placeholder="search bar" v-model="searchCriteria" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
            </el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="9" :offset="2">
            <MovieLIst></MovieLIst>
          </el-col>
          <el-col :span="9" :offset="2">
            <el-table
              :data="tableData_review"
              style="width: 100%">
              <el-table-column
                prop="review"
                label="Hot Reviews List">
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
<!--        <el-row>-->
<!--          <el-col :span="4" :offset="2">-->
<!--            <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>-->
<!--          </el-col>-->
<!--          <el-col :span="18">-->
<!--            <el-row>-->
<!--              <el-col :span="4" :offset="2">-->
<!--                <el-avatar shape="square" :size="100" :src="avatar"></el-avatar>-->
<!--              </el-col>-->
<!--            </el-row>-->
<!--            <el-row>asdasdasdasdasdasdasdasdasd</el-row>-->
<!--          </el-col>-->
<!--        </el-row>-->
        <div style="margin: 20px 0;"></div>
        <el-row>
          <el-col  :span="4" style="font-size: 30px">
            Discover Movie
          </el-col>
        </el-row>
        <div style="margin: 20px 0;"></div>
        <el-row>
          <el-col :span="4">
            <el-select v-model="year" placeholder="year" @change="movieDiscover1">
              <el-option
                v-for="item in years"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="genre" placeholder="genre" @change="movieDiscover1">
              <el-option
                v-for="item in genres"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="sort" placeholder="sort" @change="movieDiscover1">
              <el-option
                v-for="item in sorts"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>

        <div style="margin: 20px 0;"></div>
        <el-row>
          <el-col :span="4">
            <el-row>
              <el-image :src="movieDiscoverPng1" @click="toMovie(movieDiscoverIds[0])"></el-image>
            </el-row>
            <el-row>
              <el-link :underline="false" v-model="movieDiscoverName1" @click="toMovie(movieDiscoverIds[0])">{{movieDiscoverName1}}</el-link>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row>
              <el-image :src="movieDiscoverPng2" @click="toMovie(movieDiscoverIds[1])"></el-image>
            </el-row>
            <el-row>
              <el-link :underline="false" v-model="movieDiscoverName2" @click="toMovie(movieDiscoverIds[1])">{{movieDiscoverName2}}</el-link>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row>
              <el-image :src="movieDiscoverPng3" @click="toMovie(movieDiscoverIds[2])"></el-image>
            </el-row>
            <el-row>
              <el-link :underline="false" v-model="movieDiscoverName3" @click="toMovie(movieDiscoverIds[2])">{{movieDiscoverName3}}</el-link>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row>
              <el-image :src="movieDiscoverPng4" @click="toMovie(movieDiscoverIds[3])"></el-image>
            </el-row>
            <el-row>
              <el-link :underline="false" v-model="movieDiscoverName4" @click="toMovie(movieDiscoverIds[3])">{{movieDiscoverName4}}</el-link>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="movieDiscover2">See more</el-button>
          </el-col>
        </el-row>
        <div style="margin: 20px 0;"></div>
        <el-row>
          <el-col  :span="4" style="font-size: 30px">
            My followings
          </el-col>
          <el-col :span="4">
            <el-button type="primary">See more</el-button>
          </el-col>
        </el-row>
        <div style="margin: 20px 0;"></div>
        <el-row>
          <el-col :span="6">
            <el-row>
              <el-image :src="moviePng"></el-image>
            </el-row>
            <el-row>
              {{movieName}}
            </el-row>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-row style="font-size: 20px;text-align: left;">
              <el-col :span="3">
                <el-row>
                  <el-avatar shape="square" :size="100" :src="avatar"></el-avatar>
                </el-row>
                <el-row>
                  Tom
                </el-row>
              </el-col>
              <el-col :span="6" :offset="3" style="font-size: 25px">
                Good movie
              </el-col>
            </el-row>
            <div style="margin: 20px 0;"></div>
            <el-row>
              After the recent disappointments from Marvel, notably Thor and the abysmal second instalment of Ghost Rider, this was a pleasant experience.
              The special effects are dazzling, the plot is acceptable and the heroes are not making total idiots out of themselves just because the director
              wanted some “depth” to their characters. Sure there is a little bickering in between them but not too much to distract from the fun.
              I’ve always liked Robert Downey Jr’s portrayal of Tony Stark and his sharp tongue. I did wonder how they where going to get the Hulk
              in there since he’s supposed to be uncontrol.
            </el-row>
          </el-col>
        </el-row>
        <div style="margin: 20px 0;"></div>
        <el-row>
          <el-col :span="6">
            <el-row>
              <el-image :src="moviePng"></el-image>
            </el-row>
            <el-row>
              {{movieName}}
            </el-row>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-row style="font-size: 20px;text-align: left;">
              <el-col :span="3">
                <el-row>
                  <el-avatar shape="square" :size="100" :src="avatar"></el-avatar>
                </el-row>
                <el-row>
                  Tom
                </el-row>
              </el-col>
              <el-col :span="6" :offset="3" style="font-size: 25px">
                Good movie
              </el-col>
            </el-row>
            <div style="margin: 20px 0;"></div>
            <el-row>
              After the recent disappointments from Marvel, notably Thor and the abysmal second instalment of Ghost Rider, this was a pleasant experience.
              The special effects are dazzling, the plot is acceptable and the heroes are not making total idiots out of themselves just because the director
              wanted some “depth” to their characters. Sure there is a little bickering in between them but not too much to distract from the fun.
              I’ve always liked Robert Downey Jr’s portrayal of Tony Stark and his sharp tongue. I did wonder how they where going to get the Hulk
              in there since he’s supposed to be uncontrol.
            </el-row>
          </el-col>
        </el-row>
        <div style="margin: 20px 0;"></div>
        <el-row>
          <el-col  :span="4" style="font-size: 30px">
            Recommend
          </el-col>
        </el-row>
        <div style="margin: 20px 0;"></div>
        <el-row>
          <el-col :span="4">
            <el-row>
              <el-image :src="moviePng"></el-image>
            </el-row>
            <el-row>
              {{ movieName }}
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row>
              <el-image :src="moviePng"></el-image>
            </el-row>
            <el-row>
              {{movieName}}
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row>
              <el-image :src="moviePng"></el-image>
            </el-row>
            <el-row>
              {{movieName}}
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row>
              <el-image :src="moviePng"></el-image>
            </el-row>
            <el-row>
              {{movieName}}
            </el-row>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import MovieLIst from '../components/MovieLIst'
import { AccountService, MovieService } from '../services/api'

export default {
  name: 'home',
  components: {
    MovieLIst
  },
  data () {
    return {
      checked: true,
      searchCriteria: '',
      avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      moviePng: 'https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg',
      movieName: 'The Avenger',
      movieDiscoverPng1: '',
      movieDiscoverName1: '',
      movieDiscoverPng2: '',
      movieDiscoverName2: '',
      movieDiscoverPng3: '',
      movieDiscoverName3: '',
      movieDiscoverPng4: '',
      movieDiscoverName4: '',
      movieDiscoverIds: [],
      tableData_review: [{
        review: 'I love you three thousand'
      }, {
        review: 'I love you three thousand'
      }, {
        review: 'I love you three thousand'
      }, {
        review: 'I love you three thousand'
      }, {
        review: 'I love you three thousand'
      }, {
        review: 'I love you three thousand'
      }, {
        review: 'I love you three thousand'
      }, {
        review: 'I love you three thousand'
      }, {
        review: 'I love you three thousand'
      }, {
        review: 'I love you three thousand'
      }],
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
  created () {
    MovieService.discoverMovie(2019, 10749, 'popularity.desc', 1).then(
      result => {
        this.movieDiscoverPng1 = 'https://image.tmdb.org/t/p/w200/' + result.results[0].poster_path
        this.movieDiscoverPng2 = 'https://image.tmdb.org/t/p/w200/' + result.results[1].poster_path
        this.movieDiscoverPng3 = 'https://image.tmdb.org/t/p/w200/' + result.results[2].poster_path
        this.movieDiscoverPng4 = 'https://image.tmdb.org/t/p/w200/' + result.results[3].poster_path
        this.movieDiscoverName1 = result.results[0].title
        this.movieDiscoverName2 = result.results[1].title
        this.movieDiscoverName3 = result.results[2].title
        this.movieDiscoverName4 = result.results[3].title
        for (var i = 0; i < 4; i++) {
          // eslint-disable-next-line no-undef
          this.movieDiscoverIds[i] = result.results[i].id
        }
      }
    )
  },
  methods: {
    search () {
      console.log('search')
      AccountService.test().then(res => console.log(res))
    },
    toMovie (id) {
      this.$router.push({ path: '/movie', query: { id: id } })
    },
    movieDiscover1 () {
      // eslint-disable-next-line eqeqeq
      if (this.year != '' && this.genre != '') {
        MovieService.discoverMovie(this.year, this.genre, this.sort, 1).then(
          result => {
            this.movieDiscoverPng1 = 'https://image.tmdb.org/t/p/w200/' + result.results[0].poster_path
            this.movieDiscoverPng2 = 'https://image.tmdb.org/t/p/w200/' + result.results[1].poster_path
            this.movieDiscoverPng3 = 'https://image.tmdb.org/t/p/w200/' + result.results[2].poster_path
            this.movieDiscoverPng4 = 'https://image.tmdb.org/t/p/w200/' + result.results[3].poster_path
            this.movieDiscoverName1 = result.results[0].title
            this.movieDiscoverName2 = result.results[1].title
            this.movieDiscoverName3 = result.results[2].title
            this.movieDiscoverName4 = result.results[3].title
            for (var i = 0; i < 4; i++) {
              // eslint-disable-next-line no-undef
              this.movieDiscoverIds[i] = result.results[i].id
            }
          }
        )
      }
    },
    movieDiscover2 () {
      // eslint-disable-next-line eqeqeq
      if (this.year == '') {
        this.year = 2019
      }
      // eslint-disable-next-line eqeqeq
      if (this.genre == '') {
        this.genre = 10749
      }
      // eslint-disable-next-line eqeqeq
      if (this.sort == '') {
        this.sort = 'popularity.desc'
      }
      this.$router.push({ path: '/discover', query: { year: this.year, genre: this.genre, sort: this.sort } })
    }
  }
}
</script>

<style>
</style>
