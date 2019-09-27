<template>
  <div class="movie-search">
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="6" :offset="17">
            <search-bar @change="getSearchList"></search-bar>
          </el-col>
        </el-row>
        <el-row>
          <p style="font-size: 30px;text-align: center">Search Movie</p>
        </el-row>
        <el-row v-for="(searches,indexRow) in searchList" v-bind:key="indexRow">
          <el-col :span="4" v-for="(search,index) in searches"  v-bind:key="index" :offset="index%4===0?2:1" >
            <movie-card :movie-id="search.id" :title="search.title" width="300"
                        :url="search.poster_path"></movie-card>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-pagination
            @current-change="pageChange"
            :current-page.sync="currentPage"
            :page-size="20"
            layout="prev, pager, next, jumper"
            :total="totalCount">
          </el-pagination>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import SearchBar from '../../components/SearchBar'
import MovieCard from '../../components/MovieCard'
import { MovieService } from '../../services/api'

export default {
  name: 'Search',
  components: {
    SearchBar,
    MovieCard
  },
  data () {
    return {
      searchList: [],
      totalCount: 40,
      currentPage: 1
    }
  },
  watch: {
    '$route.query.searchCriteria': function (newValue, oldValue) {
      this.getSearchList(newValue)
    }
  },
  mounted () {
    this.getSearchList(this.$route.query.searchCriteria)
  },
  methods: {
    getSearchList (searchCriteria) {
      MovieService.getSearch(searchCriteria, this.currentPage).then(
        result => {
          this.searchList = result.results.reduce((pre, next, idx) => {
            const inner = pre[~~(idx / 4)]
            if (inner !== undefined) {
              inner.push(next)
            } else {
              pre.push([next])
            }
            return pre
          }, [[]])
        }
      ).catch(() => {})
    },
    pageChange (page) {
      this.currentPage = page
      this.getSearchList()
    },
    toMovie () {
      this.$router.push({ path: '/movie' })
    }
  }
}

</script>

<style scoped>

</style>
