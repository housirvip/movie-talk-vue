<template>
  <div class="home">
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="6" offset="9">
            <el-input placeholder="search bar" v-model="input3" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" @click="open"></el-button>
            </el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="9" offset="2">
            <el-table
              :data="tableData_movie"
              style="width: 100%">
              <el-table-column
                prop="movie"
                label="New Movies List">
              </el-table-column>
            </el-table>
          </el-col>
          <el-col :span="9" offset="2">
            <el-table
              :data="tableData_review"
              style="width: 100%">
              <el-table-column
                prop="review"
                label="Hot Reviews List">
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4" offset="2">
            <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
          </el-col>
          <el-col :span="18">
            <el-row>
              <el-col :span="4" offset="2">
                <el-avatar shape="square" :size="100" :src="avatar"></el-avatar>
              </el-col>
            </el-row>
            <el-row>asdasdasdasdasdasdasdasdasd</el-row>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    // Header
  },
  data () {
    return {
      checked: true,
      input3: '',
      avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      tableData_movie: [{
        movie: 'The avenger test to push'
      }, {
        movie: 'The avenger test'
      }, {
        movie: 'The avenger 1111'
      }, {
        movie: 'The avenger'
      }, {
        movie: 'The avenger'
      }, {
        movie: 'The avenger'
      }, {
        movie: 'The avenger'
      }, {
        movie: 'The avenger'
      }, {
        movie: 'The avenger'
      }, {
        movie: 'The avenger'
      }, {
        movie: 'The avenger'
      }],
      tableData_review: [{
        review: 'I love you three thousand'
      }, {
        review: 'I love you three thousand'
      }, {
        review: 'I love you three thousand'
      }, {
        review: 'I love you three thousand'
      }, {
        review: 'I love you three thousand'
      }, {
        review: 'I love you three thousand'
      }, {
        review: 'I love you three thousand'
      }, {
        review: 'I love you three thousand'
      }, {
        review: 'I love you three thousand'
      }, {
        review: 'I love you three thousand'
      }, {
        review: 'I love you three thousand'
      }]
    }
  },
  methods: {
    open () {
      // asdads

    }
  },
  created () {
  },
  destroyed () {
  }
}
</script>

<style>
</style>
