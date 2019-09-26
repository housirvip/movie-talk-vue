<template>
  <div>
    <el-row>
      <el-col :span="3">
        <el-row>
          <el-avatar shape="square" :size="100" :src="avatar"></el-avatar>
        </el-row>
        <el-row>
          Tom
        </el-row>
      </el-col>
      <el-col :span="21">
        <el-row style="font-size: 20px;text-align: left;">
          Good movie
        </el-row>
        <el-row>
          After the recent disappointments from Marvel, notably Thor and the abysmal second instalment of Ghost Rider,
          this was a pleasant experience.
          The special effects are dazzling, the plot is acceptable and the heroes are not making total idiots out of
          themselves just because the director
          wanted some “depth” to their characters. Sure there is a little bickering in between them but not too much to
          distract from the fun.
          I’ve always liked Robert Downey Jr’s portrayal of Tony Stark and his sharp tongue. I did wonder how they where
          going to get the Hulk
          in there since he’s supposed to be uncontrol.
        </el-row>
      </el-col>
    </el-row>
    <div style="margin: 20px 0;"></div>
    <el-row style="font-size: 20px">
      Write your reply:
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
      <el-col :span="6" offset="16" style="text-align: right">
        <el-button type="info" size="medium" @click="toMovie">Cancel</el-button>
      </el-col>
      <el-col :span="2" style="text-align: center">
        <el-button type="primary" size="medium" @click="toMovie">Reply</el-button>
      </el-col>
    </el-row>
    <div style="margin: 20px 0;"></div>
    <el-row style="font-size: 30px">
      Replys:
    </el-row>
    <div style="margin: 20px 0;"></div>
    <el-row>
      <el-col :span="3">
        <el-row>
          <el-avatar shape="square" :size="100" :src="avatar"></el-avatar>
        </el-row>
        <el-row>
          Tom
        </el-row>
      </el-col>
      <el-col :span="21">
        <el-row>
          It's a good review.
        </el-row>
      </el-col>
    </el-row>
    <div style="margin: 20px 0;"></div>
    <el-row>
      <el-col :span="3">
        <el-row>
          <el-avatar shape="square" :size="100" :src="avatar"></el-avatar>
        </el-row>
        <el-row>
          Tom
        </el-row>
      </el-col>
      <el-col :span="21">
        <el-row>
          It's a good review.
        </el-row>
      </el-col>
    </el-row>
    <div style="margin: 20px 0;"></div>
    <el-row>
      <el-col :span="3">
        <el-row>
          <el-avatar shape="square" :size="100" :src="avatar"></el-avatar>
        </el-row>
        <el-row>
          Tom
        </el-row>
      </el-col>
      <el-col :span="21">
        <el-row>
          It's a good review.
        </el-row>
      </el-col>
    </el-row>
    <el-pagination layout="prev, pager, next"
                   :total="50">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'Reply',
  data () {
    return {
      avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      textInput: null
    }
  },
  methods: {
    toMovie () {
      this.$router.push({ path: '/movie' })
    }
  }
}
</script>

<style scoped>

</style>
