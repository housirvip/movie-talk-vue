<template>
  <div class="login">
    <el-row>
      <el-col :span="8" :offset="2">
        <el-page-header @back="goBack" content="Login Page"></el-page-header>
        <el-divider></el-divider>
        <el-form label-position="right" label-width="80px" :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item label="account" required prop="account">
            <el-input v-model="ruleForm.account"></el-input>
          </el-form-item>
          <el-form-item label="password" required prop="password" >
            <el-input v-model="ruleForm.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">Login</el-button>
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
import { AccountService, UserService } from '../../services/api'

export default {
  name: 'Login',
  components: {
    MovieLIst
  },
  data () {
    return {
      ruleForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, message: 'Enter your account', trigger: 'blur' },
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
          AccountService.login(this.ruleForm).then(() => {
            this.$message.success('Login success, redirecting...')
            // if logged in, get detail from server
            UserService.detail()
            // redirect to user center
            this.$router.push({ path: '/user-center' })
          }).catch(() => {})
        } else {
          this.$message.error('Form error, please correct it')
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
  .login {
    margin-top: 20px;
  }
</style>
