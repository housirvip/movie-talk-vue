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
          <el-col :span="4">
            <el-row>
              <el-image :src="moviePng"></el-image>
            </el-row>
            <el-row>
              {{movieName}}
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="discover">See more</el-button>
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
import { AccountService } from '../services/api'

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
      }],
      year: '',
      genres: [{
        value: 'Roman',
        label: 'Roman'
      }, {
        value: 'History',
        label: 'History'
      }, {
        value: 'Crime',
        label: 'Crime'
      }, {
        value: 'Anime',
        label: 'Anime'
      }, {
        value: 'Adventure',
        label: 'Adventure'
      }],
      genre: '',
      sorts: [{
        value: 'popularity',
        label: 'popularity'
      }, {
        value: 'rating',
        label: 'rating'
      }, {
        value: 'release day',
        label: 'release day'
      }],
      sort: ''
    }
  },
  methods: {
    search () {
      console.log('search')
      AccountService.test().then(res => console.log(res))
    },
    discover () {
      this.$router.push({ path: '/discover' })
    },
    toMovie () {
      this.$router.push({ path: '/movie' })
    },
    movieDiscover1 () {
      this.moviePng = 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg'
      this.movieName = 'The Avenger 4'
    }
  }
}
</script>

<style>
</style>
