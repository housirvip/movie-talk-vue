<template>
  <div class="Discover">
    <el-main>
      <el-row>
        <el-col :span="6" :offset="18">
          <el-input placeholder="Movie Search" v-model="movieSearchInput" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" @click="MovieSearch"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :offset="10">
          <div style="margin: 30px 0;"></div>
          <el-row>
            <el-col  :span="4" style="font-size: 30px">
              Discover Movie
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row>
        <div style="margin: 60px 0;"></div>
      </el-row>
        <el-col :span="6" :offset="6">
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
        <el-col :span="6">
          <el-dropdown split-button @click="handleClick">
            Sorted by
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Popularity</el-dropdown-item>
              <el-dropdown-item>Rating</el-dropdown-item>
              <el-dropdown-item>Release Date</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="6">
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
      <el-row>
        <div style="margin: 100px 0;"></div>
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
    </el-main>
  </div>
</template>

<script>
export default {
  name: 'Discover',
  data () {
    return {
      // TODO 请明确，变量名格式 lowerCamelCase
      movieSearchInput: '',
      value: ''
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
