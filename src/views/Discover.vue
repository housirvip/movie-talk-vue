<template>
  <div class="Discover">
    <el-main>
      <el-row>
        <el-col :span="6" offset="12">
          <el-input placeholder="Movie Search" v-model="MovieSearchInput" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" @click="MovieSearch"></el-button>

          </el-input>

        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
export default {
  name: 'Discover',
  data () {
    return {
      MovieSearchInput: ''
    }
  },
  methods: {
    MovieSearch () {
      // Todo Search Movies according input
    }
  }
}
</script>

<style>

</style>
