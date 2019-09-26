<template>
  <el-container>
    <el-main>
      <el-row>
        <el-page-header @back="goBack" content="Modify User Info"></el-page-header>
        <p></p>
        <el-col span="12">
          <el-row gutter="20">
            <el-col span="4" style="text-align: right">
              Nickname:
            </el-col>
            <el-col span="4">
              <el-input v-model="nickName" :placeholder="nickName"></el-input>
            </el-col>
          </el-row>
          <p></p>
          <el-row gutter="20">
            <el-col span="4" style="text-align: right">
              Phone:
            </el-col>
            <el-col span="4">
              <el-input v-model="phone" :placeholder="phone"></el-input>
            </el-col>
          </el-row>
          <p></p>
          <el-row gutter="20">
            <el-col span="4" style="text-align: right">
              Email:
            </el-col>
            <el-col span="4">
              <el-input v-model="email" :placeholder="email"></el-input>
            </el-col>
          </el-row>
          <p></p>
          <el-row gutter="20">
            <el-col span="4" style="text-align: right">
              Sex:
            </el-col>
            <el-col span="4">
              <el-input v-model="sex" :placeholder="sex"></el-input>
            </el-col>
          </el-row>
          <p></p>
          <el-row gutter="20">
            <el-col span="4" style="text-align: right">
              Nation:
            </el-col>
            <el-col span="4">
              <el-input v-model="nation" :placeholder="nation"></el-input>
            </el-col>
          </el-row>
          <p></p>
          <el-row gutter="20">
            <el-col span="4" style="text-align: right">
              Job:
            </el-col>
            <el-col span="4">
              <el-input v-model="job" :placeholder="job"></el-input>
            </el-col>
          </el-row>
          <p></p>
          <el-row gutter="20">
            <el-col span="4" style="text-align: right">
              Birth:
            </el-col>
            <el-col span="4">
              <el-input v-model="birth" :placeholder="birth"></el-input>
            </el-col>
          </el-row>
          <p></p>
          <el-row>
            <el-col span="4" offset="4" style="text-align: left">
              <el-button type="primary" @click="save">save</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'ModifyUserInfo',
  data () {
    return {
      nickName: 'asdasd',
      phone: '12345678',
      email: '123456@qq.com',
      job: 'student',
      sex: 'male',
      birth: '1992/11/22',
      nation: 'US'
    }
  },
  methods: {
    save () {
      this.$router.push('/user-center/dashboard')
    },
    goBack () {
      this.$router.push('/user-center/dashboard')
    }
  }
}
</script>

<style scoped>

</style>
