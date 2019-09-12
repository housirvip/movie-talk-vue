<template>
  <div class="searchmovie">
    <el-container>
      <el-main>
        <div style="margin: 20px 0;">
          <el-row>
            <el-col :span="4" :offset="21">
              <el-button @click="usercenter">User Center</el-button>
            </el-col>
          </el-row>
          <el-row>
            <div style="margin: 30px 0;"></div>
          </el-row>
          <el-row>
            <el-col  :span="4" :offset="10" style="font-size: 30px">
              Search Movie
            </el-col>
          </el-row>
          <el-row>
            <div style="margin: 50px 0;"></div>
          </el-row>
          <el-row>
            <el-col :span="6" :offset="9">
              <el-input placeholder="Movie Search" v-model="movieSearchInput" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="moviesearch"></el-button>
              </el-input>
            </el-col>
          </el-row>
          <el-row>
            <div style="margin: 50px 0;"></div>
          </el-row>
          <el-row>
            <el-col :span="4" :offset="0.5">
              <el-row>
                <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"></el-image>
              </el-row>
              <el-row>
                The Avenger
              </el-row>
            </el-col>
            <el-col :span="4" :offset="1">
              <el-row>
                <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"></el-image>
              </el-row>
              <el-row>
                The Avenger
              </el-row>
            </el-col>
            <el-col :span="4" :offset="1">
              <el-row>
                <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"></el-image>
              </el-row>
              <el-row>
                The Avenger
              </el-row>
            </el-col>
            <el-col :span="4" :offset="1">
              <el-row>
                <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"></el-image>
              </el-row>
              <el-row>
                The Avenger
              </el-row>
            </el-col>
            <el-col :span="4" :offset="1">
              <el-row>
                <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"></el-image>
              </el-row>
              <el-row>
                The Avenger
              </el-row>
            </el-col>
          </el-row>
          <el-row>
            <div style="margin: 80px 0;"></div>
          </el-row>
          <el-row>
            <el-col :span="4" :offset="0.5">
              <el-row>
                <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"></el-image>
              </el-row>
              <el-row>
                The Avenger
              </el-row>
            </el-col>
            <el-col :span="4" :offset="1">
              <el-row>
                <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"></el-image>
              </el-row>
              <el-row>
                The Avenger
              </el-row>
            </el-col>
            <el-col :span="4" :offset="1">
              <el-row>
                <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"></el-image>
              </el-row>
              <el-row>
                The Avenger
              </el-row>
            </el-col>
            <el-col :span="4" :offset="1">
              <el-row>
                <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"></el-image>
              </el-row>
              <el-row>
                The Avenger
              </el-row>
            </el-col>
            <el-col :span="4" :offset="1">
              <el-row>
                <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"></el-image>
              </el-row>
              <el-row>
                The Avenger
              </el-row>
            </el-col>
          </el-row>
          <el-row>
            <div style="margin: 40px 0;"></div>
          </el-row>
          <el-row>
            <el-col :offset="10">
              <div class="block">
                <el-pagination
                  layout="prev, pager, next"
                  :total="50">
                </el-pagination>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'SearchMovie',
  methods: {
    usercenter () {
      this.$router.push({ path: 'user-center' })
    }
  }
}

</script>

<style scoped>

</style>
