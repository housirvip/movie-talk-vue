<template>
  <div class="movie">
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="6" :offset="0">
            <el-image :src="movieImage"></el-image>
          </el-col>
          <el-col :span="6" :offset="0">
            <el-table
              :data="tabledData_MovieInfo"
              style="width: 100%">
              <el-table-column
                prop="MovieInfo"
                label="Movie Info">
              </el-table-column>
            </el-table>
          </el-col>
          <el-col :span="6" :offset="0" style="font-size: 70px;text-align: center;">
              <p>
                8.5
                <el-rate
                v-model="scoreTotal"
                disabled
                :max=10.00
                text-color="#ff9900">
              </el-rate></p>
          </el-col>
        </el-row>
        <el-row style="font-size: 20px;text-align: left;">
          <p>
            Introduction:
          </p>
        </el-row>
        <el-row>
            {{Introduction}}
        </el-row>
        <el-row style="font-size: 20px;text-align: left;">
          <p>
            Movie-scoring:
          </p>
        </el-row>
        <el-row>
          <el-col :span="4" :offset="0">
            <el-rate :allow-half="true" :show-score="true" :max="10" v-model="scoreSubmit">
            </el-rate>
          </el-col>
          <el-col :span="4" :offset="0">
            <el-button type="primary">Submit</el-button>
          </el-col>
        </el-row>
        <el-row style="font-size: 20px;text-align: left;">
          <p>
            Reviews:
          </p>
        </el-row>
        <el-row>
          <el-col :span="12" :offset="11">
            <el-button type="danger" size="medium" @click="writeReview">Write a review</el-button>
          </el-col>
        </el-row>
        <div style="margin: 20px 0;"></div>
        <el-row>
          <el-col :span="3">
            <el-row>
              <el-avatar shape="square" :size="100" :src="avatar"></el-avatar>
            </el-row>
            <el-row>
              Tom
            </el-row>
          </el-col>
          <el-col :span="21">
            <el-row style="font-size: 20px;text-align: left;">
              Good movie
            </el-row>
            <el-row>
              After the recent disappointments from Marvel, notably Thor and the abysmal second instalment of Ghost Rider, this was a pleasant experience.
              The special effects are dazzling, the plot is acceptable and the heroes are not making total idiots out of themselves just because the director
              wanted some “depth” to their characters. Sure there is a little bickering in between them but not too much to distract from the fun.
              I’ve always liked Robert Downey Jr’s portrayal of Tony Stark and his sharp tongue. I did wonder how they where going to get the Hulk
              in there since he’s supposed to be uncontrol.
            </el-row>
            <el-row>
              <el-col :span="6" :offset="16" style="text-align: right">
                <el-button type="danger" size="medium" >Give a like</el-button>
              </el-col>
              <el-col :span="2" style="text-align: center">
                <el-button type="primary" size="medium" @click="writeReply">Reply</el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <div style="margin: 20px 0;"></div>
        <el-row>
          <el-col :span="3">
            <el-row>
              <el-avatar shape="square" :size="100" :src="avatar"></el-avatar>
            </el-row>
            <el-row>
              Tom
            </el-row>
          </el-col>
          <el-col :span="21">
            <el-row style="font-size: 20px;text-align: left;">
              Good movie
            </el-row>
            <el-row>
              After the recent disappointments from Marvel, notably Thor and the abysmal second instalment of Ghost Rider, this was a pleasant experience.
              The special effects are dazzling, the plot is acceptable and the heroes are not making total idiots out of themselves just because the director
              wanted some “depth” to their characters. Sure there is a little bickering in between them but not too much to distract from the fun.
              I’ve always liked Robert Downey Jr’s portrayal of Tony Stark and his sharp tongue. I did wonder how they where going to get the Hulk
              in there since he’s supposed to be uncontrol.
            </el-row>
            <el-row>
              <el-col :span="6" :offset="16" style="text-align: right">
                <el-button type="danger" size="medium" >Give a like</el-button>
              </el-col>
              <el-col :span="2" style="text-align: center">
                <el-button type="primary" size="medium" @click="writeReply">Reply</el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <div style="margin: 20px 0;"></div>
        <el-row>
          <el-col :span="3">
            <el-row>
              <el-avatar shape="square" :size="100" :src="avatar"></el-avatar>
            </el-row>
            <el-row>
              Tom
            </el-row>
          </el-col>
          <el-col :span="21">
            <el-row style="font-size: 20px;text-align: left;">
              Good movie
            </el-row>
            <el-row>
              After the recent disappointments from Marvel, notably Thor and the abysmal second instalment of Ghost Rider, this was a pleasant experience.
              The special effects are dazzling, the plot is acceptable and the heroes are not making total idiots out of themselves just because the director
              wanted some “depth” to their characters. Sure there is a little bickering in between them but not too much to distract from the fun.
              I’ve always liked Robert Downey Jr’s portrayal of Tony Stark and his sharp tongue. I did wonder how they where going to get the Hulk
              in there since he’s supposed to be uncontrol.
            </el-row>
            <el-row>
              <el-col :span="6" :offset="16" style="text-align: right">
                <el-button type="danger" size="medium" >Give a like</el-button>
              </el-col>
              <el-col :span="2" style="text-align: center">
                <el-button type="primary" size="medium" @click="writeReply">Reply</el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <div style="margin: 20px 0;"></div>
        <el-pagination style="text-align: right"
                       layout="prev, pager, next"
                       :total="50">
        </el-pagination>
      </el-main>
    </el-container>
  </div>

</template>

<script>
import { MovieService } from '../services/api'

export default {
  name: 'Movie',
  data () {
    return {
      tabledData_MovieInfo: [{
        MovieInfo: ''
      }, {
        MovieInfo: ''
      }, {
        MovieInfo: ''
      }, {
        MovieInfo: ''
      }],
      scoreSubmit: null,
      avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      scoreTotal: 8.5,
      movieId: this.$route.query.id,
      Introduction: '',
      movieImage: ''
    }
  },
  created () {
    MovieService.getDetails(this.movieId).then(
      result => {
        this.tabledData_MovieInfo[0].MovieInfo = 'Title: ' + result.title
        this.tabledData_MovieInfo[1].MovieInfo = 'Pubdate: ' + result.release_date
        this.Introduction = result.overview
        this.movieImage = 'https://image.tmdb.org/t/p/w200/' + result.poster_path
      }
    )

    MovieService.getCredits(this.movieId).then(
      result => {
        for (var i = 0; i < result.crew.length; i++) {
          // eslint-disable-next-line eqeqeq
          if (result.crew[i].job == 'Director') {
            this.tabledData_MovieInfo[2].MovieInfo = 'Director: ' + result.crew[i].name
            break
          }
        }
        this.tabledData_MovieInfo[3].MovieInfo = 'Casts: ' + result.cast[0].name + ', ' + result.cast[1].name + ', ' + result.cast[2].name
      }
    )
  },
  methods: {
    writeReview () {
      this.$router.push({ path: '/writereview' })
    },
    writeReply () {
      this.$router.push({ path: '/writereply' })
    }
  }
}
</script>

<style scoped>

</style>
