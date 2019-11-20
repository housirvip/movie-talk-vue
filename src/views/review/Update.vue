<template>
  <div class="review">
    <el-row>
      <el-col :span="4" :offset="1">
        <movie-card :movie-id="movie.id" :title="movie.title" width="300"
                    :url="movie.poster_path"></movie-card>
      </el-col>
      <el-col :span="17" :offset="1">
        <h2>
          Write your review
        </h2>
        <el-divider></el-divider>
        <el-form label-position="right" label-width="80px" :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item label="title" required prop="title">
            <el-input v-model="ruleForm.title"></el-input>
          </el-form-item>
          <el-form-item label="content" required prop="content" >
            <el-input
              type="textarea"
              :autosize="{ minRows: 8, maxRows: 12}"
              v-model="ruleForm.content">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">Submit</el-button>
            <el-button @click="resetForm">Reset</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MovieCard from '../../components/MovieCard'
import { MovieService, ReviewService } from '../../services/api'

export default {
  name: 'Write',
  components: {
    MovieCard
  },
  data () {
    return {
      movieId: this.$route.query.mid,
      reviewId: this.$route.query.rid,
      movie: {},
      ruleForm: {
        title: '',
        content: '',
        mid: this.$route.query.mid,
        id: this.$route.query.rid
      },
      rules: {
        title: [
          { required: true, message: 'Enter your title', trigger: 'blur' },
          { min: 3, max: 64, message: 'length from 3 to 32', trigger: 'blur' }
        ],
        content: [
          { required: true, message: 'Enter your content', trigger: 'blur' },
          { min: 3, max: 1024, message: 'length from 3 to 32', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    MovieService.getDetails(this.movieId).then(
      result => {
        this.movie = result
      }
    ).catch(() => {})
    this.getReview()
  },
  methods: {
    getReview () {
      ReviewService.getById(this.reviewId).then(
        res => {
          this.ruleForm.title = res.title
          this.ruleForm.content = res.content
        }
      ).catch(() => {
      })
    },
    submitForm () {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          ReviewService.updateReview(this.ruleForm).then(() => {
            this.$message.success('Submitted, redirecting...')
            // redirect to user center
            this.$router.go(-1)
          }).catch(() => {})
        } else {
          this.$message.error('Form error, please correct it')
          return false
        }
      })
    },
    resetForm () {
      this.$refs['ruleForm'].resetFields()
    }
  }
}
</script>

<style scoped>
  .btn-group {
    margin-top: 20px;
    margin-right: 20px;
    float: right;
  }
</style>
