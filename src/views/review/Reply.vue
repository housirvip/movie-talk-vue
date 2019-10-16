<template>
  <div>
    <el-row>
      <el-col :span="3">
        <user-card :uid="user.uid" :username="user.name"></user-card>
      </el-col>
      <el-col :span="19" :offset="1">
        <h2>
          Good movie
        </h2>
        <p>
          After the recent disappointments from Marvel, notably Thor and the abysmal second instalment of Ghost Rider,
          this was a pleasant experience.
          The special effects are dazzling, the plot is acceptable and the heroes are not making total idiots out of
          themselves just because the director
          wanted some “depth” to their characters. Sure there is a little bickering in between them but not too much to
          distract from the fun.
          I’ve always liked Robert Downey Jr’s portrayal of Tony Stark and his sharp tongue. I did wonder how they where
          going to get the Hulk
          in there since he’s supposed to be uncontrol.
        </p>
      </el-col>
    </el-row>
    <el-row style="font-size: 20px; margin-bottom: 10px">
      Your Reply
    </el-row>
    <el-row>
      <el-input
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 8}"
        placeholder="Input"
        v-model="textInput">
      </el-input>
    </el-row>
    <div style="margin: 20px 0;"></div>
    <el-row>
      <el-col :span="6" :offset="16" style="text-align: right">
        <el-button type="info" size="medium" @click="toMovie">Cancel</el-button>
      </el-col>
      <el-col :span="2" style="text-align: center">
        <el-button type="primary" size="medium" @click="toMovie">Reply</el-button>
      </el-col>
    </el-row>
    <el-row style="font-size: 30px">
      Reply List
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col :span="2">
        <user-card :uid="user.uid" :username="user.name"></user-card>
      </el-col>
      <el-col :span="20" :offset="1">
        <el-row>
          It's a good review.
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-pagination
        @current-change="pageChange"
        @size-change="sizeChange"
        :current-page.sync="currentPage"
        :page-sizes="[5, 10, 20, 40]"
        :page-size="pageSize"
        layout="sizes, prev, pager, next, jumper"
        :total="totalCount">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
import UserCard from '../../components/UserCard'

export default {
  name: 'Reply',
  components: {
    UserCard
  },
  data () {
    return {
      avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      textInput: null,
      currentPage: 1,
      pageSize: 5,
      totalCount: 0,
      reviewId: this.$route.query.rid,
      user: {
        uid: 1,
        name: 'Tony'
      }
    }
  },
  methods: {
    toMovie () {
      this.$router.push({ path: '/movie' })
    },
    pageChange (page) {
      this.currentPage = page
      this.getReviews()
    },
    sizeChange (size) {
      this.pageSize = size
      this.getReviews()
    }
  }
}
</script>

<style scoped>

</style>
