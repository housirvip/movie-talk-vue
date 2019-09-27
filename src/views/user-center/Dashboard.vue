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
          <el-button type="primary" @click="modifyUserInfo = true">Modify Info</el-button>
          <el-button type="primary" @click="modifyPassword = true">Modify Password</el-button>
        </el-row>
      </el-col>
    </el-row>
    <el-dialog title="Change User Info" :visible.sync="modifyUserInfo" width="30%" top="6vh">
      <el-form :model="infoForm" :rules="infoRules" ref="infoForm">
        <el-form-item label="NickName" label-width="5" prop="nickname">
          <el-input v-model="infoForm.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Sex" label-width="5" prop="sex">
          <el-radio-group v-model="infoForm.sex" style="width: 100%">
            <el-radio-button label="Male" value="Male"></el-radio-button>
            <el-radio-button label="Female" value="Female"></el-radio-button>
            <el-radio-button label="Conceal" value="Conceal"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="State" label-width="5" prop="state">
          <el-select v-model="infoForm.state" placeholder="请选择活动区域" value="" style="width: 100%">
            <el-option value="Texas"></el-option>
            <el-option value="California"></el-option>
            <el-option value="Washington"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Job" label-width="5" prop="job">
          <el-input v-model="infoForm.job" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Birthday" label-width="5" prop="birthday">
          <el-date-picker type="date" placeholder="选择日期" v-model="infoForm.birthday" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="modifyUserInfo = false">取 消</el-button>
        <el-button type="primary" @click="updateUserInfo">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="Change Password" :visible.sync="modifyPassword" width="30%" top="6vh">
      <el-form :model="passForm" :rules="passRules" ref="passForm">
        <el-form-item label="Origin Password" label-width="5" prop="password">
          <el-input v-model="passForm.password" autocomplete="off" type="password"></el-input>
        </el-form-item>
        <el-form-item label="New Password" label-width="5" prop="newPass">
          <el-input v-model="passForm.newPass" autocomplete="off" type="password"></el-input>
        </el-form-item>
        <el-form-item label="Confirm Password" label-width="5" prop="confirmPass">
          <el-input v-model="passForm.confirmPass" autocomplete="off" type="password"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="modifyPassword = false">取 消</el-button>
        <el-button type="primary" @click="updatePassword">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { UserService } from '../../services/api'

export default {
  name: 'Dashboard',
  data () {
    let validateConfirmPass = (rule, value, callback) => {
      if (value !== this.passForm.newPass) {
        callback(new Error('Confirm again'))
      } else {
        callback()
      }
    }
    return {
      job: 'student',
      sex: 'male',
      birth: '1987/11/22',
      nation: 'US',
      modifyUserInfo: false,
      modifyPassword: false,
      infoForm: {
        sex: '',
        state: '',
        job: '',
        birthday: ''
      },
      passForm: {
        password: '',
        newPass: '',
        confirmPass: ''
      },
      infoRules: {
        nickname: [
          { required: true, message: 'Enter your nickname', trigger: 'blur' },
          { min: 3, max: 32, message: 'length from 3 to 32', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: 'Select your sex', trigger: 'blur' },
          { min: 3, max: 32, message: 'length from 3 to 32', trigger: 'blur' }
        ],
        state: [
          { required: true, message: 'Select your state', trigger: 'blur' }
        ],
        job: [
          { required: true, message: 'Enter your job', trigger: 'blur' },
          { min: 3, max: 32, message: 'length from 3 to 32', trigger: 'blur' }
        ],
        birthday: [
          { required: true, message: 'Select your birthday', trigger: 'blur' }
        ]
      },
      passRules: {
        password: [
          { required: true, message: 'Enter your origin password', trigger: 'blur' },
          { min: 3, max: 32, message: 'length from 3 to 32', trigger: 'blur' }
        ],
        newPass: [
          { required: true, message: 'Enter your new password', trigger: 'blur' },
          { min: 3, max: 32, message: 'length from 3 to 32', trigger: 'blur' }
        ],
        confirmPass: [
          { required: true, message: 'Confirm your new password', trigger: 'blur' },
          { validator: validateConfirmPass, trigger: 'change' }
        ]
      }
    }
  },
  computed: {
    user: function () {
      return this.$store.state.global.user
    }
  },
  methods: {
    updateUserInfo () {
      console.log(this.infoForm)
      this.$refs['infoForm'].validate((valid) => {
        if (valid) {
          this.modifyUserInfo = false
        } else {
          this.$message.error('Form error, please correct it')
          return false
        }
      })
    },
    resetInfoForm () {
      this.$refs['infoForm'].resetFields()
    },
    updatePassword () {
      console.log(this.passForm)
      this.$refs['passForm'].validate((valid) => {
        if (valid) {
          UserService.passChange(this.passForm).then(res => {
            this.modifyPassword = false
            this.resetPassForm()
            this.$message.success('Password Changed')
          }).catch(() => {})
        } else {
          this.$message.error('Form error, please correct it')
          return false
        }
      })
    },
    resetPassForm () {
      this.$refs['passForm'].resetFields()
    }
  }
}
</script>

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
