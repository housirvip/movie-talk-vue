<template>
  <div class="dashboard">
    <el-row style="margin-bottom: 20px" type="flex" justify="center">
      <el-col class="tag-card-wrapper">
        <el-card class="tag-card" shadow="hover">
          <p>Likes</p>
          <p>123</p>
        </el-card>
      </el-col>
      <el-col class="tag-card-wrapper">
        <el-card class="tag-card">
          <p>Followers</p>
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
          <p>Comments</p>
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
    <el-dialog title="Change User Info" :visible.sync="modifyUserInfo" width="30%" top="6vh">
      <el-form :model="ruleForm">
        <el-form-item label="NickName" label-width="5">
          <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Sex" label-width="5">
          <el-radio-group v-model="ruleForm.sex" style="width: 100%">
            <el-radio-button label="Male" value="Male"></el-radio-button>
            <el-radio-button label="Female" value="Female"></el-radio-button>
            <el-radio-button label="Conceal" value="Conceal"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="State" label-width="5">
          <el-select v-model="ruleForm.state" placeholder="请选择活动区域" value="" style="width: 100%">
            <el-option value="Texas"></el-option>
            <el-option value="California"></el-option>
            <el-option value="Washington"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Job" label-width="5">
          <el-input v-model="ruleForm.job" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Birthday" label-width="5">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birthday" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="modifyUserInfo = false">取 消</el-button>
        <el-button type="primary" @click="updateUserInfo">确 定</el-button>
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
      ruleForm: {},
      cities: [{
        label: 'asd1',
        key: 'asd'
      }, {
        label: 'asd2',
        key: 'asd'
      }, {
        label: 'asd3',
        key: 'asd'
      }]
    }
  },
  computed: {
    user: function () {
      return this.$store.state.global.user
    }
  },
  methods: {
    updateUserInfo () {
      console.log(this.ruleForm)
      this.modifyUserInfo = false
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
