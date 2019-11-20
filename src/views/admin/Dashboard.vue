<template>
  <div class="dashboard">
    <el-row style="margin-bottom: 20px" type="flex" justify="center">
      <el-col class="tag-card-wrapper">
        <el-card class="tag-card" shadow="hover">
          <p>Users</p>
          <p>{{systemRecord.userTotal}}</p>
        </el-card>
      </el-col>
      <el-col class="tag-card-wrapper">
        <el-card class="tag-card">
          <p>Reviews</p>
          <p>{{systemRecord.reviewTotal}}</p>
        </el-card>
      </el-col>
      <el-col class="tag-card-wrapper">
        <el-card class="tag-card">
          <p>Replies</p>
          <p>{{systemRecord.replyTotal}}</p>
        </el-card>
      </el-col>
      <el-col class="tag-card-wrapper">
        <el-card class="tag-card">
          <p>Reports / Unsolved</p>
          <p>{{systemRecord.reportTotal}} / {{systemRecord.reportUnsolveTotal}}</p>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <ve-line :data="chartData"></ve-line>
    </el-row>
    <el-row>
      <el-col :span="12">
        <ve-radar :data="chartData"></ve-radar>
      </el-col>
      <el-col :span="12">
        <ve-pie :data="chartData"></ve-pie>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
import VePie from 'v-charts/lib/pie.common'
import VeRadar from 'v-charts/lib/radar.common'
import { UserService } from '../../services/api'

export default {
  name: 'AdminDashboard',
  components: {
    VeLine,
    VePie,
    VeRadar
  },
  data () {
    return {
      systemRecord: {},
      chartData: {
        columns: ['date', 'visitor', 'liker', 'ratio'],
        rows: []
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
  },
  methods: {
    getUserRecord () {
      UserService.adminRecord().then(
        res => {
          this.systemRecord = res
          this.chartData.rows = res.webDataRecordList
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
