<template>
  <div class="search-bar">
    <el-input placeholder="Search Here" v-model="searchCriteria" @keydown.enter.native="search">
      <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      searchCriteria: ''
    }
  },
  created () {
    this.searchCriteria = this.$route.query.searchCriteria
  },
  methods: {
    search () {
      if (this.$route.path.startsWith('/movie/search') && this.$route.query.searchCriteria === this.searchCriteria) {
        this.$emit('change', this.searchCriteria)
      } else {
        this.$router.push({ path: '/movie/search', query: { searchCriteria: this.searchCriteria } })
      }
    }
  }
}
</script>

<style scoped>
  .search-bar {
    margin-top: 30px;
    margin-bottom: 50px;
  }
</style>
