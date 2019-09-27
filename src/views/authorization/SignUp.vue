<template>
  <div class="sign-up">
    <el-row>
      <el-col :span="8" :offset="2">
        <el-page-header @back="goBack" content="Sign Up Page"></el-page-header>
        <el-divider></el-divider>
        <el-form label-position="right" label-width="100px" :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item label="Email" required prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="Phone" required prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="Username" required prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="Password" required prop="password" >
            <el-input v-model="ruleForm.password" type="password"></el-input>
          </el-form-item>
          <el-form-item label="Confirm" required prop="confirmPass" >
            <el-input v-model="ruleForm.confirmPass" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">Sign Up</el-button>
            <el-button @click="resetForm">Reset</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="8" :offset="4">
        <movie-list></movie-list>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MovieList from '../../components/MovieList'
import { AccountService } from '../../services/api'

export default {
  name: 'SignUp',
  components: {
    MovieList
  },
  data () {
    let validateConfirmPass = (rule, value, callback) => {
      if (value !== this.ruleForm.password) {
        callback(new Error('Confirm again'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        phone: '',
        email: '',
        username: '',
        password: '',
        confirmPass: ''
      },
      rules: {
        phone: [
          { required: true, message: 'Enter your phone', trigger: 'blur' },
          { min: 9, max: 15, message: 'length from 9 to 15', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Enter your email', trigger: 'blur' },
          { min: 3, max: 32, message: 'length from 3 to 32', trigger: 'blur' }
        ],
        username: [
          { required: true, message: 'Enter your username', trigger: 'blur' },
          { min: 3, max: 32, message: 'length from 3 to 32', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Enter your password', trigger: 'blur' },
          { min: 3, max: 32, message: 'length from 3 to 32', trigger: 'blur' }
        ],
        confirmPass: [
          { required: true, message: 'Confirm your password', trigger: 'blur' },
          { validator: validateConfirmPass, trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    submitForm () {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          AccountService.register(this.ruleForm).then(() => {
            this.$message.success('Sign up success, redirecting...')
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
  .sign-up {
    margin-top: 20px;
  }
</style>
