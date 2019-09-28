<template>
  <div @click="toFriend" class="div-card">
    <el-card shadow="hover" class="user-card" :body-style="{ padding: '0px' }">
      <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"/>
      <div style="padding: 5px;">
        <span class="username">{{username}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    username: String,
    uid: Number
  },
  methods: {
    toFriend () {
      this.$router.push({ path: '/review/friend', query: { id: this.uid.toString() } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .username{
    text-align: center;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .user-card{
    text-align: center;
  }
  .div-card{
    padding-bottom: 20px;
  }
</style>
