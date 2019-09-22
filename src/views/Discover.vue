<template>
  <div class="discover">
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="6" :offset="18">
            <el-input placeholder="Movie Search" v-model="movieSearchInput" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" @click="moviesearch"></el-button>
            </el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div style="margin: 30px 0;"></div>
            <el-row>
              <el-col  :span="4" :offset="10" style="font-size: 30px">
                Discover Movie
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row>
          <div style="margin: 60px 0;"></div>
        </el-row>
        <el-row>
          <el-col :span="4">
            <el-select v-model="year" placeholder="year" @change="movieDiscover1">
              <el-option
                v-for="item in years"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="genre" placeholder="genre" @change="movieDiscover1">
              <el-option
                v-for="item in genres"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="sort" placeholder="sort" @change="movieDiscover1">
              <el-option
                v-for="item in sorts"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <div style="margin: 100px 0;"></div>
        </el-row>
        <el-row>
          <el-col :span="4" :offset="0.5">
            <el-row>
              <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg" @click="toMovie"></el-image>
            </el-row>
            <el-row>
              The Avenger
            </el-row>
          </el-col>
          <el-col :span="4" :offset="1">
            <el-row>
              <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg" @click="toMovie"></el-image>
            </el-row>
            <el-row>
              The Avenger
            </el-row>
          </el-col>
          <el-col :span="4" :offset="1">
            <el-row>
              <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg" @click="toMovie"></el-image>
            </el-row>
            <el-row>
              The Avenger
            </el-row>
          </el-col>
          <el-col :span="4" :offset="1">
            <el-row>
              <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg" @click="toMovie"></el-image>
            </el-row>
            <el-row>
              The Avenger
            </el-row>
          </el-col>
          <el-col :span="4" :offset="1">
            <el-row>
              <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg" @click="toMovie"></el-image>
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
              <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg" @click="toMovie"></el-image>
            </el-row>
            <el-row>
              The Avenger
            </el-row>
          </el-col>
          <el-col :span="4" :offset="1">
            <el-row>
              <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg" @click="toMovie"></el-image>
            </el-row>
            <el-row>
              The Avenger
            </el-row>
          </el-col>
          <el-col :span="4" :offset="1">
            <el-row>
              <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg" @click="toMovie"></el-image>
            </el-row>
            <el-row>
              The Avenger
            </el-row>
          </el-col>
          <el-col :span="4" :offset="1">
            <el-row>
              <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg" @click="toMovie"></el-image>
            </el-row>
            <el-row>
              The Avenger
            </el-row>
          </el-col>
          <el-col :span="4" :offset="1">
            <el-row>
              <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg" @click="toMovie"></el-image>
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
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Discover',
  data () {
    return {
      // TODO 请明确，变量名格式 lowerCamelCase
      movieSearchInput: '',
      value: '',
      years: [{
        value: '2019',
        label: '2019'
      }, {
        value: '2018',
        label: '2018'
      }, {
        value: '2017',
        label: '2017'
      }, {
        value: '2016',
        label: '2016'
      }, {
        value: '2015',
        label: '2015'
      }, {
        value: '2014',
        label: '2014'
      }, {
        value: '2013',
        label: '2013'
      }, {
        value: '2012',
        label: '2012'
      }, {
        value: '2011',
        label: '2011'
      }, {
        value: '2010',
        label: '2010'
      }, {
        value: '2009',
        label: '2009'
      }, {
        value: '2008',
        label: '2008'
      }, {
        value: '2007',
        label: '2007'
      }, {
        value: '2006',
        label: '2006'
      }, {
        value: '2005',
        label: '2005'
      }, {
        value: '2004',
        label: '2004'
      }, {
        value: '2003',
        label: '2003'
      }, {
        value: '2002',
        label: '2002'
      }, {
        value: '2001',
        label: '2001'
      }, {
        value: '2000',
        label: '2000'
      }, {
        value: '1999',
        label: '1999'
      }
      ],
      year: '',
      genres: [{
        value: '10749',
        label: 'Romance'
      }, {
        value: '36',
        label: 'History'
      }, {
        value: '80',
        label: 'Crime'
      }, {
        value: '12',
        label: 'Adventure'
      }, {
        value: '28',
        label: 'Action'
      }, {
        value: '16',
        label: 'Animation'
      }, {
        value: '35',
        label: 'Comedy'
      }, {
        value: '99',
        label: 'Documentary'
      }, {
        value: '18',
        label: 'Drama'
      }, {
        value: '10751',
        label: 'Family'
      }, {
        value: '14',
        label: 'Fantasy'
      }, {
        value: '27',
        label: 'Horror'
      }, {
        value: '10402',
        label: 'Music'
      }, {
        value: '9648',
        label: 'Mystery'
      }, {
        value: '878',
        label: 'Science Fiction'
      }, {
        value: '10770',
        label: 'TV Movie'
      }, {
        value: '53',
        label: 'Thriller'
      }, {
        value: '10752',
        label: 'War'
      }, {
        value: '37',
        label: 'Western'
      }],
      genre: '',
      sorts: [{
        value: 'popularity.desc',
        label: 'popularity'
      }, {
        value: 'release_day.desc',
        label: 'release day'
      }],
      sort: ''
    }
  },
  methods: {
    moviesearch () {
      // Todo Search Movies according input
      console.log('movie search')
      this.$router.push({ path: '/searchmovie' })
    },
    movieDiscover1 () {
      return {
        moviePng: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
      }
    },
    toMovie () {
      console.log('tomovie')
      this.$router.push({ path: '/movie' })
    }
  }
}
</script>

<style>

</style>
