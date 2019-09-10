<template>
  <div class="sign-up">
    <el-row>
      <el-col :span="8" :offset="2">
        <el-page-header @back="goBack" content="Sign Up Page"></el-page-header>
        <el-divider></el-divider>
        <el-form label-position="right" label-width="100px" :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item label="email" required prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="username" required prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="password" required prop="password" >
            <el-input v-model="ruleForm.password" type="password"></el-input>
          </el-form-item>
          <el-form-item label="password confirm" required prop="password" >
            <el-input v-model="ruleForm.passRepeat" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">Sign Up</el-button>
            <el-button @click="resetForm('ruleForm')">Reset</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="8" :offset="4">
        <MovieLIst></MovieLIst>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MovieLIst from '../../components/MovieLIst'

export default {
  name: 'SignUp',
  components: {
    MovieLIst
  },
  data () {
    return {
      ruleForm: {
        email: '',
        username: '',
        password: '',
        passRepeat: ''
      },
      rules: {
        username: [
          { required: true, message: 'Enter your username', trigger: 'blur' },
          { min: 3, max: 32, message: 'length from 3 to 32', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Enter your password', trigger: 'blur' },
          { min: 3, max: 32, message: 'length from 3 to 32', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .sign-up {
    margin-top: 20px;
  }
</style>
