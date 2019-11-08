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
          <p>{{systemRecord.repliesTotal}}</p>
        </el-card>
      </el-col>
      <el-col class="tag-card-wrapper">
        <el-card class="tag-card">
          <p>Reports / Unsolved</p>
          <p>{{systemRecord.reportsTotal}} / 4</p>
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
        columns: ['Date', 'Visitor', 'Liker', 'Ratio'],
        rows: [
          { 'Date': '11/1', 'Visitor': 1393, 'Liker': 1093, 'Ratio': 0.32 },
          { 'Date': '11/2', 'Visitor': 3530, 'Liker': 3230, 'Ratio': 0.26 },
          { 'Date': '11/3', 'Visitor': 2923, 'Liker': 2623, 'Ratio': 0.76 },
          { 'Date': '11/4', 'Visitor': 1723, 'Liker': 1423, 'Ratio': 0.49 },
          { 'Date': '11/5', 'Visitor': 3792, 'Liker': 3492, 'Ratio': 0.323 },
          { 'Date': '11/6', 'Visitor': 4593, 'Liker': 4293, 'Ratio': 0.78 }
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
  },
  methods: {
    getUserRecord () {
      this.systemRecord = {
        userTotal: 6,
        reviewTotal: 15,
        repliesTotal: 12,
        reportsTotal: 8
      }
      // UserService.systemRecord().then(
      //   res => {
      //     this.systemRecord = res
      //   }
      // ).catch(() => {
      // })
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
