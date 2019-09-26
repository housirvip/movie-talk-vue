<template>
  <div class="modifyPasswd">
    <el-container>
      <el-main>
        <el-row gutter="20">
            <el-col span="4" style="text-align: right">
              New password:
            </el-col>
            <el-col span="4">
              <el-input v-model="password" :placeholder="password" show-password></el-input>
            </el-col>
        </el-row>
        <p></p>
        <el-row gutter="20">
          <el-col span="4" style="text-align: right">
            input password again:
          </el-col>
          <el-col span="4">
            <el-input v-model="password2" :placeholder="password2" show-password></el-input>
          </el-col>
        </el-row>
        <p></p>
        <el-row>
          <el-col span="4" offset="4">
            <el-button type="primary" @click="submit">submit</el-button>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'ModifyPassword',
  data () {
    return {
      password: '',
      password2: ''
    }
  },
  methods: {
    submit () {

    }
  }
}
</script>

<style scoped>

</style>
