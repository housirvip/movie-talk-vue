<template>
  <div class="dashboard">
    <el-row style="margin-bottom: 20px" type="flex" justify="center">
      <el-col class="tag-card-wrapper">
        <el-card class="tag-card" shadow="hover">
          <p>Reviews</p>
          <p>123</p>
        </el-card>
      </el-col>
      <el-col class="tag-card-wrapper">
        <el-card class="tag-card">
          <p>Reviews</p>
          <p>123</p>
        </el-card>
      </el-col>
      <el-col class="tag-card-wrapper">
        <el-card class="tag-card">
          <p>Reviews</p>
          <p>123</p>
        </el-card>
      </el-col>
      <el-col class="tag-card-wrapper">
        <el-card class="tag-card">
          <p>Reviews</p>
          <p>123</p>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="1">
        <el-card shadow="hover" class="user-card" :body-style="{ padding: '0px' }">
          <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"/>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :limit="1">
              <el-button type="text">click to change</el-button>
            </el-upload>
        </el-card>
      </el-col>
      <el-col :span="14" :offset="4">
        <el-row :gutter="20">
          <el-col :span="4" style="text-align: right">
            Username:
          </el-col>
          <el-col :span="4">
            {{user.username}}
          </el-col>
        </el-row>
        <p></p>
        <el-row :gutter="20">
          <el-col :span="4" style="text-align: right">
            Phone:
          </el-col>
          <el-col :span="4">
            {{user.phone}}
          </el-col>
        </el-row>
        <p></p>
        <el-row :gutter="20">
          <el-col :span="4" style="text-align: right">
            Email:
          </el-col>
          <el-col :span="4">
            {{user.email}}
          </el-col>
        </el-row>
        <p></p>
        <el-row :gutter="20">
          <el-col :span="4" style="text-align: right">
            Sex:
          </el-col>
          <el-col :span="4">
            {{sex}}
          </el-col>
        </el-row>
        <p></p>
        <el-row :gutter="20">
          <el-col :span="4" style="text-align: right">
            Nation:
          </el-col>
          <el-col :span="4">
            {{nation}}
          </el-col>
        </el-row>
        <p></p>
        <el-row :gutter="20">
          <el-col :span="4" style="text-align: right">
            Job:
          </el-col>
          <el-col :span="4">
            {{job}}
          </el-col>
        </el-row>
        <p></p>
        <el-row :gutter="20">
          <el-col :span="4" style="text-align: right">
            Birth:
          </el-col>
          <el-col :span="4">
            {{birth}}
          </el-col>
        </el-row>
        <p></p>
        <el-row>
          <el-col :span="4" :offset="4" style="text-align: left">
            <el-button type="primary" @click="modifyUserInfo = true">Modify</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-dialog title="收货地址" :visible.sync="modifyUserInfo">
      <el-form :model="ruleForm">
        <el-form-item label="活动名称" label-width="5">
          <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" label-width="5">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域" value="">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="modifyUserInfo = false">取 消</el-button>
        <el-button type="primary" @click="modifyUserInfo = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      job: 'student',
      sex: 'male',
      birth: '1987/11/22',
      nation: 'US',
      modifyUserInfo: false,
      ruleForm: {}
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
  .tag-card-wrapper {
    .tag-card {
      margin: 1em;
      color: #fff;
      p {
        margin: 0;
      }
      p:last-child {
        font-size: 25px;
      }
    }
  }
  .tag-card-wrapper:nth-child(1) {
    .tag-card {
      background-color: #e84c3d;
    }
  }
  .tag-card-wrapper:nth-child(2) {
    .tag-card {
      background-color: #1abc9c;
    }
  }
  .tag-card-wrapper:nth-child(3) {
    .tag-card {
      background-color: #3598db;
    }
  }
  .tag-card-wrapper:nth-child(4) {
    .tag-card {
      background-color: #9a59b5;
    }
  }
</style>
