<template>
  <div class="review-history">
    <el-row v-for="(review,index) in reviewList" v-bind:key="index" class="follow-row">
      <el-col :span="4" :offset="1">
        <movie-card :movie-id="review.movieId" :title="review.movieName" width="300" url="/8L66hJyXptS9XBt5b4O7WkZuwYj.jpg"></movie-card>
      </el-col>
      <el-col :span="12" :offset="1">
        <el-row style="font-size: 20px;text-align: left;">
          <el-col :span="6" :offset="0">
            <p style="font-size: 25px">
              {{review.title}}
            </p>
          </el-col>
        </el-row>
        <el-row>
          <p style="font-size: 16px">
            {{review.content}}
          </p>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import MovieCard from './MovieCard'

export default {
  name: 'ReviewHistory',
  components: {
    MovieCard
  },
  data () {
    return {
      reviewList: []
    }
  },
  created () {
    this.getReviewHistory()
  },
  methods: {
    getReviewHistory () {
      // TODO api get truly data instead of fake data
      let tmp = {
        title: 'Good movie',
        movieId: 578672,
        movieName: 'L-DK: Two Loves, Under One Roo',
        content: 'After the recent disappointments from Marvel, notably Thor and the abysmal second instalment of Ghost Rider, this was a pleasant experience.\n' +
            'The special effects are dazzling, the plot is acceptable and the heroes are not making total idiots out of themselves just because the director\n' +
            'wanted some “depth” to their characters. Sure there is a little bickering in between them but not too much to distract from the fun.\n' +
            'I’ve always liked Robert Downey Jr’s portrayal of Tony Stark and his sharp tongue. I did wonder how they where going to get the Hulk\n' +
            'in there since he’s supposed to be uncontrol.'
      }
      for (let i = 0; i < 3; i++) {
        this.reviewList.push(tmp)
      }
    }
  }
}
</script>

<style scoped>
  .review-history{
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .follow-row{
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
