<template>
  <div class="dashboard">
    hello {{user.username}}, this is Dashboard page
    <el-container>
      <el-main>
        <el-row>
          <el-col span="4">
            <el-row>
              <el-avatar shape="square" :size="100" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
            </el-row>
            <el-row>
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :limit="1">
                <el-button type="primary">submit avatar</el-button>
              </el-upload>
            </el-row>
          </el-col>
          <el-col span="12">
            <el-row gutter="20">
              <el-col span="4" style="text-align: right">
                Nickname:
              </el-col>
              <el-col span="4">
                {{nickName}}
              </el-col>
            </el-row>
            <p></p>
            <el-row gutter="20">
              <el-col span="4" style="text-align: right">
                Phone:
              </el-col>
              <el-col span="4">
                {{phone}}
              </el-col>
            </el-row>
            <p></p>
            <el-row gutter="20">
              <el-col span="4" style="text-align: right">
                Email:
              </el-col>
              <el-col span="4">
                {{email}}
              </el-col>
            </el-row>
            <p></p>
            <el-row gutter="20">
              <el-col span="4" style="text-align: right">
                Sex:
              </el-col>
              <el-col span="4">
                {{sex}}
              </el-col>
            </el-row>
            <p></p>
            <el-row gutter="20">
              <el-col span="4" style="text-align: right">
                Nation:
              </el-col>
              <el-col span="4">
                {{nation}}
              </el-col>
            </el-row>
            <p></p>
            <el-row gutter="20">
              <el-col span="4" style="text-align: right">
                Job:
              </el-col>
              <el-col span="4">
                {{job}}
              </el-col>
            </el-row>
            <p></p>
            <el-row gutter="20">
              <el-col span="4" style="text-align: right">
                Birth:
              </el-col>
              <el-col span="4">
                {{birth}}
              </el-col>
            </el-row>
            <p></p>
            <el-row>
              <el-col span="4" offset="4" style="text-align: left">
                <el-button type="primary" @click="toModify">Modify</el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
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
  computed: {
    user: function () {
      return this.$store.state.global.user
    }
  },
  methods: {
    toModify () {
      this.$router.push('/user-center/modifyUsrInfo')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
