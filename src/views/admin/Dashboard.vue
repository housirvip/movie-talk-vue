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
  </div>
</template>

<script>
import { UserService } from '../../services/api'

export default {
  name: 'AdminDashboard',
  data () {
    return {
      userRecord: {}
    }
  },
  computed: {
    user: function () {
      return this.$store.state.global.user
    }
  },
  mounted () {
    this.getUserRecord()
  },
  methods: {
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
