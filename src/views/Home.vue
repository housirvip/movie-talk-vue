<template>
  <div class="home">
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="6" :offset="9">
            <el-input placeholder="search bar" v-model="searchCriteria" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
            </el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="9" :offset="2">
            <MovieLIst></MovieLIst>
          </el-col>
          <el-col :span="9" :offset="2">
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
<!--        <el-row>-->
<!--          <el-col :span="4" :offset="2">-->
<!--            <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>-->
<!--          </el-col>-->
<!--          <el-col :span="18">-->
<!--            <el-row>-->
<!--              <el-col :span="4" :offset="2">-->
<!--                <el-avatar shape="square" :size="100" :src="avatar"></el-avatar>-->
<!--              </el-col>-->
<!--            </el-row>-->
<!--            <el-row>asdasdasdasdasdasdasdasdasd</el-row>-->
<!--          </el-col>-->
<!--        </el-row>-->
        <div style="margin: 20px 0;"></div>
        <el-row>
          <el-col  :span="4" style="font-size: 30px">
            Discover Movie
          </el-col>
        </el-row>
        <div style="margin: 20px 0;"></div>
        <el-row>
          <el-col :span="4">
            <el-dropdown split-button @click="handleClick">
              Year
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>2019</el-dropdown-item>
                <el-dropdown-item>2018</el-dropdown-item>
                <el-dropdown-item>2017</el-dropdown-item>
                <el-dropdown-item>2016</el-dropdown-item>
                <el-dropdown-item>2015</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="4">
            <el-dropdown split-button @click="handleClick">
              Sort by
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Popularity</el-dropdown-item>
                <el-dropdown-item>Rating</el-dropdown-item>
                <el-dropdown-item>Release Date</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="4">
            <el-dropdown split-button @click="handleClick">
              Genres
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Roman</el-dropdown-item>
                <el-dropdown-item>History</el-dropdown-item>
                <el-dropdown-item>Adventure</el-dropdown-item>
                <el-dropdown-item>Crime</el-dropdown-item>
                <el-dropdown-item>Anime</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>

        <div style="margin: 20px 0;"></div>
        <el-row>
          <el-col :span="4">
            <el-row>
              <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"></el-image>
            </el-row>
            <el-row>
              The Avenger
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row>
              <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"></el-image>
            </el-row>
            <el-row>
              The Avenger
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row>
              <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"></el-image>
            </el-row>
            <el-row>
              The Avenger
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row>
              <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"></el-image>
            </el-row>
            <el-row>
              The Avenger
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="discover">See more</el-button>
          </el-col>
        </el-row>
        <div style="margin: 20px 0;"></div>
        <el-row>
          <el-col  :span="4" style="font-size: 30px">
            My followings
          </el-col>
          <el-col :span="4">
            <el-button type="primary">See more</el-button>
          </el-col>
        </el-row>
        <div style="margin: 20px 0;"></div>
        <el-row>
          <el-col :span="6">
            <el-row>
              <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"></el-image>
            </el-row>
            <el-row>
              The Avenger
            </el-row>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-row style="font-size: 20px;text-align: left;">
              <el-col :span="3">
                <el-row>
                  <el-avatar shape="square" :size="100" :src="avatar"></el-avatar>
                </el-row>
                <el-row>
                  Tom
                </el-row>
              </el-col>
              <el-col :span="6" :offset="3" style="font-size: 25px">
                Good movie
              </el-col>
            </el-row>
            <div style="margin: 20px 0;"></div>
            <el-row>
              After the recent disappointments from Marvel, notably Thor and the abysmal second instalment of Ghost Rider, this was a pleasant experience.
              The special effects are dazzling, the plot is acceptable and the heroes are not making total idiots out of themselves just because the director
              wanted some “depth” to their characters. Sure there is a little bickering in between them but not too much to distract from the fun.
              I’ve always liked Robert Downey Jr’s portrayal of Tony Stark and his sharp tongue. I did wonder how they where going to get the Hulk
              in there since he’s supposed to be uncontrol.
            </el-row>
          </el-col>
        </el-row>
        <div style="margin: 20px 0;"></div>
        <el-row>
          <el-col :span="6">
            <el-row>
              <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"></el-image>
            </el-row>
            <el-row>
              The Avenger
            </el-row>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-row style="font-size: 20px;text-align: left;">
              <el-col :span="3">
                <el-row>
                  <el-avatar shape="square" :size="100" :src="avatar"></el-avatar>
                </el-row>
                <el-row>
                  Tom
                </el-row>
              </el-col>
              <el-col :span="6" :offset="3" style="font-size: 25px">
                Good movie
              </el-col>
            </el-row>
            <div style="margin: 20px 0;"></div>
            <el-row>
              After the recent disappointments from Marvel, notably Thor and the abysmal second instalment of Ghost Rider, this was a pleasant experience.
              The special effects are dazzling, the plot is acceptable and the heroes are not making total idiots out of themselves just because the director
              wanted some “depth” to their characters. Sure there is a little bickering in between them but not too much to distract from the fun.
              I’ve always liked Robert Downey Jr’s portrayal of Tony Stark and his sharp tongue. I did wonder how they where going to get the Hulk
              in there since he’s supposed to be uncontrol.
            </el-row>
          </el-col>
        </el-row>
        <div style="margin: 20px 0;"></div>
        <el-row>
          <el-col  :span="4" style="font-size: 30px">
            Recommend
          </el-col>
        </el-row>
        <div style="margin: 20px 0;"></div>
        <el-row>
          <el-col :span="4">
            <el-row>
              <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"></el-image>
            </el-row>
            <el-row>
              The Avenger
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row>
              <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"></el-image>
            </el-row>
            <el-row>
              The Avenger
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row>
              <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"></el-image>
            </el-row>
            <el-row>
              The Avenger
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row>
              <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"></el-image>
            </el-row>
            <el-row>
              The Avenger
            </el-row>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import MovieLIst from '../components/MovieLIst'
import { AccountService } from '../services/api'

export default {
  name: 'home',
  components: {
    MovieLIst
  },
  data () {
    return {
      checked: true,
      searchCriteria: '',
      avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
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
    search () {
      console.log('search')
      AccountService.test().then(res => console.log(res))
    },
    discover () {
      this.$router.push({ path: '/discover' })
    },
    toMovie () {
      this.$router.push({ path: '/movie' })
    },
    handleClick () {

    }
  }
}
</script>

<style>
</style>
