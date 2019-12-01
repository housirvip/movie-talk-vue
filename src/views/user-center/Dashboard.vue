<template>
  <div class="dashboard">
    <el-row style="margin-bottom: 20px" type="flex" justify="center">
      <el-col class="tag-card-wrapper">
        <el-card class="tag-card" shadow="hover">
          <p>Likes</p>
          <p>{{userRecord.likeTotal}}</p>
        </el-card>
      </el-col>
      <el-col class="tag-card-wrapper">
        <el-card class="tag-card">
          <p>Followers</p>
          <p>{{userRecord.followTotal}}</p>
        </el-card>
      </el-col>
      <el-col class="tag-card-wrapper">
        <el-card class="tag-card">
          <p>Reviews</p>
          <p>{{userRecord.reviewTotal}}</p>
        </el-card>
      </el-col>
      <el-col class="tag-card-wrapper">
        <el-card class="tag-card">
          <p>Comments</p>
          <p>{{userRecord.replyTotal}}</p>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3" :offset="2">
        <el-card shadow="hover" class="user-card" :body-style="{ padding: '0px' }">
          <el-image
            :src="avatar"/>
          <el-upload
            ref="upload"
            class="upload-demo"
            action=""
            name="upFile"
            :http-request="uploadAvatar"
            :limit="1"
            :before-upload="beforeAvatarUpload"
            :show-file-list="false">
            <el-button type="text">click to change</el-button>
          </el-upload>
        </el-card>
      </el-col>
      <el-col :span="14" :offset="3">
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
            {{user.sex}}
          </el-col>
        </el-row>
        <p></p>
        <el-row :gutter="20">
          <el-col :span="4" style="text-align: right">
            State:
          </el-col>
          <el-col :span="4">
            {{user.state}}
          </el-col>
        </el-row>
        <p></p>
        <el-row :gutter="20">
          <el-col :span="4" style="text-align: right">
            Job:
          </el-col>
          <el-col :span="4">
            {{user.job}}
          </el-col>
        </el-row>
        <p></p>
        <el-row :gutter="20">
          <el-col :span="4" style="text-align: right">
            Birthday:
          </el-col>
          <el-col :span="8">
            {{user.birthday}}
          </el-col>
        </el-row>
        <p></p>
        <el-row>
          <el-button type="primary" @click="modifyUserInfoDialog">Modify Info</el-button>
          <el-button type="primary" @click="modifyPassword = true">Modify Password</el-button>
        </el-row>
      </el-col>
    </el-row>
    <el-dialog title="Change User Info" :visible.sync="modifyUserInfo" width="30%" top="6vh">
      <el-form :model="infoForm" :rules="infoRules" ref="infoForm">
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
          <el-date-picker type="datetime" placeholder="Select Date" v-model="infoForm.birthday" default-time="12:00:00"
                          format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss"
                          style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="modifyUserInfo = false">Cancel</el-button>
        <el-button type="primary" @click="updateUserInfo">Submit</el-button>
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
        <el-button @click="modifyPassword = false">Cancel</el-button>
        <el-button type="primary" @click="updatePassword">Submit</el-button>
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
      userRecord: {},
      avatar: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
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
  mounted () {
    this.getUserRecord()
    if (this.user.avatar) {
      this.avatar = 'http://35.193.61.114/avatar/' + this.user.avatar
    }
  },
  methods: {
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('The file type must be JPG!')
      }
      if (!isLt2M) {
        this.$message.error('The file size must less than 2MB!')
      }
      return isJPG && isLt2M
    },
    uploadAvatar (file) {
      UserService.uploadAvatar(file.file).then(res => {
        UserService.detail().then(res => {
          this.avatar = 'http://35.193.61.114/avatar/' + this.user.avatar
        })
        this.$message.success('User avatar Changed')
      }).catch(() => {
      })
      this.$refs.upload.clearFiles()
    },
    modifyUserInfoDialog: function () {
      this.modifyUserInfo = true
      let user = this.user
      let form = this.infoForm
      Object.keys(form).forEach(function (key) {
        form[key] = user[key]
      })
    },
    updateUserInfo () {
      this.$refs['infoForm'].validate((valid) => {
        if (valid) {
          UserService.infoChange(this.infoForm).then(res => {
            this.modifyUserInfo = false
            this.resetInfoForm()
            UserService.detail()
            this.$message.success('User Info Changed')
          }).catch(() => {
          })
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
      this.$refs['passForm'].validate((valid) => {
        if (valid) {
          UserService.passChange(this.passForm).then(res => {
            this.modifyPassword = false
            this.resetPassForm()
            this.$message.success('Password Changed')
          }).catch(() => {
          })
        } else {
          this.$message.error('Form error, please correct it')
          return false
        }
      })
    },
    resetPassForm () {
      this.$refs['passForm'].resetFields()
    },
    getUserRecord () {
      UserService.userRecord().then(
        res => {
          this.userRecord = res
        }
      ).catch(() => {
      })
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
