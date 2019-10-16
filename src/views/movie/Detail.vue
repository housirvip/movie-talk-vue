<template>
  <div class="movie">
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="5" :offset="0">
            <movie-card :movie-id="movie.id" :title="movie.title" width="500"
                        :url="movie.poster_path"></movie-card>
          </el-col>
          <el-col :span="10" :offset="1">
            <el-table :show-header="false" :data="tableData" style="width: 100%">
              <el-table-column
                width="120"
                prop="key"
                label="Key">
              </el-table-column>
              <el-table-column
                prop="value"
                label="Value">
              </el-table-column>
            </el-table>
          </el-col>
          <el-col :span="7" :offset="1" style="font-size: 70px;text-align: center;">
            <p>
              {{movie.vote_average}}
              <el-rate
                v-model="movie.vote_average"
                disabled
                :max=10.00
                text-color="#ff9900">
              </el-rate>
            </p>
          </el-col>
        </el-row>
        <p class="title-p">
          Introduction:
        </p>
        <p>
          {{movie.overview}}
        </p>
        <p class="title-p">
          Your Voting:
        </p>
        <el-row>
          <el-col>
            <el-rate :allow-half="true" :show-score="true" :max="10" v-model="yourVoting"></el-rate>
          </el-col>
        </el-row>
        <el-row>
          <div class="write-review-div">
            <span class="title-p">
              Reviews:
            </span>
            <el-button id="write-review-btn" type="warning" @click="toWriteReview" icon="el-icon-edit" round>
              Write Review
            </el-button>
          </div>
        </el-row>
        <el-row>
          <el-col :span="3">
            <user-card :uid="3" username="asdasd"></user-card>
          </el-col>
          <el-col :span="20" :offset="1">
            <p class="title-p">Good movie</p>
            <p>After the recent disappointments from Marvel, notably Thor and the abysmal second instalment of Ghost
              Rider, this was a pleasant experience.
              The special effects are dazzling, the plot is acceptable and the heroes are not making total idiots out
              of themselves just because the director
              wanted some “depth” to their characters. Sure there is a little bickering in between them but not too
              much to distract from the fun.
              I’ve always liked Robert Downey Jr’s portrayal of Tony Stark and his sharp tongue. I did wonder how they
              where going to get the Hulk
              in there since he’s supposed to be uncontrol.</p>
            <el-row>
              <el-col :span="6" :offset="16" style="text-align: right">
                <el-button type="danger" size="medium">Give a like</el-button>
              </el-col>
              <el-col :span="2" style="text-align: center">
                <el-button type="primary" size="medium" @click="toWriteReply">Reply</el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-pagination
            @current-change="pageChange"
            @size-change="sizeChange"
            :current-page.sync="currentPage"
            :page-size="pageSize"
            layout="prev, pager, next, jumper"
            :total="totalCount">
          </el-pagination>
        </el-row>
      </el-main>
    </el-container>
  </div>

</template>

<script>
import { MovieService, ReviewService } from '../../services/api'
import MovieCard from '../../components/MovieCard'
import UserCard from '../../components/UserCard'

export default {
  name: 'Detail',
  components: {
    UserCard,
    MovieCard
  },
  data () {
    return {
      tableData: [],
      currentPage: 1,
      pageSize: 5,
      totalCount: 0,
      yourVoting: 6.5,
      avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      movieId: this.$route.query.id,
      movie: {},
      reviewList: []
    }
  },
  created () {
    this.getMovieDetail()
    this.getMovieCredits()
    this.getReviews()
  },
  methods: {
    toWriteReview () {
      this.$router.push({ path: '/review/write', query: { id: this.movie.id.toString() } })
    },
    toWriteReply () {
      this.$router.push({ path: '/review/reply' })
    },
    getMovieDetail () {
      MovieService.getDetails(this.movieId).then(
        result => {
          this.movie = result
          this.tableData.push({ key: 'Tilte', value: result.title })
          this.tableData.push({ key: 'Pubdate', value: result.release_date })
        }
      ).catch(() => {
      })
    },
    getMovieCredits () {
      MovieService.getCredits(this.movieId).then(
        result => {
          for (let item of result.crew) {
            if (item.job === 'Director') {
              this.tableData.push({ key: 'Director', value: item.name })
            }
          }
          let casts = ''
          let len = 1
          let max = 8
          for (let item of result.cast) {
            len++
            if (len < max && len < result.cast.length) {
              casts = casts + item.name + ', '
            } else {
              casts = casts + item.name
              break
            }
          }
          this.tableData.push({ key: 'Casts', value: casts })
        }
      ).catch(() => {
      })
    },
    getReviews () {
      ReviewService.getByMid(this.currentPage, this.pageSize, this.movieId).then(
        res => {
          this.totalCount = res.total
          this.reviewList = res.result
        }
      ).catch(() => {
      })
    },
    pageChange (page) {
      this.currentPage = page
      this.getReviews()
    },
    sizeChange (val) {
      this.pageSize = val
    }
  }
}
</script>

<style scoped lang="scss">
  .write-review-div {
    span {
      margin-right: 60%;
    }

    #write-review-btn {
      right: 20px;
    }

    margin-bottom: 20px;
    margin-top: 20px;
  }

  .title-p {
    text-align: left;
    font-size: 20px;
  }

  .cast-p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4; //需要显示时文本行数
    overflow: hidden;
  }
</style>
