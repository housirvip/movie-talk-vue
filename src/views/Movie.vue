<template>
  <div class="movie">
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="6" :offset="0">
            <el-image src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"></el-image>
          </el-col>
          <el-col :span="6" :offset="0">
            <el-table
              :data="tabledData_MovieInfo"
              style="width: 100%">
              <el-table-column
                prop="MovieInfo"
                label="Movie Info">
              </el-table-column>
            </el-table>
          </el-col>
          <el-col :span="6" :offset="0" style="font-size: 70px;text-align: center;">
              <p>
                8.5
                <el-rate
                v-model="scoreTotal"
                disabled
                :max=10.00
                text-color="#ff9900">
              </el-rate></p>
          </el-col>
        </el-row>
        <el-row style="font-size: 20px;text-align: left;">
          <p>
            Introduction:
          </p>
        </el-row>
        <el-row>
            Marvel's The Avengers[6] (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland),[3][7] or simply The Avengers,
            is a 2012 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney
            Studios Motion Pictures.[N 1] It is the sixth film in the Marvel Cinematic Universe (MCU). The film was written and directed by Joss Whedon and features an
            ensemble cast that includes Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, and Jeremy Renner as the titular Avengers team,
            alongside Tom Hiddleston, Clark Gregg, Cobie Smulders, Stellan Skarsgård, and Samuel L. Jackson. In the film, Nick Fury, director of the spy agency S.H.I.E.L.D.,
            recruits Tony Stark, Steve Rogers, Bruce Banner, and Thor to form a team that must stop Thor's brother Loki from subjugating Earth.
        </el-row>
        <el-row style="font-size: 20px;text-align: left;">
          <p>
            Movie-scoring:
          </p>
        </el-row>
        <el-row>
          <el-col :span="4" :offset="0">
            <el-rate :allow-half="true" :show-score="true" :max="10" v-model="scoreSubmit">
            </el-rate>
          </el-col>
          <el-col :span="4" :offset="0">
            <el-button type="primary">Submit</el-button>
          </el-col>
        </el-row>
        <el-row style="font-size: 20px;text-align: left;">
          <p>
            Reviews:
          </p>
        </el-row>
        <el-row>
          <el-col :span="12" :offset="11">
            <el-button type="danger" size="medium" >Write a review</el-button>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 20px">
          <el-col :span="24"><div class="grid-content bg-purple-white" style="color: aliceblue"></div></el-col>
        </el-row>
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
              After the recent disappointments from Marvel, notably Thor and the abysmal second instalment of Ghost Rider, this was a pleasant experience.
              The special effects are dazzling, the plot is acceptable and the heroes are not making total idiots out of themselves just because the director
              wanted some “depth” to their characters. Sure there is a little bickering in between them but not too much to distract from the fun.
              I’ve always liked Robert Downey Jr’s portrayal of Tony Stark and his sharp tongue. I did wonder how they where going to get the Hulk
              in there since he’s supposed to be uncontrol.
            </el-row>
            <el-row>
              <el-col :span="6" offset="16" style="text-align: right">
                <el-button type="danger" size="medium" >Give a like</el-button>
              </el-col>
              <el-col :span="2" style="text-align: center">
                <el-button type="primary" size="medium" >Reply</el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 20px">
          <el-col :span="24"><div class="grid-content bg-purple-white" style="color: aliceblue"></div></el-col>
        </el-row>
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
              After the recent disappointments from Marvel, notably Thor and the abysmal second instalment of Ghost Rider, this was a pleasant experience.
              The special effects are dazzling, the plot is acceptable and the heroes are not making total idiots out of themselves just because the director
              wanted some “depth” to their characters. Sure there is a little bickering in between them but not too much to distract from the fun.
              I’ve always liked Robert Downey Jr’s portrayal of Tony Stark and his sharp tongue. I did wonder how they where going to get the Hulk
              in there since he’s supposed to be uncontrol.
            </el-row>
            <el-row>
              <el-col :span="6" offset="16" style="text-align: right">
                <el-button type="danger" size="medium" >Give a like</el-button>
              </el-col>
              <el-col :span="2" style="text-align: center">
                <el-button type="primary" size="medium" >Reply</el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 20px">
          <el-col :span="24"><div class="grid-content bg-purple-white" style="color: aliceblue"></div></el-col>
        </el-row>
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
              After the recent disappointments from Marvel, notably Thor and the abysmal second instalment of Ghost Rider, this was a pleasant experience.
              The special effects are dazzling, the plot is acceptable and the heroes are not making total idiots out of themselves just because the director
              wanted some “depth” to their characters. Sure there is a little bickering in between them but not too much to distract from the fun.
              I’ve always liked Robert Downey Jr’s portrayal of Tony Stark and his sharp tongue. I did wonder how they where going to get the Hulk
              in there since he’s supposed to be uncontrol.
            </el-row>
            <el-row>
              <el-col :span="6" offset="16" style="text-align: right">
                <el-button type="danger" size="medium" >Give a like</el-button>
              </el-col>
              <el-col :span="2" style="text-align: center">
                <el-button type="primary" size="medium" >Reply</el-button>
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
  name: 'Movie',
  data () {
    return {
      tabledData_MovieInfo: [{
        MovieInfo: 'Title: The Avengers'
      }, {
        MovieInfo: 'Pubdate: April 2019'
      }, {
        MovieInfo: 'Director:  Joss Whedon'
      }, {
        MovieInfo: 'Casts: Robert Downey Jr., Chris Evans , ark Ruffalo ,Chris Hemsworth'
      }],
      scoreSubmit: null,
      avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      scoreTotal: 8.5
    }
  }
}
</script>

<style scoped>

</style>
