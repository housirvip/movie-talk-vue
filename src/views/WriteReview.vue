<template>
  <div class="review">
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="6">
            <el-row>
              <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"></el-image>
            </el-row>
            <el-row>
              The Avenger
            </el-row>
          </el-col>
          <el-col :span="18">
            <el-row style="font-size: 30px">
              Write your review
            </el-row>
            <div style="margin: 20px 0;"></div>
            <el-row style="font-size: 20px">
              Title:
            </el-row>
            <el-row>
              <el-input v-model="title" placeholder="Input"></el-input>
            </el-row>
            <div style="margin: 20px 0;"></div>
            <el-row style="font-size: 20px">
              Text:
            </el-row>
            <el-row>
              <el-input
                type="textarea"
                :autosize="{ minRows: 8, maxRows: 12}"
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
                <el-button type="primary" size="medium" @click="toMovie">Submit</el-button>
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
  name: 'WriteReview',
  data () {
    return {
      title: '',
      textInput: ''
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
